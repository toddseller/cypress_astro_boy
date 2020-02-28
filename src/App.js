import React from 'react'
import { createInstance, OptimizelyProvider, withOptimizely, setLogLevel } from '@optimizely/react-sdk'
import { default as UUID } from 'uuid'

import Astronaut from './components/Astronaut'
import Planet from './components/Planet'

import './App.css'

setLogLevel('debug')

const optimizelyClientInstance = createInstance({
  sdkKey: process.env.REACT_APP_SDK_KEY_PROD
})

const WrappedAstronaut = withOptimizely(Astronaut)

const search = window.location.search
const params = new URLSearchParams(search)
const audienceParam1 = params.get('cypress')
const id = params.get('uuid') !== null ? params.get('uuid') : UUID().toString()

class App extends React.Component {
  render() {
    return (
      <div>
        <OptimizelyProvider
          optimizely={ optimizelyClientInstance }
          user={ {
            id: id,
            attributes: {
              cypress: audienceParam1,
            }
          } }
        >
          <WrappedAstronaut feature="astro_boy"/>
        </OptimizelyProvider>
        <Planet/>
      </div>
    )
  }
}

export default App
