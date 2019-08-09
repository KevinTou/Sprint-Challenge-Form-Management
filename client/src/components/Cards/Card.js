import React from 'react';

const Card = ({ food }) => {
  return (
    <div className='border-2 border-blue-500 hover:border-red-500 w-full md:w-1/4 p-4'>
      <h2>{food.name}</h2>
      <p>Course: {food.course}</p>
      <p>Technique: {food.technique}</p>
      <p>Ingredients:</p>{' '}
      <ul>
        {food.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
