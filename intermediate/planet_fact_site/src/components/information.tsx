import styled from "styled-components";
import { ReactComponent as Source } from "../assets/icon-source.svg";

interface InformationProps {
  name: string;
  content: string;
  source: string;
}

const StyledInformation = styled.div`
  .content {
    padding: 24px 0;
  }

  .link,
  a {
    color: var(--white-50);
  }

  a {
    font-weight: 700;
    text-decoration: underline;
  }

  .source-icon {
    margin-left: 8px;
  }

  @media (max-width: 996px) {
    width: 339px;
  }

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const Information: React.FC<InformationProps> = ({
  name,
  content,
  source,
}) => {
  return (
    <StyledInformation>
      <h1>{name}</h1>
      <p className="content">{content}</p>
      <p className="link">
        <span>Source : </span>
        <a href={source}>
          Wikipedia
          <span className="source-icon">
            <Source />
          </span>
        </a>
      </p>
    </StyledInformation>
  );
};
