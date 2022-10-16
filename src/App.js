import Main from "./Main";
import Sidebar from "./Sidebar";
import Config from "./config.json";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Sidebar Data={Config.Sidebar} />
      <Main />
    </div>
  );
}
