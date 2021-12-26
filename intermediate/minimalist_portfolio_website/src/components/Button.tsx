import styled, { css } from 'styled-components';

import { ReactComponent as DownArrow } from '../assets/icons/down-arrows.svg';
import { ReactComponent as Loading } from '../assets/icons/loading.svg';

interface ButtonProps {
  adornment?: boolean;
  children: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

interface StyledButtonProps {
  disabled: ButtonProps['disabled'];
  variant: ButtonProps['variant'];
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  transition: var(--transition);
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  .icon-wrapper {
    padding: 15.5px 16px;
    background: rgba(0, 0, 0, 0.1);
  }

  .text {
    width: 100%;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 12px;
    white-space: nowrap;
    line-height: 4rem;
  }

  ${(props) =>
    props.variant === 'secondary'
      ? css`
          border: 1px solid var(--light-black);
          background: var(--white);
          color: var(--light-black);
          min-width: 162px;

          .text {
            padding: 4px 35px 4px 31px;
          }

          &:hover {
            background: var(--light-black);

            .text {
              color: var(--very-light-grey);
            }
          }
        `
      : css`
          background: var(--dark-blue);
          color: var(--white);
          min-width: 200px;

          .text {
            padding: 4px 16px;
          }

          &:hover {
            background: var(--cyan);

            svg g {
              stroke: var(--white);
            }
          }
        `}
`;

export const Button: React.FC<ButtonProps> = ({
  adornment = false,
  children,
  disabled = false,
  loading = false,
  variant = 'primary',
}) => {
  return (
    <StyledButton disabled={disabled} variant={variant}>
      {adornment && (
        <div className='icon-wrapper'>
          <DownArrow />
        </div>
      )}
      <span className='text'>{loading ? <Loading /> : children}</span>
    </StyledButton>
  );
};
