import * as Types from '../generated/graphql';

export type IndexQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type IndexQueryQuery = (
  { __typename?: 'Query' }
  & { pageData: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { frontmatter?: Types.Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<Types.MarkdownRemarkFrontmatter, 'path' | 'title' | 'subtitle' | 'templateKey'>
          & { sections?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'MarkdownRemarkFrontmatterSections' }
            & Pick<Types.MarkdownRemarkFrontmatterSections, 'body' | 'title' | 'titleSuperText' | 'slideVideo'>
            & { slideMedia?: Types.Maybe<(
              { __typename?: 'File' }
              & Pick<Types.File, 'absolutePath' | 'publicURL'>
            )> }
          )>>> }
        )> }
      ) }
    )> }
  ) }
);
