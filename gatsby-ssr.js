import React from 'react'
import Apollo from './src/apollo/provider'

export const wrapRootElement = ({ element }) => <Apollo>{element}</Apollo>