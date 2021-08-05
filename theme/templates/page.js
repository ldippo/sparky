import React from 'react';
import Layout from '../components/Layout';
const Page = function Page(props) {
    const pageData = (props.pageContext.data?.pageData.edges
        .map(({ node }) => node.frontmatter)
        .filter(Boolean) || []);
    const navData = pageData
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .sort((a, b) => ((a.order || 0) < (b.order || 0) ? -1 : 1))
        .map(({ title, path, templateKey, navTitle }) => ({
            label: navTitle || title || '',
            path: path || '#',
            templateKey: templateKey || 'page',
        }));
    const selectedPage = pageData.find(({ path }) => path === props.path.substr(1));
    const sectionData = selectedPage
        ? selectedPage.sections
        : [];
    return (React.createElement(Layout, { navData: navData, sectionData: sectionData, templateKey: selectedPage?.templateKey || 'page' }));
};
export default Page;
