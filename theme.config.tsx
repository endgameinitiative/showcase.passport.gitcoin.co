import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ecosystem</span>,
  project: {
    link: 'https://github.com/endgameinitiative/showcase.passport.gitcoin.co/',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/showcase.passport.gitcoin.co/',
  footer: {
    text: 'Ecosystem',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Ecosystem'
    }
  }
}

export default config
