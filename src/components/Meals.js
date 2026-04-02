import { useEffect, useState } from 'react';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/meals')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMeals(data);
      });
  }, []);

  return (
    <ul id="meals">
      {/* list of meals */}
    </ul>
  );
};

export default Meals;