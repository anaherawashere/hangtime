import styled, { css } from 'styled-components'
import { ButtonVariants } from './Button'

const variantStyles = {
  primary: css`
    background-color: #6c5ce7;
    box-shadow: 0px 5px 0px 0px #a29bfe;

    &:active {
      transform: translateY(5px);
      box-shadow: 0px 0px 0px 0px #a29bfe;
    }
  `,
  secondary: css`
    background-color: #00b894;
    box-shadow: 0px 5px 0px 0px #019875;

    &:active {
      transform: scale(0.98);
      box-shadow: 0px 0px 0px 0px #019875;
    }
  `,
  tertiary: css`
    background-color: transparent;
    box-shadow: none;

    &:active {
      opacity: 0.8;
    }
  `,
}

export const StyledButton = styled.button<{ variant?: ButtonVariants }>`
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;

  ${({ variant = 'primary' }) => variantStyles[variant]}
`
