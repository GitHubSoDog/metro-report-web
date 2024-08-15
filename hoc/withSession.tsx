import React from 'react';

// type HocWithSessionType = {
//   authorizedUser: AuthorizedUserType;
//   status?: 'authenticated' | 'loading' | 'unauthenticated';
//   router?: NextRouter;
// };

const withSession = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  title: string
) => {
  const ComponentWithSession = (props: P) => {
    return <WrappedComponent {...props} />;
  };

  ComponentWithSession.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;
  return ComponentWithSession;
};

export default withSession;
