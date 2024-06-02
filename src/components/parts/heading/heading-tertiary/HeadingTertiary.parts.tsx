import React from 'react';

import type { HeadingTertiaryProps } from '../types';

const HeadingTertiary: React.FC<HeadingTertiaryProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

HeadingTertiary.whyDidYouRender = true;
export default HeadingTertiary;
