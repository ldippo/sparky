import * as Types from '../generated/graphql';

export type SectionFragment = (
  { __typename?: 'MarkdownRemarkFrontmatterSections' }
  & Pick<Types.MarkdownRemarkFrontmatterSections, 'body' | 'title' | 'slideVideo' | 'titleSuperText'>
  & { slideMedia?: Types.Maybe<(
    { __typename?: 'File' }
    & Pick<Types.File, 'absolutePath' | 'publicURL'>
  )>, actionButton?: Types.Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatterSectionsActionButton' }
    & Pick<Types.MarkdownRemarkFrontmatterSectionsActionButton, 'url' | 'text'>
  )> }
);

export type CardPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CardPageQuery = (
  { __typename?: 'Query' }
  & { pageData: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { frontmatter?: Types.Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<Types.MarkdownRemarkFrontmatter, 'templateKey' | 'title' | 'path' | 'order' | 'navTitle'>
          & { sections?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'MarkdownRemarkFrontmatterSections' }
            & SectionFragment
          )>>> }
        )> }
      ) }
    )> }
  ) }
);

export type PageTextQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PageTextQuery = (
  { __typename?: 'Query' }
  & { pageData: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { frontmatter?: Types.Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<Types.MarkdownRemarkFrontmatter, 'templateKey' | 'title' | 'navTitle' | 'path' | 'order'>
          & { sections?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'MarkdownRemarkFrontmatterSections' }
            & SectionFragment
          )>>> }
        )> }
      ) }
    )> }
  ) }
);

export type PageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PageQuery = (
  { __typename?: 'Query' }
  & { pageData: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & { frontmatter?: Types.Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<Types.MarkdownRemarkFrontmatter, 'templateKey' | 'title' | 'path' | 'order' | 'navTitle'>
          & { sections?: Types.Maybe<Array<Types.Maybe<(
            { __typename?: 'MarkdownRemarkFrontmatterSections' }
            & SectionFragment
          )>>> }
        )> }
      ) }
    )> }
  ) }
);
