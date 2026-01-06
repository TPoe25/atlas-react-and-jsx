import React from 'react';
import './Greeting.css';

const Greeting = () => {
  const hour = new Date().getHours();
  let text = 'Good Night!';
  let img = 'src/assets/night.svg';

  if (hour >= 6 && hour < 12) {
    text = 'Good Morning!';
    img = 'src/assets/day.svg';
  } else if (hour >= 12 && hour < 18) {
    text = 'Good Afternoon!';
    img = 'src/assets/day.svg';
  } else if (hour >= 18 && hour < 22) {
    text = 'Good Evening!';
    img = 'src/assets/evening.svg';
  }

  return (
    <div className="greeting">
      <h1>{text}</h1>
      <img src={img} alt={text} />
    </div>
  );
};

export default Greeting;
