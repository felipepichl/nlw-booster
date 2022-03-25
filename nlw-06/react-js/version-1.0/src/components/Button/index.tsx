import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <Container>{title}</Container>;
};

export { Button };
