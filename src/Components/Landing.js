import React, { Component } from 'react'
import Carousel from './LandingCarousel'

export default class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to <br /> Stout Wellness Center!</h1>
                <h2>Managing your pain, without the pills.</h2>
                <Carousel />
            </div>
        )
    }
}
