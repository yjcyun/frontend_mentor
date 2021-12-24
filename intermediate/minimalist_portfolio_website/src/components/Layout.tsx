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
    padding: 0 35px;
  }
`;

const ContentCont = styled.div`
  min-height: calc(100vh - 178px);
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container>
        <Header />
        <ContentCont>{children}</ContentCont>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
