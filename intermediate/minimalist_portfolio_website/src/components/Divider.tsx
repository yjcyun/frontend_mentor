import styled from 'styled-components';

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--light-black);
  opacity: 0.15;
`;

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
