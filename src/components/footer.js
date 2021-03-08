import React from "react"
import IconMenuItem from "./menu-item--icon"
import { GitHub, Send, Linkedin, Droplet, Codepen } from "react-feather";

const Footer = () => (
  <footer
    className={`bg-tertiary text-sm text-gray-100 p-4 font-normal`}
  >
    <div className={`container mx-auto py-4 sm:flex items-center justify-between`}>
      <p
        className={`mb-8 sm:mb-0 text-center`}
      >© {new Date().getFullYear()} Lauren Burroughs</p>
      <nav>
        <ul
          aria-label={`Footer Menu`}
          className={`text-center`}
        >
          <IconMenuItem
            to={`mailto:labyrwa@gmail.com`}
            label={`Send Email`}
            bgColor={`gray`}
          >
            <Send strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://www.linkedin.com/in/labbydev/`}
            label={`See LinkedIn profile`}
            bgColor={`gray`}
          >
            <Linkedin strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://drupal.org/u/labbydev`}
            label={`See Drupal user profile`}
            bgColor={`gray`}
          >
            <Droplet strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://github.com/labbydev`}
            label={`See GitHub profile`}
            bgColor={`gray`}
          >
            <GitHub strokeWidth={1}/>
          </IconMenuItem>
          <IconMenuItem
            to={`https://codepen.io/labbydev`}
            label={`See CodePen profile`}
            bgColor={`gray`}
          >
            <Codepen strokeWidth={1}/>
          </IconMenuItem>
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer