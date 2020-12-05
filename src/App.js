import './App.css';
import Gugudan from './component/Gugudan';
import WordRelayClass from './component/WordRelayClass';
import WordRelayHooks from './component/WordRelayHooks';
import NumberBaseball from './NumberBaseball/NumberBaseball';
import NumberBaseballHooks from './NumberBaseball/NumberBaseballHooks';
import ResponseCheck from './ResponseCheck/ResponseCheck';
import ResponseCheckHooks from './ResponseCheck/ResponseCheckHooks';

function App() {
  return (
    <>
      <Gugudan />
      <WordRelayClass />
      <WordRelayHooks />
      <NumberBaseball />
      <NumberBaseballHooks />
      <ResponseCheck />
      <ResponseCheckHooks />
    </>
  );
}

export default App;
