import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import backgroundVideo from "./assets/videos/backgroundVideo.mp4";

function App() {
  return (
    <div className="App">
      <div className="background-wrapper">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <Header />
      <Main />
    </div>
  );
}

export default App;
