import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'
import GlobalStyle from '../styles/global'

const NodeBird = ({ Component }) => {
  return(
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </Head>
      <GlobalStyle />
      <Component />
    </>
  )
}
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequered,
}
export default NodeBird