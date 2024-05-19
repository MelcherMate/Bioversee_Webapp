import React, { useState } from "react";
import "./Canvas.css";

interface Card {
  id: string;
  coordinates: { x: number; y: number };
  text: string;
}

const Canvas: React.FC<{ cards: Card[] }> = ({ cards }) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [offset, setOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const handleMouseDown = (event: React.MouseEvent, card: Card) => {
    setCurrentCard(card);
    setOffset({
      x: event.clientX - card.coordinates.x,
      y: event.clientY - card.coordinates.y,
    });
    setDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (dragging && currentCard) {
      currentCard.coordinates.x = event.clientX - offset.x;
      currentCard.coordinates.y = event.clientY - offset.y;
      setCurrentCard({ ...currentCard });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setCurrentCard(null);
  };

  return (
    <div
      className="canvas"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{
            transform: `translate(${card.coordinates.x}px, ${card.coordinates.y}px)`,
          }}
          onMouseDown={(event) => handleMouseDown(event, card)}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
