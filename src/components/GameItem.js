import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import item from '../styles/item.module.css';

const GameItem = ({
  id, name, relDate, genres, img, rating,
}) => {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <li className={`list-group-item ${item.li}`}>
      <div className="row">
        <div className={`${item.left} col-md-4`}>
          <Link to={`/game/${id}`}>
            <span className={item.img} style={background} />
          </Link>
        </div>
        <div className={`${item.right} col-md-8`}>
          <h3>
            <Link to={`/game/${id}`} className={item.anchor}>{name}</Link>
          </h3>
          <div className="mb-3">
            {genres.map((genre) => (<span className="badge bg-info me-2" key={genre.id}>{genre.name}</span>))}
            <span className="badge bg-warning">
              {rating}
              {' / 5'}
            </span>
          </div>
          <span>
            Released:
            {`  ${relDate}`}
          </span>
        </div>
      </div>
    </li>
  );
};

GameItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  relDate: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  img: PropTypes.string,
  rating: PropTypes.number,
};

GameItem.defaultProps = {
  id: -1,
  name: '',
  relDate: '',
  genres: [],
  img: '',
  rating: '',
};

export default GameItem;
