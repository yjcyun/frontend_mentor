import styled, { css } from 'styled-components';

interface InputProps<T> {
  error: string;
  label: string;
  multiline?: boolean;
  onChange: (e: React.ChangeEvent<{ value: T }>) => void;
  placeholder: string;
  value: string;
}

const textStyles = css`
  background: rgba(51, 50, 61, 0.1);
  border: 1px solid transparent;
  font-size: 1.3rem;
  line-height: 3rem;
  padding: 9px 16px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(51, 50, 61, 0.4);
  }

  :-ms-input-placeholder {
    color: rgba(51, 50, 61, 0.4);
  }

  :focus {
    outline: none;
    border: 1px solid var(--cyan) !important;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 8px;
  }

  span {
    color: var(--red);
    font-weight: 700;
    font-size: 1rem;
    font-style: italic;
    margin-top: 4px;
  }
`;

const StyledInput = styled.input`
  ${textStyles}
`;

const StyledTextarea = styled.textarea`
  ${textStyles}
`;

export const Input: React.FC<InputProps<string>> = ({
  error,
  label,
  multiline = false,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <FormControl>
      <label>{label}</label>
      {multiline ? (
        <StyledTextarea
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
        />
      ) : (
        <StyledInput
          onChange={onChange}
          placeholder={placeholder}
          type='text'
          value={value}
        />
      )}
      {error && <span>{error}</span>}
    </FormControl>
  );
};
