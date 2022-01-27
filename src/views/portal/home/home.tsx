import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return <div>{t('views.portal.home.header')}</div>;
};

export default Home;
