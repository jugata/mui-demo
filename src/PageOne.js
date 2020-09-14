import React, { Fragment } from 'react'
import "./PageOne.css"
import Layout from './Layout'
import CardContainer from './CardContainer'
import Name from './Name'
export default function PageOne() {
  return (

    <Layout title={"ASSESSMent for You"}>
      <Name />
      <Fragment>
        <CardContainer />
      </Fragment>
    </Layout>

  )
}
