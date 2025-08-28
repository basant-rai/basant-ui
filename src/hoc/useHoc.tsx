// withLogging.js
import React, { useEffect } from 'react';

// The HOC takes a component as input
const withLogging = (WrappedComponent: any) => {
  // It returns a new component
  const WithLogging = (props: any) => {
    // This is the new functionality we are adding
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`${WrappedComponent.name} unmounted.`);
      };
    }, []);

    // We render the original component, passing along all its props
    return <WrappedComponent {...props} />;
  };

  return WithLogging;
};

export default withLogging;