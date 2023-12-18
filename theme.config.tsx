import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Passport Showcase</span>,
  project: {
    link: 'https://github.com/endgameinitiative/showcase.passport.gitcoin.co/',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/showcase.passport.gitcoin.co/',
  footer: {
    text: 'Passport Showcase',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Passport Showcase'
    }
  }
}

export default config
