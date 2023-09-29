import { Link, useLoaderData } from 'react-router-dom';
import { getPizzaById } from '../../services/apiRestaurant';

function PizzaDetails() {
  const pizzaData = useLoaderData();
  const { name, unitPrice, imageUrl, ingredients, soldOut } = pizzaData;

  return (
    <div className="pt-5">
      <Link to="/">&larr; Go to menu</Link>
      <div className="mt-3 flex items-center rounded-3xl px-5 py-5 shadow-md">
        <img src={imageUrl} alt={name} className="mr-6 h-auto w-1/3" />
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="mt-2 text-lg">{soldOut ? 'Sold Out' : 'Available'}</p>
          <p className="mt-2 text-lg">Price: ${unitPrice}</p>
          <h2 className="mt-4 text-xl font-semibold">Ingredients:</h2>
          <ul className="mt-2 list-disc pl-6">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetails;

export async function loader({ params }) {
  const { id } = params;
  const pizzaData = await getPizzaById(id);
  return pizzaData.pizza[0];
}
