import styled from 'styled-components';
import { allIngredients, colorMap } from '../../globals/constants';

export const StyleRatioComparison = styled.div`
	margin-left: 1rem;
	.ratios {
		display: flex;
		justify-content: flex-start;
		gap: 0.5rem;
		.ratio {
			text-align: center;
			.label {
				text-transform: capitalize;
			}
		}
	}
	.sort-buttons {
		display: flex;
		gap: 0.1rem;
		margin-bottom: 0.8rem;
		button {
			color: white;
			font-size: 1.2rem;
			border: 0.1rem solid black;
			padding: 0.25rem 0.7rem;
			text-transform: capitalize;
			${allIngredients.map(
				ing => `&.${ing} {
				background: ${colorMap(ing)}
			}`
			)};
		}
	}
`;
