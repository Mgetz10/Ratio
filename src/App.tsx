import { useState } from 'react';
import './App.scss';
import FormulaComparison from './components/FormulaComparison';
import { bakersPercentages } from './data/formulas';
import { ratios } from './data/ratios';
import { Tags } from './globals/types';
import { flatBreads } from './data/flatbreads';

function App() {
  const [activeTags, setActiveTags] = useState<Tags[]>([]);

  const allFormulas = [...ratios, ...bakersPercentages, ...flatBreads];
  const allTags = Array.from(
    new Set(
      allFormulas.reduce(
        (acc, { tags }) => (tags ? acc.concat(tags) : acc),
        [] as Tags[],
      ),
    ),
  );

  const formulas = allFormulas.filter(
    ({ tags }) =>
      activeTags.length === 0 ||
      (tags && tags.some((tag) => activeTags.includes(tag))),
  );

  return (
    <div>
      <h1>Formula Comparison</h1>
      <div className="tags">
        {allTags.map((tag) => (
          <button
            key={tag}
            style={
              activeTags.includes(tag)
                ? { backgroundColor: 'lightblue' }
                : undefined
            }
            onClick={() =>
              setActiveTags(
                activeTags.includes(tag)
                  ? activeTags.filter((t) => t !== tag)
                  : [...activeTags, tag],
              )
            }
          >
            {tag}
          </button>
        ))}
      </div>
      <FormulaComparison formulas={formulas} />
    </div>
  );
}

export default App;
