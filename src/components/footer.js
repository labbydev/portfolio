import React from "react"
import IconMenuItem from "./menu-item--icon"
import { GitHub, Send, Linkedin, Droplet, Codepen } from "react-feather";

const Footer = () => (
  <footer
    className={`bg-tertiary text-sm text-gray-100 px-4 py-8 font-normal`}
  >
    <div className={`container mx-auto py-4 flex items-center justify-between`}>
      <p>© {new Date().getFullYear()} Lauren Burroughs</p>
      <nav>
        <ul
          aria-label={`Footer Menu`}
        >
          <IconMenuItem
            to={`mailto:labyrwa@gmail.com`}
            label={`Send Email`}
          >
            <Send strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://www.linkedin.com/in/labbydev/`}
            label={`See LinkedIn profile`}
          >
            <Linkedin strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://drupal.org/u/labbydev`}
            label={`See Drupal user profile`}
          >
            <Droplet strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://github.com/labbydev`}
            label={`See GitHub profile`}
          >
            <GitHub strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://codepen.io/labbydev`}
            label={`See CodePen profile`}
          >
            <Codepen strokeWidth={1}/>
          </IconMenuItem>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer