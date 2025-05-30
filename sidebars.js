// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Guide-OpenMower-Mowgli',
      link: {
        type: 'generated-index',
        title: 'Guide OpenMower Mowgli',
        slug: '/docs/Guide-OpenMower-Mowgli/',
      },
      items: [
        'Guide-OpenMower-Mowgli/Avertissements/index',
        'Guide-OpenMower-Mowgli/materiel-requis',
        'Guide-OpenMower-Mowgli/installation-preparation-pi',
        'Guide-OpenMower-Mowgli/injection-firmware',
        'Guide-OpenMower-Mowgli/mise-a-jour-guide',
        'Guide-OpenMower-Mowgli/serigraphie-Mowgli',
        'Guide-OpenMower-Mowgli/a-propos',
        'Guide-OpenMower-Mowgli/aide-contribution',
      ],
    },
  ],
};

export default sidebars;
