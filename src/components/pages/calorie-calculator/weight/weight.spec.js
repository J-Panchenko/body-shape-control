import { render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import React from 'react';
import Weight from './weight';

const setup = () => {
  const utils = render(<Weight />);
  const input = utils.getByLabelText('weight-input');
  return {
    input,
    ...utils,
  };
};

describe('Weight component: positive cases', () => {
  const { input } = setup();

  it('It should allow numbers to be inputted', () => {
    fireEvent.change(input, { target: { value: '70' } });
    expect(input.value).toBe('70');
  });

  it('It should not allow letters to be inputted', () => {
    fireEvent.change(input, { target: { value: 'My weight' } });
    expect(input.value).toBe('');
  });

  it('It should allow numbers from 20 to 500 to be inputted', () => {
    fireEvent.change(input, { target: { value: '19' } });
    expect(input.value).toBe('19');
    expect(input.validity.stepMismatch).toBe(false);

    fireEvent.change(input, { target: { value: '501' } });
    expect(input.value).toBe('501');
    expect(input.validity.stepMismatch).toBe(false);
  });

  it('It should be renders correctly', () => {
    const renderer = create(<Weight />);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
