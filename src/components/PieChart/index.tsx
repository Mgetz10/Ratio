import { useEffect, useRef } from 'react';
import { arc as d3Arc, pie as d3Pie, range, select } from 'd3';
import { PieChartProps } from './types';
import { colorMap } from '../../globals/constants';

interface ExtendedPieChartProps extends PieChartProps {
  half?: boolean; // new prop for half-pie
}

const PieChart = ({ formula, half = false }: ExtendedPieChartProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const width = 260;
  const height = half ? 130 : 260;

  const innerRadius = 0;
  const stroke = innerRadius > 0 ? 'none' : 'white';
  const outerRadius = (half ? width : Math.min(width, height)) / 2;
  const padAngle = stroke === 'none' ? 0 / outerRadius : 0;
  const labelRadius = innerRadius * 0.2 + outerRadius * 0.65;
  const strokeWidth = 3;
  const strokeLinejoin = 'round';

  useEffect(() => {
    const svgEl = select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [
        -width / 2,
        half ? -height : -height / 2,
        width,
        height,
      ])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

    // Data arrays
    const N = formula.map(({ ingredient }) => ingredient);
    const V = formula.map(({ amount }) => amount);
    const validIndices = range(N.length).filter((i) => !isNaN(V[i]));

    // Create the pie generator
    const pieGenerator = d3Pie<number>()
      .padAngle(padAngle)
      .sort(null)
      .value((i) => V[i]);

    // If half = true, constrain angles to -π/2 ... π/2
    if (half) {
      pieGenerator.startAngle(-0.5 * Math.PI).endAngle(0.5 * Math.PI);
    }

    const arcs = pieGenerator(validIndices);

    // Arc generators for the slices and the labels
    const arcPath = d3Arc().innerRadius(innerRadius).outerRadius(outerRadius);
    const arcLabel = d3Arc().innerRadius(labelRadius).outerRadius(labelRadius);

    // Draw arcs
    const gArc = svgEl
      .append('g')
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linejoin', strokeLinejoin);

    gArc
      .selectAll('path')
      .data(arcs)
      .join('path')
      .attr('fill', (d) => colorMap(N[d.data]))
      .attr('d', arcPath as any)
      .append('title')
      .text((d) => `${N[d.data]}\n${V[d.data]} Parts`);

    // Draw text labels
    const gText = svgEl
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', width * 0.07)
      .attr('text-anchor', 'middle');

    gText
      .selectAll('text')
      .data(arcs)
      .join('text')
      .attr('transform', (d) => `translate(${arcLabel.centroid(d as any)})`)
      .selectAll('tspan')
      .data((d) => {
        // Only show two lines if slice is large enough
        const nameLine = N[d.data];
        const valueLine = `${V[d.data]} Parts`;
        return d.endAngle - d.startAngle > 0.25
          ? [nameLine, valueLine]
          : [nameLine];
      })
      .join('tspan')
      .attr('x', 0)
      .attr('y', (_, i) => `${i * 1.1}em`)
      .attr('font-weight', (_, i) => (i ? null : 'bold'))
      .style('text-transform', 'capitalize')
      .style('fill', 'white')
      .text((d) => d);

    // Cleanup on unmount
    return () => {
      svgEl.selectAll('*').remove();
    };
  }, [formula, half]);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};

export default PieChart;
