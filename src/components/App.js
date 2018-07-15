import React from 'react'
import { hot } from 'react-hot-loader'
import Layout from './Layout'

const App = ({ store }) => (
  <Layout store={ store }></Layout>
)

export default hot(module)(App)
