import Head from 'next/head';
import { Fragment, PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
type LayoutPropsType = PropsWithChildren<{
  title: string;
  menu: string;
}>;
const Layout = ({ children, title, menu }: LayoutPropsType) => {
  const [isOpen, setIsOpen] = useState(true);
  const onToggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidebar isOpen={isOpen} />
      <Navbar menu={menu} onToggleSideBar={onToggleSideBar} isOpen={isOpen}>
        {children}
      </Navbar>
    </Fragment>
  );
};

export default Layout;
