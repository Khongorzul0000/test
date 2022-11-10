import { useState, useRef } from "react";
import "./App.css";

const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: props.isSelected ? "purple" : "rgb(36, 34, 34)",
      }}
      className="grid"
    >
      {props.value}
    </div>
  );
};

function App() {
  const [cards, setCards] = useState(
    [
      { value: 1, isSelected: false, isRemove: false },
      { value: 1, isSelected: false, isRemove: false },
      { value: 2, isSelected: false, isRemove: false },
      { value: 2, isSelected: false, isRemove: false },
      { value: 3, isSelected: false, isRemove: false },
      { value: 3, isSelected: false, isRemove: false },
      { value: 4, isSelected: false, isRemove: false },
      { value: 4, isSelected: false, isRemove: false },
      { value: 5, isSelected: false, isRemove: false },
      { value: 5, isSelected: false, isRemove: false },
      { value: 6, isSelected: false, isRemove: false },
      { value: 6, isSelected: false, isRemove: false },
      { value: 7, isSelected: false, isRemove: false },
      { value: 7, isSelected: false, isRemove: false },
      { value: 8, isSelected: false, isRemove: false },
      { value: 8, isSelected: false, isRemove: false },
    ].sort(() => 0.5 - Math.random())
  );

  const cardClick = (index) => {
    console.log(index);
    const updatedCards = cards.map((card, i) => {
      if (index === i) {
        return { ...card, isSelected: true };
      }
      return card;
    });
    setCards(updatedCards);
  };
  

  return (
    <div className="flex">
      <div className="square">
        {cards.map((card, index) => (
          <Card
            value={card.value}
            isSelected={card.isSelected}
            onClick={() => cardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
