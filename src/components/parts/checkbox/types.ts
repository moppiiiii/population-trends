import type React from 'react';

export type CheckboxProps = {
  label: string;
  onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, label: string) => void;
};
