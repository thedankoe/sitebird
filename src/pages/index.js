import React from 'react'
import Layout from '../components/layout'
import CaseStudy from '../components/caseStudy'
import ProblemSolution from '../components/problemSolution'
import Process from '../components/process'
import Buy from '../components/buy'
import TestimonialSection from '../components/testimonials'
import SEO from '../components/seo'
import MoneyBack from '../components/moneyBack'
import FAQ from '../components/faq'
import CustomVideo from '../components/customVideo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Professional Animated Explainer Videos from $497"
      description="Videos convert more and increase engagement. Our animated explainer videos are professional and high quality including script writing, voiceover, background music, and animation."
    />
    <CaseStudy />
    <ProblemSolution />
    <Process />
    <MoneyBack />
    <Buy />
    <CustomVideo />
    <TestimonialSection />
    <FAQ />
  </Layout>
)

export default IndexPage
