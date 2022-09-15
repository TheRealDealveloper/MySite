import React, { lazy, Suspense } from 'react';

const LazyFirstTestComponent = lazy(() => import('./FirstTestComponent'));

const FirstTestComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFirstTestComponent {...props} />
  </Suspense>
);

export default FirstTestComponent;
