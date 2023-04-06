import ReactHowler from "react-howler";

const Sound = ({ src }) => {
  return <ReactHowler src={src} playing={true} />;
};

export default Sound;
