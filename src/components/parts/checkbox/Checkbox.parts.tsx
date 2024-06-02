import React from 'react';

import CheckboxStyle from './Checkbox.parts.module.scss';
import type { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({ label, onChangeCheckbox }) => {
  return (
    <label className={CheckboxStyle['checkbox-wrapper']}>
      <input
        className={CheckboxStyle['checkbox-input']}
        type="checkBox"
        name={label}
        onChange={(e) => {
          onChangeCheckbox(e, label);
        }}
      />
      <p className={CheckboxStyle['checkbox-label']}>{label}</p>
    </label>
  );
};

Checkbox.whyDidYouRender = true;
export default Checkbox;
