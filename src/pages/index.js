import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentProjects from "../components/recent-projects"
import CurrentJob from "../components/current-job"
import Lede from "../components/lede"
import BandedSection from "../components/banded-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BandedSection>
      <PageTitle text="Hey, I'm Lauren."/>
      <Lede text={`I build websites. Some people call me Labby.`}/>
      <Lede text={`Fusing together a background in journalism and design with a vast knowledge of Drupal, accessibility and web development, I lead teams of engineers to build dynamic websites and create online relationships to help clients reach their users in new and impactful ways. `}/>
    </BandedSection>
    <BandedSection
      backgroundColor={`gray`}
      classes={`sm:py-20`}
    >
        <RecentProjects />
    </BandedSection>
    <BandedSection
      backgroundColor={`secondary`}
      textColor={`light`}
    >
        <CurrentJob />
    </BandedSection>
  </Layout>
)

export default IndexPage
