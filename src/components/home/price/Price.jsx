import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Each of our rooms are individually designed with their unique characteristics, from high wooden ceilings, to granite rock showers, and sea views from private balconies. For your comfort all our rooms are air-conditioned.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
