import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Card from './Card';

describe('<Card />', () => {
  it('renders the data', () => {
    const food = {
      name: 'Brisket',
      course: 'Main',
      technique: 'Sous-Vide',
      ingredients: [
        'Smoked Salt',
        'Prague Powder No. 1',
        'Liquid Aminos',
        'Chipotle Powder',
        'Molassas',
      ],
    };

    const card = render(<Card food={food} />);
    card.getByText(/Brisket/i);
    card.getByText(/Course: Main/i);
    card.getByText(/Technique: Sous-Vide/i);
    card.getByText(/Ingredients:/i);
    card.getByText(/Smoked Salt/i);
    card.getByText(/Prague Powder No. 1/i);
    card.getByText(/Liquid Aminos/i);
    card.getByText(/Chipotle Powder/i);
    card.getByText(/Molassas/i);
  });
});
