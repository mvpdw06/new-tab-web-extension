import React from 'react'
import PropTypes from 'prop-types'

import { randomGreeting } from 'Config/randomGreetings'

const Title = ({ gitRepository, gitImg, userName }) =>
  <div className="title">
    <h1>
      Hi, {userName}
    </h1>
    <p>
      {randomGreeting}
    </p>
    <a href={gitRepository} title="Fork me on GitHub">
      <img className="git-logo" src={gitImg} />
    </a>
  </div>

Title.propTypes = {
  userName: PropTypes.string.isRequired,
  gitRepository: PropTypes.string.isRequired,
  gitImg: PropTypes.string.isRequired
}

module.exports = Title
