import StackedBar from '../StackedBar';
import { FormulaComparisonProps, VizStyle, SortButtonsProps } from './types';
import { StyleFormulaComparison } from './styles';
import { Ingredient, FormulaIngredient } from '../../globals/types';
import { sortFormulasBy, slug, combineMap } from '../../globals/helpers';
import { useState } from 'react';
import { allIngredients } from '../../globals/constants';
import CN from 'classnames';
import stackIcon from '../../fonts/icons/full_stacked_bar_chart_FILL0_wght400_GRAD0_opsz48.svg';
import pieIcon from '../../fonts/icons/pie_chart_FILL0_wght400_GRAD0_opsz48.svg';
import halfPie from '../../fonts/icons/looks_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg';
import PieChart from '../PieChart/index';

const ICON_MAP = {
  [VizStyle.STACKED_BAR]: stackIcon,
  [VizStyle.STACKED_BAR_SIDEWAYS]: stackIcon,
  [VizStyle.PIE]: pieIcon,
  [VizStyle.HALF_PIE]: halfPie,
};

const FormulaComparison = ({ formulas }: FormulaComparisonProps) => {
  const [sortBy, setSortBy] = useState<Ingredient>();
  const [formulaStyle, setFormulaStyle] = useState(VizStyle.PIE);
  const [combineFlour, setCombineFlour] = useState(false);
  const [simplify, setSimplify] = useState(false);
  const [roundLevel, setRoundLevel] = useState(100);

  const sortedFormulas = sortBy
    ? sortFormulasBy(
        formulas,
        sortBy,
        formulaStyle,
        combineFlour,
        simplify,
        roundLevel,
      )
    : formulas;

  const getFormulaStyleComponent = (
    style: VizStyle,
    formula: FormulaIngredient[],
  ) => {
    switch (style) {
      case VizStyle.STACKED_BAR:
        return <StackedBar formula={formula} />;
      case VizStyle.STACKED_BAR_SIDEWAYS:
        return <StackedBar formula={formula} sideways />;
      case VizStyle.PIE:
        return <PieChart formula={formula} />;
      case VizStyle.HALF_PIE:
        return <PieChart formula={formula} half />;
      default:
        return '';
    }
  };
  return (
    <StyleFormulaComparison>
      <SortButtons
        sortByState={[sortBy, setSortBy]}
        formulaStyleState={[formulaStyle, setFormulaStyle]}
        combineFlourState={[combineFlour, setCombineFlour]}
        simplifyState={[simplify, setSimplify]}
        roundLevelState={[roundLevel, setRoundLevel]}
      />
      <div className={CN('formulas', formulaStyle)}>
        {sortedFormulas.map(({ name, formula }) => (
          <div key={name} className="formula">
            {getFormulaStyleComponent(formulaStyle, formula)}
            <span className="label">{name}</span>
          </div>
        ))}
      </div>
    </StyleFormulaComparison>
  );
};

export default FormulaComparison;

const SortButtons = ({
  sortByState,
  formulaStyleState,
  combineFlourState,
  simplifyState,
  roundLevelState,
}: SortButtonsProps) => {
  const [sortBy, setSortBy] = sortByState;
  const [formulaStyle, setFormulaStyle] = formulaStyleState;
  const [combineFlour, setCombineFlour] = combineFlourState;
  const [simplify, setSimplify] = simplifyState;
  const [roundLevel, setRoundLevel] = roundLevelState;

  return (
    <div className="sort-buttons">
      <span>Sort by:</span>
      <div>
        {allIngredients
          .filter(
            (i) =>
              !combineFlour || !Object.values(combineMap).flat().includes(i),
          )
          .map((ing) => (
            <button
              className={CN(slug(ing), { selected: ing === sortBy })}
              key={ing}
              onClick={() => setSortBy(ing)}
            >
              {ing}
            </button>
          ))}
      </div>
      <div>
        {Object.values(VizStyle).map((style) => (
          <button
            className={CN('icon', {
              selected: formulaStyle === style,
              sideways: style === VizStyle.STACKED_BAR_SIDEWAYS,
            })}
            key={style}
            onClick={() => setFormulaStyle(style as VizStyle)}
          >
            <img src={ICON_MAP[style]} alt="" />
          </button>
        ))}
        <button
          onClick={() => setCombineFlour(!combineFlour)}
          style={{
            color: 'black',
            border: combineFlour ? '1px solid black' : 'none',
          }}
        >
          Combine Flour
        </button>
        <button
          onClick={() => setSimplify(!simplify)}
          style={{
            color: 'black',
            border: simplify ? '1px solid black' : 'none',
          }}
        >
          Simplify
        </button>
        {/* range */}
        <span>Round Level:</span>
        <input
          type="range"
          min="0"
          max="100"
          value={roundLevel}
          onChange={(e) => setRoundLevel(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};
