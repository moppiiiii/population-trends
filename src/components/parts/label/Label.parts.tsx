import React from 'react';

import type { LabelProps } from './types';

export const LabelComponent: React.FC<LabelProps> = ({ children }) => {
  return <label>{children}</label>;
};

LabelComponent.whyDidYouRender = true;
export default LabelComponent;
