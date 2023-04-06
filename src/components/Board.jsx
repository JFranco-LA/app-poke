import React, { useEffect, useState } from "react";
import Card from "./Card";
import { data } from "../data/pokemon";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const createBoard = () => {
    const duplicateCards = data.items.flatMap((item) => {
      const duplicate = {
        ...item,
        id: `${item.id}2`,
      };
      return [item, duplicate];
    });

    const newCards = shuffleArray(duplicateCards);

    const cards = newCards.map((card) => {
      return {
        ...card,
        flipped: true,
        matched: false,
      };
    });

    setTimeout(() => {
      const updatedCards = cards.map((card) => {
        return {
          ...card,
          flipped: false,
        };
      });
      setCards(updatedCards);
    }, 1000);

    setCards(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  const handleCard = (id) => {
    if (isDisabled) return;

    const [currentCard] = cards.filter((card) => card.id === id);

    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true;

      const newFlippedCards = [...flippedCards, currentCard];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setIsDisabled(true);
        const [firstCard, secondCard] = newFlippedCards;

        if (firstCard.image === secondCard.image) {
          firstCard.matched = true;
          secondCard.matched = true;
          setIsDisabled(false);
        } else {
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            setCards(cards);
            setIsDisabled(false);
          }, 500);
        }

        setFlippedCards([]);
        setMoves(moves + 1);
      }
      setCards(cards);
    }
    if (cards.every((card) => card.matched)) {
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  return (
    <div className="relative h-screen flex items-center">
      <h1 className="font-bold text-4xl">PokeMory Game</h1>

      <div className="grid grid-cols-4 gap-3 justify-center items-center px-3 py-5 my-3">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleCard={handleCard} />
        ))}
      </div>
    </div>
  );
};

export default Board;
