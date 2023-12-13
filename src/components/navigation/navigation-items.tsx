import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import loginImage from '../../../public/images/login-iconnn.png';
import { MenuItems } from './types';

type NavListProps = {
  menuItems: MenuItems;
};

export const NavList: React.FC<NavListProps> = ({ menuItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Perform login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform logout logic here
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/home" className="text-gray-800 font-bold hover:text-blue-500 transition duration-300">
          {menuItems.home}
        </Link>

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/quiz" className="text-gray-800 font-bold hover:text-blue-500 transition duration-300">{menuItems.quiz}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href="/newsletter" className="text-gray-800 font-bold hover:text-blue-500 transition duration-300">{menuItems.newsletter}</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        {isLoggedIn ? (
          <Link
            href="/auth"
            className="flex items-center"
            onClick={handleLogout}
          >
            <Image
              src={loginImage}
              alt="login"
              className="h-full w-full object-cover pr-3"
            />
            Logout
          </Link>
        ) : (
          <Link
            href="/auth"
            className="flex items-center"
            onClick={handleLogin}
          >
            <Image
              src={loginImage}
              alt="logout"
              className="h-full w-full object-cover pr-3"
            />
            {menuItems.login}
          </Link>
        )}
      </Typography>
    </ul>
  );
};
