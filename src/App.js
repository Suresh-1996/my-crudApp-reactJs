import { Crud } from "./components/crud/index";
import { RealtimeData } from "./components/realtimeData/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Crud />
      <br />
      <br />
      <br />
      <RealtimeData />;
    </div>
  );
}

export default App;
