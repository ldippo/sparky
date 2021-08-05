/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Layout from '../components/Layout';
import { MarkdownRemarkFrontmatter } from '../generated/graphql';

import { PageQuery, SectionFragment } from './queryInfo.gql';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function CardPage(props: {
  pageContext: { data: PageQuery };
  path: string;
  templateKey: string;
}) {
  const pageData = (props.pageContext.data?.pageData.edges
    .map(({ node }) => node.frontmatter)
    .filter(Boolean) || []) as MarkdownRemarkFrontmatter[];

  const navData = pageData
    .sort((a, b) => ((a.order || 0) < (b.order || 0) ? -1 : 1))
    .map(({ title, path, templateKey, navTitle }) => ({
      label: navTitle || title || '',
      path: path || '#',
      templateKey: templateKey || 'page',
    }));

  const selectedPage = pageData.find(({ path }) => `/${path}` === props.path);

  const sectionData: SectionFragment[] = selectedPage
    ? (selectedPage.sections as SectionFragment[]) || ([] as SectionFragment[])
    : ([] as SectionFragment[]);

  return (
    <Layout
      navData={navData}
      sectionData={sectionData}
      templateKey={selectedPage?.templateKey || 'page'}
    />
  );
}
