import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://semrel.io',
  integrations: [
    starlight({
      title: 'go-semrel',
      description: 'Semantic Versioning for Go. Automated, monorepo-aware, plugin-based.',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/GoSemantics/go-semrel',
        linkedin: 'https://linkedin.com/in/go-semrel',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'User Guide',
          items: [
            { label: 'CLI Reference', slug: 'guide/cli' },
            { label: 'Configuration', slug: 'guide/configuration' },
            { label: 'Monorepo Support', slug: 'guide/monorepo' },
          ],
        },
        {
          label: 'Plugin Development',
          items: [
            { label: 'Overview', slug: 'plugins/overview' },
            { label: 'SDK Guide', slug: 'plugins/sdk' },
            { label: 'Examples', slug: 'plugins/examples' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'gRPC API', slug: 'api/grpc' },
          ],
        },
      ],
    }),
  ],
});
