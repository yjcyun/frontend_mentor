import styled from 'styled-components';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  max-width: 1190px;
  padding: 0 40px;
  margin: 64px auto 0;
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
