import ImagePokeball from "../assets/pokeball.png";
const Card = ({ card, handleCard }) => {
  // console.log(card.flipped);
  return (
    <div
      className={`drop-shadow-md flex items-center ${
        card.flipped ? "[transform: rotateY(10deg)]" : `bg-white`
      } justify-center cursor-pointer h-20 w-20 hover:scale-105 rounded-xl`}
      onClick={() => handleCard(card.id)}
    >
      <div>
        {card.flipped ? (
          <img
            src={card.image}
            alt={card.alt}
            className={`h-16 scale-110 ${
              !card.flipped
                ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
                : ""
            }`}
          />
        ) : (
          <img
            src={ImagePokeball}
            alt={card.alt}
            className={`h-16 scale-110 ${
              !card.flipped
                ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000"
                : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
