// libraries
import { useEffect, useState } from "react";

// components
import Search from "../components/Search";
import GameList from "../components/GameList";

const Home = ({ data }) => {
  // states
  const [gameData, setGameData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    console.log("homes");
    setGameData(data);
    setTemp(data);
  }, [data]);

  // handle search
  const handleSearch = (search) => {
    if (temp.length > 0) {
      if (search !== "") {
        const filtered = temp.filter((country) => {
          return country.name.toLowerCase().includes(search.toLowerCase());
        });
        if (filtered.length > 0) {
          setGameData(filtered);
          setIsEmpty(false);
        } else {
          setIsEmpty(true);
        }
      } else {
        setGameData(temp);
      }
    }
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <GameList isEmpty={isEmpty} data={gameData} />
    </div>
  );
};

export default Home;
