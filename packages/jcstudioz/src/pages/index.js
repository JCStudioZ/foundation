import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navigation from '@/common/sections-gatsby/Navigation'
import Banner from '@/common/sections-gatsby/Banner-default'
import About from '@/common/sections-gatsby/About'
import Features from '@/common/sections-gatsby/Features'
import Faq from '@/common/sections-gatsby/Faq'
import Integrations from '@/common/sections-gatsby/Integrations'
import AppScreens from '@/common/sections-gatsby/AppScreens'
import Counters from '@/common/sections-gatsby/Counters'
import Pricing from '@/common/sections-gatsby/Pricing'
import Testimonial from '@/common/sections-gatsby/Testimonial'
import News from '@/common/sections-gatsby/News'
import Getapp from '@/common/sections-gatsby/Getapp'
import Contact from '@/common/sections-gatsby/Contact'
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
      <Integrations />
      <Features />
      <AppScreens />
      <Counters />
      <Pricing />
      <Testimonial />
      <Faq />
      <Getapp />
      <News />
      <Contact />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
