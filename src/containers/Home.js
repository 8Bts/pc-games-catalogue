import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList';
import Filter from '../components/Filter';
import GenreList from './GenreList';
import { fetchGamesByGenre } from '../redux/actions';

const Home = ({ fetchGamesByGenre }) => (
  <div>
    <Filter fetchGamesByGenre={fetchGamesByGenre} />
    <div className="d-flex">
      <GenreList fetchGamesByGenre={fetchGamesByGenre} />
      <GameList />
    </div>
  </div>
);

Home.propTypes = {
  fetchGamesByGenre: PropTypes.func,
};

Home.defaultProps = {
  fetchGamesByGenre: (value) => value,
};

const mapDispatchToProps = {
  fetchGamesByGenre,
};

export default connect(null, mapDispatchToProps)(Home);
