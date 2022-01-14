import React from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  padding: 43.5px 80px 88px;

  @media (max-width: 1024px) {
    padding: 40.5px 40px 72px;
  }

  @media (max-width: 640px) {
    padding: 32px 24px 72px;
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};
