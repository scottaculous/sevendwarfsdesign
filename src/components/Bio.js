import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`one dwarf`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(1.5),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>seven dwarfs</strong> living in Atlanta building useful things.
        </p>
      </div>
    )
  }
}

export default Bio
