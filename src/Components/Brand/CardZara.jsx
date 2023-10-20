import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardZara = ({ data }) => {
  const { _id, photo, type, name, brand, price, description } = data;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{type}</p>
          <p>{description}</p>
          <p>{brand}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">View Details</button>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-error">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardZara;
CardZara.propTypes = {
  data: PropTypes.string,
};
