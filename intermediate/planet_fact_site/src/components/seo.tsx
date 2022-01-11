import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
}

export const SEO: React.FC<SEOProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{`The Planets | ${title}`}</title>
    </Helmet>
  );
};
