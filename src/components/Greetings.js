import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greetings';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greeting);
  const { status } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  let screenMessage;
  if (status === 'success') {
    screenMessage = greeting.message;
  }
  if (status === 'pending') {
    screenMessage = 'loading...';
  }

  return (
    <>
      <h1>Refresh the Page to See My Random Greetings 😃</h1>
      <span>.......................................................</span>
      <p>{screenMessage}</p>
      <span>.......................................................</span>
    </>
  );
};

export default Greeting;
