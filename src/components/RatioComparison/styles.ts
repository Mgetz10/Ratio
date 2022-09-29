import styled from 'styled-components';
import { allIngredients, colorMap } from '../../globals/constants';
import { slug } from '../../globals/helpers';

export const StyleRatioComparison = styled.div`
	margin-left: 1rem;
	.ratios {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 0.5rem;

		.ratio {
			text-align: center;
			.label {
				text-transform: capitalize;
			}
		}
		&.stacked-bar-sideways .ratio {
			min-width: 60rem;
			display: flex;
			gap: 0.5rem;
			align-items: center;
			flex-direction: row-reverse;
			.label {
				width: 8rem;
				text-align: right;
			}
		}
		&.stacked-bar .ratio {
			flex: 5rem 0 0;
		}
	}
	.sort-buttons {
		display: flex;
		gap: 0.1rem;
		margin-bottom: 0.8rem;
		align-items: center;
		button {
			cursor: pointer;
			color: white;
			font-size: 1.2rem;
			border: 0.1rem solid transparent;
			padding: 0.25rem 0.7rem;
			text-transform: capitalize;
			${allIngredients.map(
				ing => `&.${slug(ing)} {
				background: ${colorMap(ing)}
			}`
			)};
			&.icon {
				padding: 0;
				img {
					display: block;
					height: 1.9rem;
				}
				&.sideways img {
					transform: rotate(90deg);
				}
			}
			&.selected {
				border-color: black;
			}
		}
	}
`;
