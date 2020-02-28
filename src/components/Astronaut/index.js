import React from 'react'
import { OptimizelyFeature, withOptimizely } from '@optimizely/react-sdk'

import LearnMoreButton from '../Learn_More_Button'
import optinaut from '../../optinaut.svg'

const WrappedLearnMoreButton = withOptimizely(LearnMoreButton)

class Astronaut extends React.Component {
  render() {
    return (
      <OptimizelyFeature feature={ this.props.feature }>
        { isEnabled => (
          <div className="astronaut-container">
            { isEnabled && <img src={ optinaut } id="astronaut" alt="Optinauts in Space"/> }
            { isEnabled && <WrappedLearnMoreButton/> }
          </div>
        ) }
      </OptimizelyFeature>
    )
  }
}

export default Astronaut