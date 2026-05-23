import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  site: 'https://semrel.io',
  markdown: {
    rehypePlugins: [[rehypeMermaid, {
      strategy: 'img-svg',
      mermaidConfig: { theme: 'default' },
      dark: { theme: 'dark' },
    }]],
  },
  integrations: [
    starlight({
      title: 'semrel',
      description: 'Semantic Versioning for Go',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GoSemantics/semrel' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Guide',
          items: [{ autogenerate: { directory: 'guide' } }],
        },
        {
          label: 'Plugins',
          items: [{ autogenerate: { directory: 'plugins' } }],
        },
        {
          label: 'API',
          items: [{ autogenerate: { directory: 'api' } }],
        },
      ],
    }),
    mdx(),
  ],
});
