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
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Refresh the Page to See My Random Greetings 😃</h1>
      <span>.......................................................</span>
      <strong><h2>{screenMessage}</h2></strong>
      <span>.......................................................</span>
    </section>
  );
};

export default Greeting;
