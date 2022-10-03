import './App.scss';
import FormulaComparison from './components/FormulaComparison';
import { ratios } from './data/ratios';

function App() {
	return (
		<div>
			<FormulaComparison formulas={ratios} />
		</div>
	);
}

export default App;
