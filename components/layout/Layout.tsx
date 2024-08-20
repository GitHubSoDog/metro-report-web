import Head from 'next/head';
import { Fragment, PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
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
      <Navbar menu={menu}> {children}</Navbar>
    </Fragment>
  );
};

export default Layout;
