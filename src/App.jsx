import "./App.css";
import { Header } from "./Components/Header/Header";
import { CharacterRatings } from "./Components/CharacterRatings/CharacterRatings";
import { CharacterCards } from "./Components/CharacterCards/CharacterCards";
import { mainData } from "./data/data";

function App() {
  return (
    <div className="app-container">
      <Header />
      <CharacterRatings item={mainData} />
      <CharacterCards item={mainData} />
    </div>
  );
}

export default App;
