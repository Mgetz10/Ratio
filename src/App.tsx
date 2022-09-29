import './App.scss';
import RatioComparison from './components/RatioComparison';
import { ratios } from './data/ratios';

function App() {
	return (
		<div>
			<RatioComparison ratios={ratios} />
		</div>
	);
}

export default App;
