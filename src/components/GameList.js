// libraries

// styles
import "../styles/GameList.css";

// components
import GameCard from "./GameCard";
import Empty from "./Empty";

const GameList = ({ isEmpty, data }) => {
  

  if (isEmpty) {
    return <Empty />;
  }

  return (
    <div className="row m-0 pb-5">
      {data.map((item) => (
        <div
          className="p-0 col-12 col-sm-6 col-md-4 col-lg-3 p-3"
          key={item.id}
        >
          <GameCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default GameList;
