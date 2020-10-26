export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f9700e69614994782c77014',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u6qmmsuk',
                  apiId: '87cfeb48-6d7f-480e-8164-cea3082bc160'
                },
                {
                  buildHookId: '5f9700e64f07ab4ca72142ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k4o7b1mk',
                  apiId: '4e773d7e-332e-4d65-b767-0b058a840a5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanmauricio/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k4o7b1mk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
