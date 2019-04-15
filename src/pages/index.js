import React from 'react'
import Layout from '../components/layout'
import CaseStudy from '../components/caseStudy'
import ProblemSolution from '../components/problemSolution'
import Process from '../components/process'
import Buy from '../components/buy'
import BlogSection from '../components/blogSection'
import TestimonialSection from '../components/testimonials'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Content Marketing for Entrepreneurs and Small Businesses"
      description="Affordable and conversion centered content articles, social media posts, and websites for entrepreneurs and small businesses."
    />
    <CaseStudy />
    <ProblemSolution />
    <Process />
    <TestimonialSection />
    <Buy
      buyText="We offer two packages: one for those who want control over their blog and social media and one for those that are tight on time and would like them managed."
      home
    />
    <BlogSection />
  </Layout>
)

export default IndexPage
