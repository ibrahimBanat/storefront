import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useAxios = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  }, [dispatch]);
};
export default useAxios;
