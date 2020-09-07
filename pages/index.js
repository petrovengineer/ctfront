import Head from 'next/head'
import Layout from '../components/Layout'
import Gas from '../components/Gas'

export default function Home() {
    return (
      <Layout>
        <>
          Drawer
        </>
        <div className="paper p-3">
          <Gas/>
        </div>
      </Layout>
  )
}
