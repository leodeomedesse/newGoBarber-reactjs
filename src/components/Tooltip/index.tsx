import React from 'react';

import { Conteiner } from './style';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Conteiner className={className}>
      {children}
      <span>{title}</span>
    </Conteiner>
  );
};

export default Tooltip;
