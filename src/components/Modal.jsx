import pokeball from "../assets/poke.svg";

const Modal = ({ gameOver, setGameOver, moves, handleNewGame }) => {
  return (
    <div
      className={`${
        gameOver ? "flex" : "hidden"
      } flex-col justify-center items-center gap-7 bg-black absolute w-[250px] h-[300px] z-40 rounded-lg `}
    >
      <img src={pokeball} alt="pokeball" className="w-[4rem] animate-bounce" />
      <button
        onClick={() => setGameOver(false)}
        className="text-white font-bold absolute right-0 top-0 mr-3 hover:text-yellow-500 text-3xl"
      >
        &times;
      </button>
      <h2 className="text-white font-bold text-xl tracking-wider">
        Juego Terminado!
      </h2>
      <div className="flex justify-beetween gap-10">
        <p className="text-white ">Movimientos: {moves}</p>
      </div>
      <button
        onClick={handleNewGame}
        className="bg-yellow-500 font-semibold text-black rounded-md px-5 py-1  hover:bg-gray-800 hover:text-white transition-all"
      >
        Comenzar de nuevo
      </button>
    </div>
  );
};

export default Modal;
