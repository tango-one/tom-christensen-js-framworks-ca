// libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { Badge } from "reactstrap";

// styles
import "../styles/Game.css";

const Game = () => {
  // game id
  const { id } = useParams();

  // state
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  if (detail == null) {
    return <h2> </h2>;
  }

  return (
    <div className='p-0 p-md-5 game'>
      <div className='game-detail row m-0 p-0'>
        <img
          className='col-12 col-md-6 px-0 w-100 game-img'
          src={detail.background_image}
          alt={detail.name}
        />
        <div className='col-12 col-md-6 game-content p-0 m-0 px-3 px-md-4 py-4 py-md-4 h-100'>
          <h2 className='game-title '>{detail.name}</h2>
          <div className='row m-0 mb-2'>
            {detail.genres.map((item, i) => (
              <Badge key={i} className='mr-1' color='dark' pill>
                {item.name}
              </Badge>
            ))}
          </div>
          <p className='game-rating d-flex align-items-center'>
            <span>
              <FaStar />
            </span>
            {detail.rating}
          </p>
          <div className=' mb-3 mb-md-5'>
            <h6>Platforms:</h6>
            {detail.parent_platforms.map((item, i) => (
              <span className='mr-2' key={i}>
                {item.platform.name},
              </span>
            ))}
          </div>
          <p className='game-desc'>{detail.description_raw}</p>
          <a
            className='justify-self-end game-btn'
            href={detail.website}
            target='_blank'
            rel='noreferrer'
          >
            Go To Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
