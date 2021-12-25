import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  padding: 0 40px;
  max-width: 1190px;
  margin: 64px auto 0;

  @media (max-width: 680px) {
    margin-top: 32px;
    padding: 0 32px;
  }
`;

const ContentCont = styled.div<{ isHome: boolean }>`
  min-height: calc(100vh - 178px);
  margin: ${(props) => (props.isHome ? '54px 0 150px' : '94px 0 150px')};

  @media (max-width: 996px) {
    margin: ${(props) => (props.isHome ? '47px 0 96px' : '94px 0 96px')};
  }
`;

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      <Container>
        <Header />
        <ContentCont isHome={isHome}>{children}</ContentCont>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
