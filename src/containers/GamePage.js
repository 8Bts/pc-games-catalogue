import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchSingleGameData } from '../redux/actions';

const propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    released: PropTypes.string,
    img: PropTypes.string,
    website: PropTypes.string,
    rating: PropTypes.number,
    platforms: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.number.isRequired,
    }),
  }).isRequired,
  fetchSingleGameData: PropTypes.func.isRequired,
};

const defaultProps = {
  game: {
    name: '',
    genres: [],
    description: '',
    released: '',
    img: '',
    website: '',
    rating: -1,
    platforms: [],
  },
};

const GamePage = ({
  game,
  match,
  fetchSingleGameData,
}) => {
  useEffect(() => {
    fetchSingleGameData(match.params.gameId);
  }, []);

  return (
    <div>
      <div>{game.name}</div>
      <div>{game.genres}</div>
      <div>{game.description}</div>
      <div>{game.released}</div>
      <div>{game.img}</div>
      <div>{game.website}</div>
      <div>{game.rating}</div>
      <div>{game.platforms ? game.platforms.map((p) => p.name) : []}</div>
    </div>
  );
};

GamePage.propTypes = propTypes;
GamePage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  if (!state.singleGame.name) return {};

  return {
    name: state.singleGame.name,
    genres: state.singleGame.genres.map((g) => g.name),
    description: state.singleGame.description_raw,
    released: state.singleGame.released,
    img: state.singleGame.background_image,
    website: state.singleGame.website,
    rating: state.singleGame.rating,
    platforms: state.singleGame.platforms,
  };
};

const mapDispatchToProps = {
  fetchSingleGameData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
