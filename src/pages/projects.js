import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

export default function Projects() {
    const siteTitle = 'Projects'

    return (
        <Layout title={siteTitle}>
            <section className='projects-container'>
                <div className='projects-row'>
                    <div className='projects-column card'>
                        <a href='https://www.scetv.org/weather' target='_blank' rel='noreferrer'>
                        <div className='project-name'>South Carolina Emergency Information Network</div>
                        <StaticImage src='../images/projects/SCETV.png' alt='South Carolina Public Radio' />
                        </a>
                        <div className='project-description'>
                            SCEIN provides in-depth, severe weather information throughout the Palmetto State. 
                            Public radio listeners get the latest on hazards affecting them on-air and online.
                            The SCEIN module showcases South Carolina in all its beauty through a network of
                            weather stations across the state.
                        </div>
                    </div>
                    <div className='projects-column card'>
                        <a href='http://www.floridapublicmedia.org/what-we-do/we-prepare/' target='_blank' rel='noreferrer'>
                        <div className='project-name'>Florida Public Radio Emergency Network</div>
                        <StaticImage src='../images/projects/FPREN.png' alt='FPREN Module' />
                        </a>
                        <div className='project-description'>
                            FPREN supplies hazard information to 14 public media stations statewide, from
                            the Panhandle to the Keys. All FPREN partners use a custom-coded and designed web module 
                            that integrates easily within their Content Management System.
                        </div>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='projects-column card'>
                        <a href='https://pbsweather.org/wuft/hub' target='_blank' rel='noreferrer'>
                        <div className='project-name'>WUFT Weather Hub</div>
                        <StaticImage src='../images/projects/hub.png' alt='WUFT Weather Hub' />
                        </a>
                        <div className='project-description'>
                            It's the afternoon drive home. Your listeners are depending on you for the
                            latest forecast and any weather hazards that are in their way. The Weather Hub
                            supplies WUFT NPR radio hosts that critical information - all at their finger tips.
                        </div>
                    </div>
                    <div className='projects-column card'>
                        <a href='https://www.wgcu.org/weather' target='_blank' rel='noreferrer'>
                        <div className='project-name'>WeatherSTEM Module</div>
                        <StaticImage src='../images/projects/wxstem_module.png' alt='WeatherSTEM Module' />
                        </a>
                        <div className='project-description'>
                            Imagine tapping into a vast network of weather stations. The WeatherSTEM module
                            does exactly that: it "automagically" calculates your location, and finds the 
                            camera and stations nearest you. Many FPREN partners use this custom-coded and
                            designed module that integrates easily within their web experience. 
                        </div>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='projects-column card'>
                        <a href='https://twitter.com/search?q=%22%40floridastorms%22%20%22tornado%20warning%22&src=typed_query' 
                            target='_blank' rel='noreferrer'>
                        <div className='project-name'>Social Media Hazards Automation</div>
                        <StaticImage 
                            src='../images/projects/twitter_auto_tor.png' 
                            alt='Social Automation' />
                        </a>
                        <div className='project-description'>
                            Have you ever wondered what it might be like to have your own personal
                            meteorologist post critical storm warnings to your Twitter account? ...Without 
                            actually having a physical meteorologist post it for you?
                            Cloud computing makes it possible. Visit @FloridaStorms on Twitter next time
                            there's severe weather happening in the state.
                        </div>
                    </div>
                    <div className='projects-column card'>
                        <div className='project-name'>Evacuation Zones Map</div>
                        <StaticImage src='../images/projects/geo_streaming.png' alt='Evacuation Zone Map' />
                        <div className='project-description'>
                            Know Your Home. Know Your Zone. We find your location and determine whether
                            you're in an evacuation zone. Have a home at the beach? Tap on the map and know
                            your zone. Get the full experience on the Florida Storms app.
                        </div>
                        
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='projects-column card'>
                        <a href='https://floridastorms.org/app/' target='_blank' rel='noreferrer'>
                        <div className='project-name'>FPREN Live Stream</div>
                        <StaticImage src='../images/projects/geo_streaming.png' alt='FPREN Live Streaming' />
                        </a>
                        <div className='project-description'>
                            You're on the road and a hurricane is approaching. Live-saving information is
                            available through the Florida Public Radio Emergency Network. The app finds the
                            nearest FPREN station to you, no matter where you are, and streams that 
                            information live. See it on the Florida Storms app for iOS and Android.
                        </div>
                    </div>
                    <div className='projects-column card'>
                        <a href='https://aws.amazon.com/blogs/machine-learning/giving-your-content-a-voice-with-the-newscaster-speaking-style-from-amazon-polly/'
                            target='_blank' rel='noreferrer'>
                        <div className='project-name'>Neural Network Text-to-Speech</div>
                        <StaticImage src='../images/projects/amazon_polly.png' alt='Amazon Polly' />
                        </a>
                        <div className='project-description'>
                            Deep-learning is transforming our society in ways we may never have imagined
                            a decade or two ago. Amazon's Polly service turns text into speech that sounds
                            lifelike. It could transform the way we receive news and hazard information.
                            Samples soon.
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}