import Chat from "./pages/Chat";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="app">
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src={logo} alt="DharmGPT Logo" style={{ height: "80px" }} />
        <h1>DharmGPT</h1>
        <p>Find guidance from ancient scriptures across all major religions</p>
      </header>
      <Chat />
    </div>
  );
};

export default App;
