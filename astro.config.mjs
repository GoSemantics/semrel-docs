import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://semrel.io',
  output: 'static',
  integrations: [
    starlight({
      title: 'semrel',
      description: 'Semantic Versioning for Go. Automated, monorepo-aware, plugin-based.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GoSemantics/semrel' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/gosemantics' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'User Guide',
          autogenerate: { directory: 'guide' },
        },
        {
          label: 'Plugin Development',
          autogenerate: { directory: 'plugins' },
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
      ],
    }),
  ],
});

