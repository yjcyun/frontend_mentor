import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
  variant?: 'light' | 'dark';
}

interface StyledButtonProps {
  disabled: ButtonProps['disabled'];
  variant: ButtonProps['variant'];
}

const StyledButton = styled.button<StyledButtonProps>`
  transition: var(--transition);
  opacity: ${(props) => (props.disabled ? '0.25' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  padding: 23px 53px;
  background: transparent;
  width: fit-content;

  h3.small {
    line-height: 1.6rem;
    white-space: nowrap;
  }

  ${(props) =>
    props.variant === 'light'
      ? css`
          border: 1px solid var(--cod-gray);
          background: var(--cod-gray);
          color: var(--white);

          &:hover {
            border: 1px solid var(--cod-gray);
            background: var(--white);

            h3.small {
              color: var(--cod-gray);
            }
          }
        `
      : css`
          border: 1px solid var(--white);
          color: var(--white);

          &:hover {
            background: var(--white);

            h3.small {
              color: var(--mirage);
            }
          }
        `}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  to,
  variant = 'dark',
}) => {
  const navigate = useNavigate();

  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (to) navigate(to);
      }}
    >
      <h3 className='small'>{children}</h3>
    </StyledButton>
  );
};
