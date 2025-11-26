import "./App.css";
import Card from "./components/Card";

interface CardData {
  id: number;
}

function App() {
  const cardsData = [] as CardData[];

  return (
    <>
      <Card />
      <button type="button"> Show me </button>

      {cardsData.map((cardData) => (
        <Card key={cardData.id} />
      ))}
    </>
  );
}

export default App;
