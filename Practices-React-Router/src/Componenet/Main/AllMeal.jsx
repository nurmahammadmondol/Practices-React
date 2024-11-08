import PropTypes from 'prop-types';

const AllMeal = ({ Meal }) => {
  const { strCategory, strCategoryThumb } = Meal;

  return (
    <div>
      <div className="card bg-base-100 image-full shadow-xl relative">
        <figure>
          <img className="w-full" src={strCategoryThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory} .....!</h2>

          <div className="card-actions absolute bottom-3 right-3">
            <button className="btn btn-outline btn-accent">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AllMeal.propTypes = {
  Meal: PropTypes.object,
};

export default AllMeal;
