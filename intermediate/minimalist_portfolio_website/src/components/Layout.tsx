import styled from 'styled-components';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  max-width: 1190px;
  padding: 0 40px;
  margin: 64px auto 0;

  @media (max-width: 568px) {
    margin-top: 32px;
    padding: 0 35px;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
