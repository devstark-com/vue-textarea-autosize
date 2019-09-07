module.exports = {
  base: '/vue-textarea-autosize/dist/',
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TextareaAutosize',
      description: 'TextareaAutosize for Vue.js'
    }
  },
  themeConfig: {
    repo: 'https://github.com/devstark-com/vue-textarea-autosize/',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/devstark-com/vue-textarea-autosize/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
