import React from "react"
import './MediaIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MediaIcons = ({}) => (
        <div class="media-icons-container">
          <a href="mailto:liam@liamwebbdavies.com"><FontAwesomeIcon icon={faEnvelope} />Email</a>
          <a href="https://github.com/LiamWebbDavies"><FontAwesomeIcon icon={faGithub} />GitHub</a>
          <a href="https://www.linkedin.com/in/liam-webb-davies"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
        </div>
)

export default MediaIcons