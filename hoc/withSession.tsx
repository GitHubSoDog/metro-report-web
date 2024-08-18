import Layout from '@/components/layout/Layout';
import React from 'react';

// type HocWithSessionType = {
//   authorizedUser: AuthorizedUserType;
//   status?: 'authenticated' | 'loading' | 'unauthenticated';
//   router?: NextRouter;
// };

const withSession = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string,
  menu: string
) => {
  const ComponentWithSession = (props: P) => {
    return (
      <Layout title={title} menu={menu}>
        <WrappedComponent {...props} />
      </Layout>
    );
  };

  ComponentWithSession.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;
  return ComponentWithSession;
};

export default withSession;
