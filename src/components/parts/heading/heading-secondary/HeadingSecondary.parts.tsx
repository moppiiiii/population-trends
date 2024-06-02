import React from 'react';

import type { HeadingSecondaryProps } from '../types';
import HeadingSecondaryStyle from './HeadingSecondary.parts.module.scss';

const HeadingSecondary: React.FC<HeadingSecondaryProps> = ({ children }) => {
  return <h2 className={HeadingSecondaryStyle['heading-secondary']}>{children}</h2>;
};

HeadingSecondary.whyDidYouRender = true;
export default HeadingSecondary;
