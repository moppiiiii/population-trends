import React from 'react';

import Header from '@/components/organisms/header/Header.organism';
import LinkButton from '@/components/parts/button/link-button/LinkButton.parts';
import HeadingSecondary from '@/components/parts/heading/heading-secondary/HeadingSecondary.parts';

import NotFoundStyle from './NotFound.template.module.scss';

const NotFoundTemplate: React.FC = () => {
  return (
    <div className={NotFoundStyle['not-found-container']}>
      <Header title="Not Found" />

      <div className={NotFoundStyle['content-wrapper']}>
        <div className={NotFoundStyle['not-found-title']}>
          <HeadingSecondary>404</HeadingSecondary>
          <p className={NotFoundStyle['not-found-sigh']}>😮‍💨</p>
        </div>
        <p className={NotFoundStyle['not-found-description']}>お探しのページは見つかりませんでした</p>

        <div>
          <LinkButton href="/population-trend">人口推移に戻る</LinkButton>
        </div>
      </div>
    </div>
  );
};

NotFoundTemplate.whyDidYouRender = true;
export default NotFoundTemplate;
