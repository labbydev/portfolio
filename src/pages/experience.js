import React from "react"
import Jobs from "../components/jobs"
import Degrees from "../components/degrees"
import Conferences from "../components/conferences"
import LayoutSidebar from "../components/layout--sidebar"
import BandedSection from "../components/banded-section"
import PageTitle from "../components/page-title"
import Lede from "../components/lede"

export default function Experience() {
  return (
    <LayoutSidebar
      pageTitle={`Experience`}
      header={
        <BandedSection>
          <PageTitle text={`Experience`}/>
          <Lede text={`Lauren has been designing and building websites since 2010, using technologies ranging from React, VueJS, Drupal, WordPress and flat HTML. As a Senior Developer in the Front End Practice she architects accessible SCSS, implements themes and designs JavaScript interactions. She uses her strong communication skills and unflappable nature to consult with clients and propose digital solutions to help them connect with their users in new and impactful ways.`}/>
        </BandedSection>
      }
      main={
        <Jobs/>
      }
      sidebar={
        <Degrees />
      }
      footer={
        <BandedSection
          backgroundColor={`gray`}
        >
          <Conferences />
        </BandedSection>
      }
    />
  )
}
