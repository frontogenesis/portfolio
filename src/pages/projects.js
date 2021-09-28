import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function Projects() {
    const siteTitle = 'Projects'

    return (
        <Layout title={siteTitle}>
            <section style={styles.projectsContainer}>
                <div style={styles.projectsRow}>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/SCETV.png' alt='South Carolina Public Radio' />
                        <span style={styles.projectName}>South Carolina Emergency Information Network</span>
                        <div style={styles.projectDescription}>
                            SCEIN provides in-depth, severe weather information throughout the Palmetto State. 
                            Public radio listeners get the latest on hazards affecting them on-air and online.
                            The SCEIN module showcases South Carolina in all its beauty through a network of
                            weather stations across the state.
                            See it here.
                        </div>
                    </div>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/FPREN.png' alt='FPREN Module' />
                        <span style={styles.projectName}>Florida Public Radio Emergency Network</span>
                        <div style={styles.projectDescription}>
                            FPREN supplies hazard information to 14 public media stations statewide, from
                            the Panhandle to the Keys. All FPREN partners use a custom-coded and designed web module 
                            that integrates easily within Content Management System.
                            See it here.
                        </div>
                    </div>
                </div>
                <div style={styles.projectsRow}>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/hub.png' alt='WUFT Weather Hub' />
                        <span style={styles.projectName}>WUFT Weather Hub</span>
                        <div style={styles.projectDescription}>
                            It's the afternoon drive home. Your listeners are depending on you for the
                            latest forecast and any weather hazards that are in their way. The Weather Hub
                            supplies WUFT NPR radio hosts that critical information - all at their finger tips.
                        </div>
                    </div>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/wxstem_module.png' alt='WeatherSTEM Module' />
                        <span style={styles.projectName}>WeatherSTEM Module</span>
                        <div style={styles.projectDescription}>
                            Imagine tapping into a vast network of weather stations. The WeatherSTEM module
                            does exactly that: it "automagically" calculates your location, and finds the 
                            camera and stations nearest you. Many FPREN partners use this custom-coded and
                            designed module that integrates easily within their web experience. See it in action. 
                        </div>
                    </div>
                </div>
                <div style={styles.projectsRow}>
                    <div style={styles.projectsColumn}>
                        <StaticImage 
                            src='../images/projects/twitter_auto_tor.png' 
                            alt='Social Automation' />
                        <span style={styles.projectName}>Social Media Hazards Automation</span>
                        <div style={styles.projectDescription}>
                            Have you ever wondered what it might be like to have your own personal
                            meteorologist post critical storm warnings to your Twitter account? ...Without 
                            actually having a physical meteorologist post it for you?
                            Cloud computing makes it possible. Visit @FloridaStorms on Twitter next time
                            there's severe weather happening in the state.
                        </div>
                    </div>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/geo_streaming.png' alt='Evacuation Zone Map' />
                        <span style={styles.projectName}>Evacuation Zones Map</span>
                        <div style={styles.projectDescription}>
                            Know Your Home. Know Your Zone. We find your location and determine whether
                            you're in an evacuation zone. Have a home at the beach? Tap on the map and know
                            your zone. Get the full experience on the Florida Storms app.
                        </div>
                        
                    </div>
                </div>
                <div style={styles.projectsRow}>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/geo_streaming.png' alt='FPREN Live Streaming' />
                        <span style={styles.projectName}>FPREN Live Stream</span>
                        <div style={styles.projectDescription}>
                            You're on the road and a hurricane is approaching. Live-saving information is
                            available through the Florida Public Radio Emergency Network. The app finds the
                            nearest FPREN station to you, no matter where you are, and streams that 
                            information live. See it on the Florida Storms app for iOS and Android.
                        </div>
                    </div>
                    <div style={styles.projectsColumn}>
                        <StaticImage src='../images/projects/amazon_polly.png' alt='Amazon Polly' />
                        <span style={styles.projectName}>Neural Network Text-to-Speech</span>
                        <div style={styles.projectDescription}>
                            Deep-learning is transforming our society in ways we may never have imagined
                            a decade or two ago. Amazon's Polly service turns text into speech that sounds
                            lifelike. It could transform the way we receive news and hazard information.
                            Check out a few samples I've coded here.
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const styles = {
    projectsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
    },
    projectsRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px'
    },
    projectsColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '400px'
    },
    projectName: {
        backgroundColor: 'lightGray',
        padding: '0.2rem',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    projectDescription: {
        backgroundColor: '#ededed',
        padding: '0.2rem',
        fontSize: '0.9rem',
        borderRadius: '0 0 5px 5px'
    }
}