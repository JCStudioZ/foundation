import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navigation from '@/common/sections-gatsby/Navigation'
import Banner from '@/common/sections-gatsby/Banner-modern'
import About from '@/common/sections-gatsby/About'
import Features from '@/common/sections-gatsby/Features'
import Faq from '@/common/sections-gatsby/Faq'
import AppScreens from '@/common/sections-gatsby/AppScreens'
import Pricing from '@/common/sections-gatsby/Pricing'
import Getapp from '@/common/sections-gatsby/Getapp'
import Footer from '@/common/sections-gatsby/Footer'

import { GlobalStyle } from '@/common/sections-gatsby/app.style'
import theme from '@/common/theme/app/themeStyles'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <Banner />
      <About />
      <Features />
      <AppScreens />
      <Pricing />
      <Faq />
      <Getapp />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
