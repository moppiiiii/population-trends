import type React from 'react';

export type RadioGroupProps = {
  labels: string[];
  checkedLabel: string;
  onChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
