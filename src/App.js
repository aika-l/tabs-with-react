import "./styles.css";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <div className="top">
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          fuga!
        </p>
      </div>
      <div className="wrap">
        <img
          src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
          alt="pic"
        />
        <div class="tabs">
          <Home />
        </div>
      </div>
    </div>
  );
}
