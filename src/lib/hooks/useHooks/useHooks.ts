import { useEffect, useState } from 'react';

export const useHooks = () => {
  const [data, setData] = useState(Math.random);
  useEffect(() => {
    console.log('useHooks mounted');
    setData(Math.random);
    return () => {
      console.log('useHooks unmounted');
    };
  }, [setData]);
  return { data };
};
