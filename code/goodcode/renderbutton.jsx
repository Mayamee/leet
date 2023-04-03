
import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

// BEGIN
const renderButton = (index, count, activeIndex, handleClick) => {
  const className = cn('btn m-1', {
    'btn-primary': activeIndex !== index,
    'btn-success': activeIndex === index,
  });

  return (
    <button
      key={index}
      type="button"
      className={className}
      onClick={handleClick}
    >
      {count}
    </button>
  );
};

const Buttons = ({ count = 3 }) => {
  const initButtonsState = {
    active: null,
    counts: Array(count).fill(0),
  };
  const [buttonsState, updateButtonsState] = useImmer(initButtonsState);
  const generateHandler = (index) => () => {
    updateButtonsState((state) => {
      state.active = index;
      state.counts[index] += 1;
    });
  };

  const { active, counts } = buttonsState;
  return counts.map((buttonCount, index) => (
    renderButton(index, buttonCount, active, generateHandler(index))
  ));
};

export default Buttons;
// END