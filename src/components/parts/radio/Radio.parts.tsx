import React from 'react';

import RadioSrtyle from './Radio.parts.module.scss';
import type { RadioProps } from './tpes';

const RadioComponent: React.FC<RadioProps> = ({ label, isChecked, onChangeRadio }) => {
  return (
    <label className={RadioSrtyle['radio-wrapper']}>
      <input
        type="radio"
        name={label}
        value={label}
        checked={isChecked}
        onChange={(e) => {
          onChangeRadio(e);
        }}
      />
      <p>{label}</p>
    </label>
  );
};

RadioComponent.whyDidYouRender = true;
export default RadioComponent;
