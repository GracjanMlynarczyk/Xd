import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { StyledTooltip, TooltipSpan, TooltipContainer } from './tooltip.styled';

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  indicator?: boolean;
  placement: string;
  width?: number;
  className?: string;
  isDisabled?: boolean;
};

const Tooltip: FC<TooltipProps> = ({ isDisabled, content, children, indicator = false, placement, className }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setIsIntersecting(entry.intersectionRatio < 1 && entry.intersectionRatio > 0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    if (ref?.current) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <StyledTooltip indicator={indicator} placement={placement} className={className}>
      {children}
      <TooltipContainer>
        <TooltipSpan
          ref={ref}
          isIntersecting={isIntersecting}
          indicator={indicator}
          placement={placement}
          isDisabled={isDisabled}
          width={ref.current?.clientWidth || 0}
        >
          {content}
        </TooltipSpan>
      </TooltipContainer>
    </StyledTooltip>
  );
};

export default Tooltip;
