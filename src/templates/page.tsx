import React from 'react';
import Layout from '../components/Layout';

import { PageQuery, SectionFragment } from './queryInfo.gql';
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
