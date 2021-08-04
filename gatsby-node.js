// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  templateKey
                  path
                  title
                  subtitle
                  order
                  navTitle
                  sections {
                    body
                    title
                    titleSuperText
                    slideVideo
                    slideMedia {
                      absolutePath
                      publicURL
                    }
                    actionButton {
                      url
                      text
                    }
                  }
                }
              }
            }
          }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postOrPage = result.data.allMarkdownRemark.edges
    postOrPage.forEach(edge => {
      let component, pathName;
      const frontMatter = edge.node.frontmatter
      pathName = frontMatter && frontMatter.path || 'about'

      component = require.resolve(`./src/templates/${String(frontMatter && frontMatter.templateKey || 'page')}.tsx`);
      const id = pathName
      createPage({
        path: pathName,
        component,
        context: {
          id
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
