import './App.css';
import {BrowserRouter} from "react-router-dom";
import Form from "./components/Form";
import Messages from "./components/Messages";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
          <div className={"container"}>
              <Header/>
          <Messages/>
          </div>
      </BrowserRouter>
  );
}

export default App;
