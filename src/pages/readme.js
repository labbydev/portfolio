import React from "react"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lede from "../components/lede"
import { graphql, Link } from "gatsby"

export default function README({ data }) {
  return (
    <Layout>
      <SEO title="README" />
      <div>
        <PageTitle
          text="Working with Me"
        />
        <Lede 
          text="Hey there, nice to meet you."
        />
        <p>This is my (possibly self-absorbed) attempt to start us on the right foot. Much like myself, this document is always in beta. I proudly found this idea from a former <Link to="https://critter.blog/working-with-me/">co-worker</Link>, who adapted it from <Link to="https://hackernoon.com/12-manager-readmes-from-silicon-valleys-top-tech-companies-26588a660afe">elsewhere on the internet</Link>. If you have a document like this <em>please, please, please</em> share it with me. If not, you should <Link>consider writing one</Link>.</p>
        <h2>The Basics</h2>
        <p>I've worn a lot of hats throughout my web development career, but my current role is <strong>Senior Developer</strong> at <Link to={`https://www.phase2technology.com/`}>Phase2</Link>.</p>
        <p><strong>Pronouns:</strong> She/Her</p>
        <p><strong>Location:</strong> Chicago, IL</p>
        <p><strong>Find me on the internet:</strong></p>
        <h2>Communication</h2>
        <p>If you need to reach out to me, please ping me on chat. Please, use the most appropriate public channel based on the topic of discussion. I am not a fan of <a href="http://blog.flowdock.com/2014/04/30/beware-of-private-conversations/">private conversations</a> if it doesn't <em>need</em> to be private.</p>
        <p>If it's a longer discussion, let's jump on a video call. I'm happy to read through emails, however, I find that a synchronous discussion where we are both fully present leads to the best results in these matters.</p>
        <p>Please <strong>avoid</strong> booking meetings with me that <em>do not</em> include agendas. I'm always happy to share time on my calendar for any reason, I just ask that you include that reason within the meeting invite so that I can best prepare for the conversation.</p>
        <h2>Schedule</h2>
        <p>I relish being a remote employee, and the flexibility to create the best life for myself, and my family that a remote environment provides. Typically, speaking I work 9am - 5pm Central Time. It is not unusual that I will take calls outside of these hours <em>when necessary</em>; just as it is not unusual that I might need to schedule other activities during these hours and time shift as necessary. I do not answer emails or chat outside of my working hours.</p>
        <p>Please let me know your typical working hours. If I ever reach out to you outside of your working hours (sometimes I'm just too excited to contain myself), <em>do not</em> respond until you have returned to work.</p>
        <h2>Feedback</h2>
        <p>I am constantly looking for feedback, so please trust me when I say you won't offend me. Whatever your feedback may be please just keep it honest and timely. While I appreciate constructive criticism I also like to process my reaction, note my areas of improvement and catalog my progress, therefore I prefer to receive feedback in a written manner.</p>
        <p>Likewise, you can expect me to give candid and timely feedback to you. Please, let me know how you prefer to receive feedback.</p>
        <ul>
          <li><Link to={`https://www.linkedin.com/in/labbydev/`}>LinkedIn</Link></li>
          <li><Link to={`https://github.com/labbydev?tab=repositories`}>GitHub</Link></li>
          <li><Link to={`https://twitter.com/labbydev`}>Twitter</Link></li>
          <li><Link to={`https://www.drupal.org/u/labbydev`}>Drupal.org</Link></li>
        </ul>
      </div>
      <p>Looking for more details? Read more about what it's like <Link to={`/blog/working-with-me/`}>Working with me</Link>.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`