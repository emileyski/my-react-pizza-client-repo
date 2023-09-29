import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './userSlice';
import Button from '../../ui/Button';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';

function Username() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { fullname, picture } = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'account-popover' : undefined;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {isLoggedIn ? (
        <div onClick={handleClick} className="flex items-center">
          <img
            src={picture}
            className="mr-2 h-10 w-10 rounded-full"
            alt="User"
          />
          <span>{fullname}</span>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Button type="small-light" to="/login">
            Log in
          </Button>
          <Button type="small-light" to="/signup">
            Sign up
          </Button>
        </div>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="w-48 p-2">
          {' '}
          {/* Ширина и отступы */}
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            Profile
          </Link>
          <div className="my-2 border-t border-gray-300"></div>{' '}
          {/* Разделитель */}
          <button
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </Popover>
    </div>
  );
}

export default Username;
