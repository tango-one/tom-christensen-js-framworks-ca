//libraries
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// styles
import "../styles/GameCard.css";

const GameCard = ({ data }) => {
  var time = new Date(data.released).toDateString();

  return (
    <div className='game-card'>
      <img
        src={data.background_image}
        alt={data.name}
        className='game-card-img'
      />
      <div className='game-card-content'>
        <div>
          <h3>{data.name}</h3>
          <p>Release Date: {time}</p>
        </div>
        <div className='row m-0'>
          <div className='col-4 game-card-rating'>
            <FaStar size={18} className='mr-2' /> {data.rating}
          </div>
          <Link
            className='col-8 game-card-button game-card-link'
            to={`/game/${data.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
