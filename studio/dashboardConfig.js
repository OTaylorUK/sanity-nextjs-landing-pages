export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621f4ef1cddf341a8403d924',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mqvz8ab2',
                  apiId: '81e71e64-84c1-45c0-a13f-44e52211d8ac'
                },
                {
                  buildHookId: '621f4ef193233f162626b543',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9hihu1bz',
                  apiId: '46341cb1-6416-42cf-a7c1-6c3f369f2a23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OTaylorUK/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9hihu1bz.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
