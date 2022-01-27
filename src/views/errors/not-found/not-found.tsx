import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: FC = () => {
  const { t } = useTranslation();

  return <div>{t('views.errors.not-found.header')}</div>;
};

export default NotFound;
