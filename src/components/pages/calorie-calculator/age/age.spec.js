import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Age from './age';

const setup = () => {
  const utils = render(<Age />);
  const input = utils.getByLabelText('age-input');
  return {
    input,
    ...utils,
  };
};

describe('Age component: positive cases', () => {
  const { input } = setup();

  it('It should allow numbers to be inputted', () => {
    fireEvent.change(input, { target: { value: '87' } });
    expect(input.value).toBe('87');
  });

  it('It should not allow letters to be inputted', () => {
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(input.value).toBe('');
  });

  it('It should allow numbers from 15 to 100 to be inputted', () => {
    fireEvent.change(input, { target: { value: '102' } });
    expect(input.value).toBe('102');
    expect(input.validity.stepMismatch).toBe(false);

    fireEvent.change(input, { target: { value: '12' } });
    expect(input.value).toBe('12');
    expect(input.validity.stepMismatch).toBe(false);
  });
});
