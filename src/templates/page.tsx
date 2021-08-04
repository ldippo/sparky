import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { PageQuery, SectionFragment } from './page.gql.d';
const Page: React.FC<{
  data: PageQuery;
  path: string;
  templateKey: string;
}> = function Page(props) {
  const pageData = props.data.pageData.edges.map(
    ({ node }) => node.frontmatter
  );

  const navData = pageData
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .sort((a, b) => ((a.order || 0) < (b.order || 0) ? 1 : -1))
    .map(({ title, path, templateKey }) => ({
      label: title,
      path,
      templateKey,
    }));

  const selectedPage = pageData.find(
    ({ path }) => path === props.path.substr(1)
  );

  const sectionData: SectionFragment[] = selectedPage
    ? selectedPage.sections
    : ([] as SectionFragment[]);

  return (
    <Layout
      navData={navData}
      sectionData={sectionData}
      templateKey={selectedPage?.templateKey}
    />
  );
};

export default Page;

export const query = graphql`
  fragment Section on MarkdownRemarkFrontmatterSections {
    body
    title
    slideMedia {
      absolutePath
      publicURL
    }
    slideVideo
    titleSuperText
    actionButton {
      url
      text
    }
  }
  query Page {
    pageData: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            templateKey
            title
            path
            order
            navTitle
            sections {
              ...Section
            }
          }
        }
      }
    }
  }
`;
