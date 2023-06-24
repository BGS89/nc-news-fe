import "./App.css";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="cover"></div>
      <AnimatedRoutes />
    </div>
  );
}

export default App;
