import React from 'react'
import { StyledButton } from './Button.styled'

export type ButtonClick = React.MouseEventHandler<HTMLButtonElement>

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  variant?: ButtonVariants
  onClick?: ButtonClick
}

const Button: React.FC<ButtonProps> = ({ title, onClick, variant }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {title}
  </StyledButton>
)

export default Button
