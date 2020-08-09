import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Navigation from '@/common/sections-gatsby/Navigation'
import BannerClassic from '@/common/sections-gatsby/Banner-classic'
import AboutClassic from '@/common/sections-gatsby/About-classic'
import FeaturesClassic from '@/common/sections-gatsby/Features-classic'
import FaqClassic from '@/common/sections-gatsby/Faq-Classic'
import Integrations from '@/common/sections-gatsby/Integrations'
import AppScreens from '@/common/sections-gatsby/AppScreens-classic'
import Counter from '@/common/sections-gatsby/Counters'
import Pricing from '@/common/sections-gatsby/Pricing'
import Testimonial from '@/common/sections-gatsby/Testimonial'
import News from '@/common/sections-gatsby/News'
import Getapp from '@/common/sections-gatsby/Getapp'
import Client from '@/common/sections-gatsby/Client'
import Footer from '@/common/sections-gatsby/Footer-classic'

import { GlobalStyle } from '@/common/sections-gatsby/app.style'
import theme from '@/common/theme/classic/themeStyles'

const ClassicPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Appion Gatsby Home" />
      <Navigation />
      <BannerClassic />
      <AboutClassic />
      <Integrations />
      <FeaturesClassic />
      <AppScreens />
      <Counter />
      <Pricing />
      <Testimonial />
      <FaqClassic />
      <Getapp />
      <News />
      <Client />
      <Footer />
    </Layout>
  </ThemeProvider>
)
export default ClassicPage
