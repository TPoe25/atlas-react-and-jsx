import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';

const Greeting = () => {
  const hour = new Date().getHours();

  let text = 'Good Night!';
  let img = night;

  if (hour >= 6 && hour < 12) {
    text = 'Good Morning!';
    img = day;
  } else if (hour >= 12 && hour < 18) {
    text = 'Good Afternoon!';
    img = day;
  } else if (hour >= 18 && hour < 22) {
    text = 'Good Evening!';
    img = evening;
  }

  return (
    <div className="greeting">
      <h1>{text}</h1>
      <img src={img} alt={text} />
    </div>
  );
};

export default Greeting;
