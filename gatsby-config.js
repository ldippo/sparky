// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (_options) => ({
	siteMetadata: {
		title: 'Sparky',
		siteUrl: 'https://compassionate-galileo-46fbff.netlify.app/',
	},
	plugins: [
		'gatsby-plugin-react-helmet',

		{
			resolve: 'gatsby-plugin-emotion',
			sourceMap: true,
			autoLabel: 'dev-only',
			labelFormat: `[local]`,
			cssPropOptimization: true,
		},
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'placeholder',
			},
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `src/content/pages/`,
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `src/images/`,
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/, // See below to configure properly
				},
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.ts`,
				manualInit: true
			},
		},
		'gatsby-plugin-netlify',
		'gatsby-plugin-extract-schema',
	],
});
