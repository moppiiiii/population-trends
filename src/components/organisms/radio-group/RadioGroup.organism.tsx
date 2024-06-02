import React from 'react';

import Radio from '@/components/parts/radio/Radio.parts';
import type { RadioProps } from '@/components/parts/radio/tpes';

import RadioGroupStyle from './RadioGroup.organism.module.scss';
import type { RadioGroupProps } from './types';

const RadioGroupComponent: React.FC<RadioGroupProps> = ({ labels, checkedLabel, onChangeRadio }) => {
  return (
    <fieldset className={RadioGroupStyle['radio-group-wrapper']}>
      {labels.map((label) => {
        const radioComponenProps: RadioProps = {
          label,
          isChecked: label === checkedLabel,
          onChangeRadio,
        };

        return (
          <div key={label} className="radio-item">
            <Radio {...radioComponenProps} />
          </div>
        );
      })}
    </fieldset>
  );
};

RadioGroupComponent.whyDidYouRender = true;
export default RadioGroupComponent;
