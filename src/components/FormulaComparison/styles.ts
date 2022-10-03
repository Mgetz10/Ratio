import styled from 'styled-components';
import { allIngredients, colorMap } from '../../globals/constants';
import { slug } from '../../globals/helpers';
import { Ingredient } from '../../globals/types';

export const StyleFormulaComparison = styled.div`
	margin-left: 1rem;
	.formulas {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 0.5rem;

		.formula {
			text-align: center;
			.label {
				text-transform: capitalize;
				font-weight: 500;
				border: 0.1rem solid black;
				border-radius: 0.3rem;
			}
		}
		&.stacked-bar-sideways .formula {
			min-width: 60rem;
			display: flex;
			gap: 0.5rem;
			align-items: center;
			flex-direction: row-reverse;
			.label {
				width: 8rem;
				/* text-align: right; */
				padding: 0.5rem 0.2rem 0.5rem 0;
			}
		}
		&.stacked-bar .formula {
			flex: 5rem 0 0;
			gap: 0rem;
			display: flex;
			flex-direction: column;
			justify-content: start;
			.label {
				padding: 0.3rem;
			}
		}
		&.pie {
			gap: 1rem;
			.formula {
				position: relative;
				.label {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 25%;
					font-size: 0.9rem;
					color: black; // ${colorMap(Ingredient.LIQUID)};
					font-weight: 600;
					background: white;
					padding: 0.3rem 0;
				}
			}
		}
	}
	.sort-buttons {
		display: flex;
		gap: 0.1rem;
		margin-bottom: 0.8rem;
		align-items: center;
		button {
			cursor: pointer;
			white-space: nowrap;
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
