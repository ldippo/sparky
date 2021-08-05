import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
// markup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndexPage = (props) => {
    const query = props.data;
    const pageData = query.pageData.edges.map(({ node }) => node);
    const navData = pageData.map((node) => ({
        label: node.frontmatter?.navTitle || node.frontmatter?.title || '',
        path: node.frontmatter?.path || '#',
        templateKey: node.frontmatter?.templateKey || 'page',
    }));
    const sectionData = [];
    return (React.createElement(Layout, { navData: navData, sectionData: sectionData, templateKey: "home" }));
};
export const query = graphql `
  query IndexQuery {
    pageData: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            navTitle
            subtitle
            templateKey
            order
            sections {
              body
              title
              titleSuperText
              slideVideo
              slideMedia {
                absolutePath
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
