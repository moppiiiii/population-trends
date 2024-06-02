import React from 'react';

import type { LinkButtonProps } from '../type';
import LinkButtonStyle from './LinkButton.parts.module.scss';

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <a href={href}>
      <button className={LinkButtonStyle['link-button']}>{children}</button>
    </a>
  );
};

LinkButton.whyDidYouRender = true;
export default LinkButton;
