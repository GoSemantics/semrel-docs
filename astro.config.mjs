import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://semrel.io',
  integrations: [
    starlight({
      title: 'semrel',
      description: 'Semantic Versioning for Go',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GoSemantics/semrel' },
      ],
      sidebar: [
        {
          label: 'Docs',
          items: [{ autogenerate: { directory: 'docs' } }],
        },
      ],
    }),
  ],
});
