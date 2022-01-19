import React from "react";
import styled from "styled-components";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const StyledValueCard = styled.div`
  background: var(--dark-cyan);
  border-radius: 8px;
  padding: 72px 48px 48px;
  max-width: 350px;
  width: 100%;

  .icon-wrapper {
    margin-bottom: 56px;
    height: 72px;
  }

  p {
    padding-top: 24px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 41px 48px 41px 70px;
    flex-direction: row;
    display: flex;
    align-items: center;

    .icon-wrapper {
      margin-bottom: 0;
    }

    .text-content {
      margin-left: 55px;
      text-align: left;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 72px 12px 51px;

    .text-content {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const ValueCard: React.FC<ValueCardProps> = ({ icon, title, desc }) => {
  return (
    <StyledValueCard>
      <div className="icon-wrapper">{icon}</div>
      <div className="text-content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </StyledValueCard>
  );
};
