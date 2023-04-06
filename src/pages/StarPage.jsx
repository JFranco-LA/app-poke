import fondo from "../assets/images/background1-poke.png";
import ButtonRedirect from "../components/ButtonRedirect";

const StarPage = () => {
  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <img
        src={fondo}
        alt="fondo-poke"
        className=" fixed w-full h-full object-cover"
      />
      <ButtonRedirect name={"START"} secundary={"Aventure"} direction={"home"}/>
    </div>
  );
};

export default StarPage;
