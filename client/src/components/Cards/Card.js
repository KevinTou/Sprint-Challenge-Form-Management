import React from 'react';

const Card = ({ food }) => {
  return (
    <div className='border-2 border-blue-500 hover:border-red-500 w-full md:w-2/5 p-4 mb-16'>
      <h2 className='text-center font-bold'>{food.name}</h2>
      <p>
        <strong>Course:</strong> {food.course}
      </p>
      <p>
        <strong>Technique:</strong> {food.technique}
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul className='list-inside list-disc'>
        {food.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
