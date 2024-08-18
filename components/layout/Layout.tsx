import Head from 'next/head';
import { Fragment, PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
type LayoutPropsType = PropsWithChildren<{
  title: string;
  menu: string;
}>;
const Layout = ({ children, title, menu }: LayoutPropsType) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar />
      {children}
      {/* <Navbar children={children} menu={menu} /> */}
    </Fragment>
  );
};

export default Layout;
