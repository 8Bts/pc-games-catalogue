import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import GameItem from '../components/GameItem';
import fetchGameData from '../redux/actions/index';

const GameList = ({
  gameItems, fetchGameData,
}) => {
  useEffect(() => fetchGameData(), []);

  return (
    <ul>
      {gameItems.map((item) => (
        <GameItem
          key={item.id}
          id={item.id}
          name={item.name}
          relDate={item.relDate}
          genres={item.genres}
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
  })).isRequired,
  fetchGameData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  if (state.results === undefined) {
    return { gameItems: [] };
  }
  const gameItems = state.results.map((item) => ({
    id: item.id,
    name: item.name,
    relDate: item.released,
    genres: item.genres,
  }));
  return { gameItems };
};

const mapDispatchToProps = {
  fetchGameData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
