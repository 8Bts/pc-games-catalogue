import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchSingleGameData } from '../redux/actions';
import singlegame from '../styles/singlegame.module.css';

const propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    description: PropTypes.string,
    released: PropTypes.string,
    img: PropTypes.string,
    website: PropTypes.string,
    rating: PropTypes.number,
    platforms: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
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

  const background = {
    backgroundImage: `url(${game.img})`,
  };
  const requirements = game.platforms.length > 0 ? game.platforms.find((obj) => obj.platform.name === 'PC').requirements : { minumum: null, recommended: null };
  return (
    <div>
      <div className={singlegame.page}>
        <header>
          <div className="header">
            <h1 className={`${singlegame.h1} text-center p-2`}>{game.name}</h1>
          </div>
        </header>
        <section>
          <div className="row gx-0 my-4">
            <div className={`${singlegame.img} col-md-5`} style={background} />
            <div className={`${singlegame.right} col-md-7 d-flex flex-column`}>
              <span className="mb-1 d-flex">
                <span>Genres:</span>
                <span className="d-flex flex-wrap align-items-center">
                  { game.genres.map((genre) => (<span className="badge bg-info m-2 mt-1" key={genre.id}>{genre.name}</span>))}
                </span>
              </span>
              <span className="mb-1">
                Rating:
                <span className="badge bg-warning mx-2">
                  {game.rating}
                  {' / 5'}
                </span>
              </span>
              <span className="my-3">
                Released:
                <i>
                  {` ${game.released}`}
                </i>
              </span>
              <address>
                Website:
                <a target="_blank" rel="noreferrer" href={game.website} className="link-success ps-2">{game.website}</a>
              </address>
              <span className={singlegame.verdana}>{requirements.minimum}</span>
              <span className={singlegame.verdana}>{requirements.recommended}</span>
            </div>
          </div>
          <div>
            <h2 className={`${singlegame.h2} text-center mb-3 p-1`}>Description</h2>
            <div className={singlegame.verdana}>{game.description}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

GamePage.propTypes = propTypes;
GamePage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  if (!state.singleGame.name) return {};

  return {
    game: {
      name: state.singleGame.name,
      genres: state.singleGame.genres,
      description: state.singleGame.description_raw,
      released: state.singleGame.released,
      img: state.singleGame.background_image,
      website: state.singleGame.website,
      rating: state.singleGame.rating,
      platforms: state.singleGame.platforms,
    },
  };
};

const mapDispatchToProps = {
  fetchSingleGameData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
