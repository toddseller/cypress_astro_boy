import React from 'react'
import { Button } from 'optimizely-oui'

import './index.css'

class LearnMoreButton extends React.Component {
  onClick = () => {
    const { optimizely } = this.props

    optimizely.track('learn_more')

    optimizely.close()
      .then(() => {
        window.location.assign('https://optimizely.com/rollouts')
      })
  }

  render() {
    return (
      <Button
        style={ 'highlight' }
        isActive={ false }
        size="narrow"
        onClick={ this.onClick }
      >
        Blast Off!
      </Button>
    )
  }
}

export default LearnMoreButton