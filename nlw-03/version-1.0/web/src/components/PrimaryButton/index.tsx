import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Container type="button" {...props}>
      {children}
    </Container>
  );
};

export default PrimaryButton;
