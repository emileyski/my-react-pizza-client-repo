import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaceItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  // console.log(currentQuantity);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(decreaceItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
