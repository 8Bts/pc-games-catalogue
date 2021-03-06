import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import GameItem from '../components/GameItem';
import { fetchGamesData } from '../redux/actions/index';
import gamelist from '../styles/gamelist.module.css';

const GameList = ({
  gameItems, fetchGamesData,
}) => {
  useEffect(() => {
    if (gameItems.length === 0) fetchGamesData();
  }, []);

  return (
    <ul className={`list-group ${gamelist.ul}`}>
      {gameItems.map((item) => (
        <GameItem
          key={item.id}
          id={item.id}
          name={item.name}
          relDate={item.relDate}
          genres={item.genres}
          img={item.img}
          rating={item.rating}
        />
      ))}
    </ul>
  );
};

GameList.propTypes = {
  gameItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    relDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    rating: PropTypes.number,
  })).isRequired,
  fetchGamesData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  if (state.game.results === undefined) {
    return { gameItems: [] };
  }
  const gameItems = state.game.results.map((item) => ({
    id: item.id,
    name: item.name,
    relDate: item.released,
    genres: item.genres,
    img: item.background_image,
    rating: item.rating,
  }));
  return { gameItems };
};

const mapDispatchToProps = {
  fetchGamesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
