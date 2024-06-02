import React from 'react';

import NotFoundTemplate from '@/components/templates/not-found/NotFound.template';
import { useDocumentTitle } from '@/contexts/document-title/document-title.context';

const NotFoundPage: React.FC = () => {
  useDocumentTitle('PopulationTrend | 404');

  return <NotFoundTemplate />;
};

NotFoundPage.whyDidYouRender = true;
export default NotFoundPage;
