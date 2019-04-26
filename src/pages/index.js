import React from 'react'
import Layout from '../components/layout'
import CaseStudy from '../components/caseStudy'
import ProblemSolution from '../components/problemSolution'
import Process from '../components/process'
import Buy from '../components/buy'
import BlogSection from '../components/blogSection'
import TestimonialSection from '../components/testimonials'
import SEO from '../components/seo'
import MoneyBack from '../components/moneyBack'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Blog Writing and Social Media Post Creation"
      description="Optimized SEO blog writing with the perfect word count. Social media posts that engage and convert."
    />
    <CaseStudy />
    <ProblemSolution />
    <Process />
    <TestimonialSection />
    <MoneyBack />
    <Buy />
    <BlogSection />
  </Layout>
)

export default IndexPage
