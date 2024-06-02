import React from 'react';

import NotFoundTemplate from '@/components/templates/not-found/NotFound.template';
import { useDocumentTitle } from '@/contexts/document-title/DocumentTitle.context';
import { useHtmlLang } from '@/contexts/html-lang/HTMLLang.context';

const NotFoundPage: React.FC = () => {
  useHtmlLang('ja');
  useDocumentTitle('PopulationTrend | 404');

  return <NotFoundTemplate />;
};

NotFoundPage.whyDidYouRender = true;
export default NotFoundPage;
