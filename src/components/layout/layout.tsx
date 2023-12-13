import { Fragment, ReactNode } from 'react';
import { NavBar } from '../navigation/main-navigation';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};
// min-h-screen is temporary just not to mess up the pages that currently do not have a content
export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <Fragment>
      <NavBar />
      <main className={`bg-white w-[90%] max-w-5xl p-12 rounded-3xl my-24 mx-auto min-h-screen ${className}`}>
        {children}
      </main>
    </Fragment>
  );
};
