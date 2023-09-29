import React, { useEffect, useState } from 'react';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { useFetcher } from 'react-router-dom';

const defaultPicture =
  'https://cdn-icons-png.flaticon.com/512/3595/3595458.png';

function OrderCard({ order, index }) {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const fetcher = useFetcher();

  useEffect(function () {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/');
    // console.log(fetcher.data);
  });

  const toggleCart = () => {
    setIsCartOpen((value) => !value);
  };

  return (
    <div
      key={order._id}
      className={`my-4 ${index !== 0 ? 'border-t border-gray-300 pt-4' : ''}`}
    >
      <h1 className="mb-2 text-lg font-medium">Order ID: {order._id}</h1>
      <p className="text-gray-600">Status: {order.status}</p>
      <p className="text-gray-600">Address: {order.address}</p>
      <p className="text-gray-600">Phone: {order.phone}</p>
      <p className="text-gray-600">
        Estimated Delivery: {formatDate(new Date(order.estimatedDelivery))}
      </p>
      <p className="text-gray-600">
        Order Price: {formatCurrency(order.orderPrice)}
      </p>
      <button
        onClick={toggleCart}
        className="mt-1 flex cursor-pointer items-center text-gray-600"
      >
        Cart {isCartOpen ? '▲' : '▼'}
      </button>
      {isCartOpen && (
        <div className="px-4">
          {order.cart.map((item, itemIndex) => (
            <div
              key={item._id}
              className={`flex items-center py-3 ${
                itemIndex !== order.cart.length && order.cart.length > 1
                  ? 'border-b border-gray-300'
                  : ''
              }`}
            >
              <img
                alt={item.name}
                src={
                  fetcher?.data?.find((el) => el.id === item.pizzaId)
                    .imageUrl ?? defaultPicture
                }
                className="mr-4 h-12 w-12 rounded-full"
              />
              <div>
                <p>
                  {item.name} x{item.quantity}
                </p>
                <p>Price: {formatCurrency(item.totalPrice)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderCard;
