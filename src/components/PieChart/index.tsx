import { useEffect, useRef } from 'react';
import { arc as d3Arc, InternSet, pie as d3Pie, range, select } from 'd3';
import { PieChartProps } from './types';
import { colorMap } from '../../globals/constants';

const PieChart = ({ ratio }: PieChartProps) => {
	const svgRef = useRef(null);

	const width = 260;
	const height = 260;

	const innerRadius = width * 0; // 0.15;
	const stroke = innerRadius > 0 ? 'none' : 'white';
	const outerRadius = Math.min(width, height) / 2;
	const padAngle = stroke === 'none' ? 0 / outerRadius : 0;
	const labelRadius = innerRadius * 0.2 + outerRadius * 0.65;
	const strokeWidth = 3;
	const strokeLinejoin = 'round';
	useEffect(() => {
		const N = ratio.map(({ name }) => name);
		const V = ratio.map(({ amount }) => amount);
		const I = range(N.length).filter(i => !isNaN(V[i]));

		const title = (i: number) => `${N[i]}\n${V[i]} Parts`;

		// Construct arcs.
		const arcs = d3Pie()
			.padAngle(padAngle)
			.sort(null)
			.value(i => V[i as any])(I);

		const arc = d3Arc().innerRadius(innerRadius).outerRadius(outerRadius);
		const arcLabel = d3Arc().innerRadius(labelRadius).outerRadius(labelRadius);

		const svg = select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [-width / 2, -height / 2, width, height])
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

		svg
			.append('g')
			.attr('stroke', stroke)
			.attr('stroke-width', strokeWidth)
			.attr('stroke-linejoin', strokeLinejoin)
			.selectAll('path')
			.data(arcs)
			.join('path')
			.attr('fill', d => colorMap(N[d.data as any]))
			.attr('d', arc as any)
			.append('title')
			.text(d => title(d.data as any));

		svg
			.append('g')
			.attr('font-family', 'sans-serif')
			.attr('font-size', width * 0.07)
			.attr('text-anchor', 'middle')
			.selectAll('text')
			.data(arcs)
			.join('text')
			.attr('transform', d => `translate(${arcLabel.centroid(d as any)})`)
			.selectAll('tspan')
			.data(d => {
				const lines = `${title(d.data as any)}`.split(/\n/);
				return d.endAngle - d.startAngle > 0.25 ? lines : lines.slice(0, 1);
			})
			.join('tspan')
			.attr('x', 0)
			.attr('y', (_, i) => `${i * 1.1}em`)
			.attr('font-weight', (_, i) => (i ? null : 'bold'))
			.style('text-transform', 'capitalize')
			.style('fill', 'white')
			.text(d => d);

		return () => {
			svg.selectAll('g').remove();
		};
	}, [ratio]);

	return (
		<div>
			<svg ref={svgRef} />
		</div>
	);
};
export default PieChart;
