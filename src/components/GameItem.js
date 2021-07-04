import PropTypes from 'prop-types';
import item from '../styles/item.module.css';

const GameItem = ({
  name, relDate, genres, img, rating,
}) => {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <li className={`list-group-item ${item.li}`}>
      <div className="row">
        <div className={`${item.left} col-4`}>
          <span className={item.img} style={background} />
        </div>
        <div className={`${item.right} col-8`}>
          <h3>{name}</h3>
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
  name: PropTypes.string,
  relDate: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  img: PropTypes.string,
  rating: PropTypes.string,
};

GameItem.defaultProps = {
  name: '',
  relDate: '',
  genres: [],
  img: '',
  rating: '',
};

export default GameItem;
