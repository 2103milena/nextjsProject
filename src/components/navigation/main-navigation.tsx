import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavList } from './navigation-items';

/** 
 * for now the generic style is applied
 * we can change the colors when we agree on the color schema and theme for the entire app
 */

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);

  const menuItems = {
    about: t('about'),
    rules: t('rules'),
    membership: t('membership'),
    faq: t('faq'),
    meeting: t('meeting'),
    sports: t('sports'),
    login: t('login'),
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto fixed max-w-full px-6 py-3 top-0 z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Typography
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Kraljevo à la française
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList menuItems={menuItems} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList menuItems={menuItems} />
      </Collapse>
    </Navbar>
  );
};
