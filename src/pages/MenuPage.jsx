import { useEffect, useState } from "react";
import ButtonRedirect from "../components/ButtonRedirect";
import { Howl } from "howler";

import fondo2 from "../assets/images/background2-poke.png";
import fondoPokemon from "../assets/sounds/pokemonFondo.mp3";
import pokeball from "../assets/images/poke.svg";

const MenuPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [fondoMusicPoke, setFondoMusicPoke] = useState(true);

  useEffect(() => {
    setFondoMusicPoke(
      new Howl({
        src: [fondoPokemon],
        loop: true,
      })
    );
  }, []);

  const togglePlay = () => {
    if (fondoMusicPoke) {
      if (isPlaying) {
        fondoMusicPoke.pause();
      } else {
        fondoMusicPoke.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col md:flex-row gap-16">
      <img
        src={fondo2}
        alt="fondo-poke"
        className=" fixed w-full h-full object-cover"
      />
      <ButtonRedirect
        name={"Easy"}
        secundary={"4 cards"}
        direction={"game/easy"}
      />
      <ButtonRedirect
        name={"Medium"}
        secundary={"8 cards"}
        direction={"game/medium"}
      />
      <ButtonRedirect
        name={"Hard"}
        secundary={"12 cards"}
        direction={"game/hard"}
      />

      <div className="absolute top-5 right-5 flex flex-col items-center">
        <p className="mb-3 animate-bounce font-bold text-white p-2 rounded-xl bg-[#0000007f]">
          ¡TOCA LA POKEBALL!
        </p>
        <img
          src={pokeball}
          alt="pokeball"
          className="w-[4rem] animate-bounce "
          onClick={togglePlay}
        />
      </div>
    </div>
  );
};

export default MenuPage;
