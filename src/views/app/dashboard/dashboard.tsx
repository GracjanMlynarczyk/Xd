import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: FC = () => {
  const { t } = useTranslation();

  return <div>{t('views.app.dashboard.header')}</div>;
};

export default Dashboard;
