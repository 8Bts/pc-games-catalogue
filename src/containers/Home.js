import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameList from './GameList';
import Filter from '../components/Filter';
import GenreList from './GenreList';
import PageNav from '../components/PageNav';
import {
  fetchGamesByGenre, setGenre, setPage,
} from '../redux/actions';

const Home = ({
  fetchGamesByGenre,
  setGenre, setPage,
  genre,
  page,
  totalPages,
}) => (
  <div>
    <Filter
      fetchGamesByGenre={fetchGamesByGenre}
      setGenre={setGenre}
      setPage={setPage}
    />
    <PageNav
      fetchGamesByGenre={fetchGamesByGenre}
      genre={genre}
      page={page}
      setPage={setPage}
      totalPages={totalPages}
    />
    <div className="d-flex">
      <GenreList
        fetchGamesByGenre={fetchGamesByGenre}
        setGenre={setGenre}
        setPage={setPage}
      />
      <GameList />
    </div>
    <PageNav
      fetchGamesByGenre={fetchGamesByGenre}
      genre={genre}
      page={page}
      setPage={setPage}
      totalPages={totalPages}
    />
  </div>
);

Home.propTypes = {
  fetchGamesByGenre: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  totalPages: Math.ceil(state.game.count / 15),
  genre: state.filter,
  page: state.page,
});

const mapDispatchToProps = {
  fetchGamesByGenre,
  setGenre,
  setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
