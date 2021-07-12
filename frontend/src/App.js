import "./App.css";
import Header from "./components/Header/Header";
import Registration from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container d-flex align-items-center flex-column">
        <Registration />
      </div>
    </div>
  );
}

export default App;
