import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let autoIncrement = 1;

interface CardData {
  id: number;
}

function App() {
  const [cardsData, setCardsData] = useState([] as CardData[]);
  //const [displayCard, setDisplayCard] = useState("cardsData.id.1");

  return (
    <>
      <Card />
      {cardsData.map((cardData) => (
        <Card key={cardData.id} />
      ))}
      <button
        type="button"
        /*onClick={() => setCardsData(cardsData)}*/
        onClick={() => setCardsData([...cardsData, { id: autoIncrement++ }])}
        /*onClick={() => {
          const newCardsData = [];

          newCardsData.push(...cardsData);
          newCardsData.push({ id: autoIncrement++ });

          setCardsData(newCardsData);
        }}*/
      >
        Show me
      </button>
    </>
  );
}

export default App;
