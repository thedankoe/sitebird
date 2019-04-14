import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import CaseStudy from '../components/caseStudy'
import ProblemSolution from '../components/problemSolution'
import Process from '../components/process'
import Buy from '../components/buy'
import BlogSection from '../components/blogSection'
import TestimonialSection from '../components/testimonials'

const IndexPage = ({ location }) => (
  <>
    <Helmet
      title="Quality Lead Generation for Small Businesses | SiteBird"
      meta={[
        {
          name: 'description',
          content:
            'Affordable, tested websites for local and small businesses. Our websites come fully optimized, you will never need to hire anyone to work on your website again.',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
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
  </>
)

export default IndexPage
