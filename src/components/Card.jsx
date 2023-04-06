import ImagePokeball from "../assets/images/pokeball.png";
const Card = ({ card, handleCard }) => {
  console.log(card.bgColor);

  return (
    <div
      className={`drop-shadow-md flex items-center ${
        card.flipped && "[transform: rotateY(180deg)]"
      } justify-center cursor-pointer h-20 w-20 hover:scale-105 rounded-xl`}
      onClick={() => handleCard(card.id)}
    >
      <div className="">
        {card.flipped ? (
          <img
            src={card.image}
            alt={card.id}
            className={`h-16 w-16 scale-110  ${
              card.flipped &&
              `[transform: rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000 `
            }`}
          />
        ) : (
          <img
            src={ImagePokeball}
            alt={card.id}
            className={`h-16 w-16 scale-110 hover:animate-spin  ${
              card.flipped &&
              "[transform: rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000 "
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
