import { render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import React from 'react';
import Height from './height';

const setup = () => {
  const utils = render(<Height />);
  const input = utils.getByLabelText('height-input');
  return {
    input,
    ...utils,
  };
};

describe('Height component: positive cases', () => {
  const { input } = setup();

  it('It should allow numbers to be inputted', () => {
    fireEvent.change(input, { target: { value: '190' } });
    expect(input.value).toBe('190');
  });

  it('It should not allow letters to be inputted', () => {
    fireEvent.change(input, { target: { value: 'My height' } });
    expect(input.value).toBe('');
  });

  it('It should allow numbers from 60 to 260 to be inputted', () => {
    fireEvent.change(input, { target: { value: '12' } });
    expect(input.value).toBe('12');
    expect(input.validity.stepMismatch).toBe(false);

    fireEvent.change(input, { target: { value: '380' } });
    expect(input.value).toBe('380');
    expect(input.validity.stepMismatch).toBe(false);
  });

  it('matches snapshot', () => {
    const renderer = create(<Height />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
