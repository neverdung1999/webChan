import React, { Component } from 'react'
import Header from './containers/headers/header/index'
import Social from './containers/headers/social/index'
import Banner from './containers/headers/banner/index'

import Advertisement from './containers/bodys/advertisement/index'
import Service from './containers/bodys/service/index'
import Client from './containers/bodys/client/index'
import OurPortfolio from './containers/bodys/ourPortfolio/index'
import Testimonial from './containers/bodys/testimonial/index'
import CallToAction from './containers/bodys/callToAction/index'

import TeamSection from './containers/footers/teamSection/index'
import Contact from './containers/footers/contact/index'
import CopyRight from './containers/footers/copyRight/index'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <Social />
        <Header />
        <Banner />

        {/* body */}
        <Advertisement />
        <Service />
        <Client />
        <OurPortfolio />
        <Testimonial />
        <CallToAction />

        {/* footers */}
        <TeamSection />
        <Contact />
        <CopyRight />
      </div>
    )
  }
}
