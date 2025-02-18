import { scaleBand, scaleLinear, select, SeriesPoint, stack } from 'd3';
import { useEffect, useRef } from 'react';
import { StackedBarProps } from './types';
import { colorMap } from '../../globals/constants';
import { Ingredient } from '../../globals/types';

const StackedBar = ({ formula, sideways }: StackedBarProps) => {
  const svgRef = useRef(null);
  useEffect(() => {
    const width = sideways ? 1100 : 50;
    const height = sideways ? 32 : 340;

    const svg = select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g');

    // List of subgroups = header of the csv files = soil condition here
    const subgroups = formula.map(({ ingredient }) => ingredient);

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    const groups = ['ingredient'];

    const max = formula.map(({ amount }) => amount).reduce((a, c) => a + c);
    const barWidth = scaleBand()
      .domain(groups)
      .range([0, sideways ? height : width]);
    const barLength = scaleLinear()
      .domain([0, max])
      .range([sideways ? width : height, 0]);

    //stack the data? --> stack per subgroup
    const stackedData = stack().keys(subgroups)([
      formula.reduce(
        (obj, { ingredient, amount }) =>
          Object.assign(obj, { [ingredient]: amount }),
        {},
      ),
    ]);
    type SeriesPointWithName = SeriesPoint<{
      [key: string]: number;
    }> & { ingredient: string };

    stackedData.forEach((ingArr) =>
      ingArr.forEach((coors) => {
        (coors as SeriesPointWithName).ingredient = ingArr.key;
      }),
    );

    // Show the bars
    const blocks = svg
      .selectAll('g')
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .join('g')
      .attr('fill', ({ key }) => colorMap(key as Ingredient));

    blocks
      .selectAll('rect')
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data((d) => d)
      .join('rect')
      .attr('y', sideways ? '0' : (d) => barLength(d[1]))
      .attr('x', sideways ? (d) => barLength(d[1]) : '0')
      .attr(
        'height',
        sideways
          ? barWidth.bandwidth()
          : (d) => barLength(d[0]) - barLength(d[1]),
      )
      .attr(
        'width',
        sideways
          ? (d) => barLength(d[0]) - barLength(d[1])
          : barWidth.bandwidth(),
      );

    const textGroup = blocks.selectAll('text').data((d) => d);
    const lineSpace = 2;
    const fontSize = '0.8rem';
    type D3SeriesPoint = SeriesPoint<{
      [key: string]: number;
    }>;
    const textY = (spaceUp: boolean) =>
      sideways
        ? barWidth.bandwidth() / 2 + (spaceUp ? lineSpace * -1 : lineSpace)
        : (d: D3SeriesPoint) =>
            barLength(d[1]) +
            (barLength(d[0]) - barLength(d[1])) / 2 +
            (spaceUp ? lineSpace * -1 : lineSpace);
    const textX = (spaceUp: boolean) =>
      sideways
        ? (d: D3SeriesPoint) =>
            barLength(d[1]) + (barLength(d[0]) - barLength(d[1])) / 2
        : barWidth.bandwidth() / 2;
    textGroup
      .join('text')
      .text((d) => (d as SeriesPointWithName).ingredient)
      .attr('y', textY(true))
      .attr('x', textX(true))
      .attr('dominant-baseline', 'auto')
      .style('text-anchor', 'middle')
      .style('font-size', fontSize)
      .attr('font-weight', 'bold')
      .style('text-transform', 'capitalize')
      .style('fill', 'white');

    textGroup
      .join('text')
      .text((d) => `${d[1] - d[0]} Parts`)
      .attr('y', textY(false))
      .attr('x', textX(false))
      .attr('font-weight', 'bold')
      .attr('dominant-baseline', 'hanging')
      .style('text-anchor', 'middle')
      .style('font-size', fontSize)
      .style('fill', 'white');

    return () => {
      svg.remove();
    };
  }, [formula, sideways]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};

export default StackedBar;
