import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  const params = useParams();
  console.log(params); // as of now this will provide an empty object with no ID in it bcoz it is not /something, these are search params not normal params


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return <div>WatchPage</div>;
};

export default WatchPage;
