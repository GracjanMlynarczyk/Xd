import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as InfoIcon } from '@assets/icons/more-info.svg';
import { ReactComponent as RefreshIcon } from '@assets/icons/refresh.svg';
import { Tooltip } from '@components/common';
import {
  FlexContainer,
  Status,
  IconWrapper,
  BoldedText,
  StyledRefreshIcon,
  Container,
  Wrapper,
  Refresh,
  AutomaticRefreshInfo,
} from './error-overlay.styled';

type Props = {
  onClick: () => void;
  isSmallTile?: boolean;
};

const ErrorOverlay: FC<Props> = ({ onClick, isSmallTile }) => {
  const { t } = useTranslation();

  return !isSmallTile ? (
    <Wrapper>
      <p>
        <b>{t('components.common.error-overlay.cant-show-data')}</b>
      </p>
      <AutomaticRefreshInfo>{t('components.common.error-overlay.automatically-refresh-attempt')}</AutomaticRefreshInfo>
      <Refresh onClick={onClick}>
        <RefreshIcon /> {t('components.common.error-overlay.try-to-refresh')}
      </Refresh>
    </Wrapper>
  ) : (
    <FlexContainer>
      <Status>{t('components.common.error-overlay.unknown')}</Status>
      <Container>
        <IconWrapper>
          <Tooltip
            content={
              <>
                <BoldedText>{t('components.common.error-overlay.cant-show-data')}</BoldedText>
                <p>{t('components.common.error-overlay.automatically-refresh-attempt')}</p>
              </>
            }
            placement='bottom'
            indicator
          >
            <InfoIcon />
          </Tooltip>
        </IconWrapper>
        <IconWrapper onClick={onClick}>
          <StyledRefreshIcon />
        </IconWrapper>
      </Container>
    </FlexContainer>
  );
};

export default ErrorOverlay;
