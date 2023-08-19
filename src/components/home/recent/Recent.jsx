import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='To help you find the best free rental property listing website for your needs, we’ve compiled a list of recent proprietes on our website.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
