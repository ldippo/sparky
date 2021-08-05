import CMS from 'netlify-cms-app';
import withEmotion from './with-emotion';
import PagePreview from './preview-templates/PagePreview/PagePreview';
CMS.init({
    config: {
        backend: {
            name: 'git-gateway',
            branch: 'master',
        },
        media_folder: process.env.GATSBY_FOLDER_MEDIA || 'static/img',
        public_folder: process.env.GATSBY_FOLDER_PUBLIC || '/img',
        collections: [
            {
                name: 'homePage',
                label: 'Home Page',
                folder: process.env.GATSBY_FOLDER_HOMEPAGE || 'src/content/homepage',
                create: true,
                slug: 'index',
                media_folder: '',
                public_folder: '',
                path: process.env.GATSBY_PATH_HOMEPAGE || '{{title}}/index',
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        widget: 'string',
                    },
                    {
                        label: 'Subtitle',
                        name: 'subtitle',
                        widget: 'hidden',
                        required: false,
                    },
                    {
                        label: 'Slide Background Image',
                        name: 'slideMedia',
                        widget: 'image',
                        required: false,
                        hint: 'This image will be used as a background for the slide',
                    },
                    {
                        label: 'Slide Background Video',
                        name: 'slideVideo',
                        widget: 'string',
                        required: false,
                        hint: 'This video will be used as a background for the slide (takes priority over image)',
                    },
                    {
                        label: 'Action Button',
                        name: 'actionButton',
                        widget: 'object',
                        required: false,
                        fields: [
                            {
                                label: 'URL',
                                name: 'url',
                                widget: 'string',
                                default: '#',
                                required: false,
                            },
                            {
                                label: 'Button Text',
                                name: 'text',
                                widget: 'string',
                                default: 'Click Me!',
                                required: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'primaryPage',
                label: 'Primary Page',
                folder: process.env.GATSBY_FOLDER_CONTENT || 'src/content/pages',
                create: true,
                slug: 'index',
                media_folder: '',
                public_folder: '',
                path: process.env.GATSBY_PATH_PAGE || '{{title}}/index',
                fields: [
                    {
                        label: 'Page Template',
                        name: 'templateKey',
                        widget: 'select',
                        default: 'page',
                        hint: 'The chosen layout for this page',
                        options: [
                            {
                                label: 'Media & Text slide',
                                value: 'page',
                            },
                            {
                                label: 'Text-only slide',
                                value: 'pageText',
                            },
                        ],
                        multiple: false,
                    },
                    {
                        label: 'Title',
                        name: 'title',
                        widget: 'string',
                    },
                    {
                        label: 'Navigation Title',
                        name: 'navTitle',
                        widget: 'string',
                        hint: 'Text to display in the navigation',
                        required: false,
                    },
                    {
                        label: 'Page Order',
                        name: 'order',
                        widget: 'number',
                        hint: 'This will determine the order the pages are represented in the navigation',
                    },
                    {
                        label: 'Path',
                        name: 'path',
                        widget: 'string',
                        default: '/',
                        hint: 'The url where this page is found. For example "about" would be accessible by going to examplewebsite.com/about',
                        pattern: [
                            '^[a-z0-9A-Z-]+$',
                            'path must contain only letters, numbers and dashes - no spaces or other special characters allowed',
                        ],
                    },
                    {
                        label: 'Subtitle',
                        name: 'subtitle',
                        widget: 'hidden',
                        required: false,
                    },
                    {
                        label: 'Page Slides',
                        name: 'sections',
                        widget: 'list',
                        hint: 'These slides comprise the content found on each page',
                        fields: [
                            {
                                label: 'Title',
                                name: 'title',
                                widget: 'string',
                            },
                            {
                                label: 'Title Super Text',
                                name: 'titleSuperText',
                                widget: 'string',
                                hint: 'Smaller text above the main title',
                                required: false,
                            },
                            {
                                label: 'Slide Background Image',
                                name: 'slideMedia',
                                widget: 'image',
                                required: false,
                                hint: 'This image will be used as a background for the slide',
                            },
                            {
                                label: 'Slide Background Video',
                                name: 'slideVideo',
                                widget: 'string',
                                required: false,
                                hint: 'This video will be used as a background for the slide (takes priority over image)',
                            },
                            {
                                label: 'Body',
                                name: 'body',
                                widget: 'markdown',
                                required: false,
                            },
                            {
                                label: 'Media',
                                name: 'media',
                                widget: 'hidden',
                            },
                            {
                                label: 'Action Button',
                                name: 'actionButton',
                                widget: 'object',
                                required: false,
                                fields: [
                                    {
                                        label: 'URL',
                                        name: 'url',
                                        widget: 'string',
                                        required: false,
                                    },
                                    {
                                        label: 'Button Text',
                                        name: 'text',
                                        widget: 'string',
                                        required: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
});
CMS.registerPreviewTemplate('primaryPage', withEmotion(PagePreview));
