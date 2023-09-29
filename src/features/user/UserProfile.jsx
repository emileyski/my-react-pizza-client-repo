import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUserOrders } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import OrderCard from '../order/OrderCard';
function UserProfile() {
  const { fullname, picture, email } = useSelector((state) => state.user);
console.log(picture)
  const orders = useLoaderData();
  // console.log(orders);
  return (
    <>
      <div className="mt-5 flex items-center rounded-3xl px-5 py-5 shadow-md">
        <img src={picture} alt="User" className="mr-4 h-16 w-16 rounded-full" />
        <div>
          <p className="text-lg font-semibold">{fullname}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="my-5 flex items-center rounded-3xl px-5 py-5 shadow-md">
        {orders.length === 0 ? (
          <h1 className="text-lg font-medium">
            You haven't ordered anything from us yet. Go to{' '}
            <LinkButton textSize="lg" to="/">
              menu
            </LinkButton>
            ?
          </h1>
        ) : (
          <div className="w-full">
            <h1 className="mb-3 text-lg font-medium">History of orders</h1>
            {orders.map((order, index) => (
              <OrderCard order={order} index={index} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export async function loader() {
  const orders = await getAllUserOrders();
  return orders;
}

export default UserProfile;
