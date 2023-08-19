import { Provider } from "react-redux";
import Base from "./components/base/Base";
import Store from "./features/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Base />
      </Provider>
    </div>
  );
}

export default App;
