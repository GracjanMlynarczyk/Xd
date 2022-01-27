import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './no-data.styled';

const NoDataComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t('components.common.no-data.title')}</h2>
      <p>{t('components.common.no-data.description')}</p>
    </Container>
  );
};

export default NoDataComponent;
