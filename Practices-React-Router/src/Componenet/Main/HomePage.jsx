import { useLoaderData } from 'react-router-dom';
import AllMeal from './AllMeal';

const HomePage = () => {
  const allMeal = useLoaderData();
  const { categories } = allMeal;
  console.log(categories);

  return (
    <div>
      <h3 className="text-3xl font-bold mb-10">
        This is our <span className="text-accent">Meal</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {categories.map(meal => (
          <AllMeal key={meal.id} Meal={meal}></AllMeal>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
