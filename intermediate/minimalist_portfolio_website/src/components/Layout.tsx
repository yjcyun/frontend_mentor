import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

interface ContentContProps {
  isHome: boolean;
}

const Container = styled.div`
  margin: 64px auto 0;

  @media (max-width: 680px) {
    margin-top: 32px;
  }
`;

const ContentCont = styled.main<ContentContProps>`
  min-height: calc(100vh - 178px);
  margin: ${(props) => (props.isHome ? '54px 0 150px' : '94px 0 150px')};

  @media (max-width: 996px) {
    margin: ${(props) => (props.isHome ? '47px 0 96px' : '94px 0 96px')};
  }

  @media (max-width: 680px) {
    margin: 40px 0 80px;
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      <Container className='gutter'>
        <Header />
        <ContentCont isHome={isHome}>{children}</ContentCont>
      </Container>
      <Footer />
    </>
  );
};
