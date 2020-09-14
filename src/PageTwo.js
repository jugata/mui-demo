import React, { Fragment } from 'react'
import SimpleTable from './SimpleTable'
import Layout from './Layout'

export default function PageTwo() {

  return (
    <Layout title={"The Schedule"}>
      <Fragment>
        <SimpleTable />
      </Fragment>
    </Layout>

  )

}
