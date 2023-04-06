import React, { useEffect, useState } from "react";

// Components
import Card from "./Card";
import Modal from "./Modal";

import { data } from "../data/pokemon";
import { Howl } from "howler";

import winPokemon from "../assets/sounds/winPokemon.mp3";
import nicePokemon from "../assets/sounds/nicePokemon.mp3";
import losePokemon from "../assets/sounds/losePokemon.mp3";
import failPokemon from "../assets/sounds/failPokemon.mp3";

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
  const [niceSound, setNiceSound] = useState(null);

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

  const sounds = {
    win: new Howl({ src: [winPokemon] }),
    nice: new Howl({ src: [nicePokemon] }),
    lose: new Howl({ src: [losePokemon] }),
    fail: new Howl({ src: [failPokemon] }),
  };

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

          sounds.nice.play();
        } else {
          sounds.fail.play();
          setTimeout(() => {
            firstCard.flipped = false;
            secondCard.flipped = false;
            setCards(cards);
            setIsDisabled(false);
          }, 700);
        }

        setFlippedCards([]);
        setMoves(moves + 1);
      }
      setCards(cards);
    }
    if (cards.every((card) => card.matched)) {
      sounds.win.play();
      setGameOver(true);
      setIsDisabled(true);
    }
  };

  const handleNewGame = () => {
    setCards([]);
    createBoard();
    setMoves(0);
    setGameOver(false);
    setIsDisabled(false);
  };

  return (
    <>
      {gameOver && (
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
      )}
      <div className="relative h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">PokeMory Game</h1>

        <div className="grid grid-cols-4 gap-3 justify-center items-center px-3 py-5 my-3">
          {cards.map((card) => (
            <Card card={card} key={card.id} handleCard={handleCard} />
          ))}
        </div>

        <button
          onClick={handleNewGame}
          className="bg-black font-semibold text-white rounded-md px-5 py-1 hover:bg-yellow-500 hover:text-black transition-all mb-3"
        >
          Comenzar de nuevo
        </button>
        <Modal
          gameOver={gameOver}
          setGameOver={setGameOver}
          moves={moves}
          handleNewGame={handleNewGame}
        />
      </div>
    </>
  );
};

export default Board;
