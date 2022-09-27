import { scaleBand, scaleLinear, select, SeriesPoint, stack } from 'd3';
import { useEffect, useRef } from 'react';
import { StackedBarProps } from './types';
import { colorMap } from '../../globals/constants';

const StackedBar = ({ ratio }: StackedBarProps) => {
	const width = 100;
	const height = 300;

	const svgRef = useRef(null);
	useEffect(() => {
		const svg = select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.append('g');
		console.log('new?');
		// List of subgroups = header of the csv files = soil condition here
		const subgroups = ratio.map(({ name }) => name);

		// List of groups = species here = value of the first column called group -> I show them on the X axis
		const groups = ['name'];

		// Add X scale
		const x = scaleBand().domain(groups).range([0, width]);

		// Add Y scale
		const max = ratio.map(({ amount }) => amount).reduce((a, c) => a + c);
		const y = scaleLinear().domain([0, max]).range([height, 0]);

		//stack the data? --> stack per subgroup
		const stackedData = stack().keys(subgroups)([
			ratio.reduce(
				(obj, { name, amount }) => Object.assign(obj, { [name]: amount }),
				{}
			)
		]);
		type SeriesPointWithName = SeriesPoint<{
			[key: string]: number;
		}> & { name: string };

		stackedData.forEach(ingArr =>
			ingArr.forEach(coors => {
				(coors as SeriesPointWithName).name = ingArr.key;
			})
		);

		// Show the bars
		const blocks = svg
			.selectAll('g')
			// Enter in the stack data = loop key per key = group per group
			.data(stackedData)
			.join('g')
			.attr('fill', ({ key }) => colorMap(key) as string);

		blocks
			.selectAll('rect')
			// enter a second time = loop subgroup per subgroup to add all rectangles
			.data(d => d)
			.join('rect')
			.attr('y', d => y(d[1]))
			.attr('height', d => y(d[0]) - y(d[1]))
			.attr('width', x.bandwidth());

		const textGroup = blocks.selectAll('text').data(d => d);
		const lineSpace = 2;
		const fontSize = '0.8rem';

		textGroup
			.join('text')
			.text(d => (d as SeriesPointWithName).name)
			.attr('y', d => y(d[1]) + (y(d[0]) - y(d[1])) / 2 - lineSpace)
			.attr('x', x.bandwidth() / 2)
			.attr('dominant-baseline', 'auto')
			.style('text-anchor', 'middle')
			.style('font-size', fontSize)
			.style('text-transform', 'capitalize')
			.style('fill', 'white');

		textGroup
			.join('text')
			.text(d => `${d[1] - d[0]} Parts`)
			.attr('y', d => y(d[1]) + (y(d[0]) - y(d[1])) / 2 + lineSpace)
			.attr('x', x.bandwidth() / 2)
			.attr('dominant-baseline', 'hanging')
			.style('text-anchor', 'middle')
			.style('font-size', fontSize)
			.style('fill', 'white');

		return () => {
			svg.remove();
		};
	}, [ratio]);

	return (
		<div>
			<svg ref={svgRef} />
		</div>
	);
};

export default StackedBar;
