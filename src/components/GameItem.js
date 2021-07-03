import PropTypes from 'prop-types';
import item from '../styles/item.module.css';

const GameItem = ({
  name, relDate, genres, img,
}) => {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className={`${item.left} col-4`}>
          <span className={item.img} style={background} />
        </div>
        <div className={`${item.right} col-8`}>
          <h3>{name}</h3>
          <div className="mb-3">
            {genres.map((genre) => (<span className="badge bg-info me-2" key={genre.id}>{genre.name}</span>))}
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
};

GameItem.defaultProps = {
  name: '',
  relDate: '',
  genres: [],
  img: '',
};

export default GameItem;
