import React from 'react';

import type { HeadingPrimaryProps } from '../type';
import HeadingPrimaryStyle from './HeadingPrimary.parts.module.scss';

const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({ children }) => {
  return <h1 className={HeadingPrimaryStyle['heading-primary']}>{children}</h1>;
};

HeadingPrimary.whyDidYouRender = true;
export default HeadingPrimary;
