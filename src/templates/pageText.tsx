import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import { PageQuery, SectionFragment } from './page.gql';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function PageText(props: {
  data: PageQuery;
  path: string;
  templateKey: string;
}) {
  const pageData = props.data.pageData.edges.map(
    ({ node }) => node.frontmatter
  );

  const navData = pageData
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
}

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
  query PageText {
    pageData: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            templateKey
            title
            navTitle
            path
            order
            sections {
              ...Section
            }
          }
        }
      }
    }
  }
`;
