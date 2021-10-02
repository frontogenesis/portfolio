import React from 'react'
import moment from 'moment'

import Layout from '../components/layout'
import Loading from '../components/Loading'
import Error from '../components/Error'
import useFetch from '../utils/useFetch'

export default function Articles() {
    const { loading, data, error } = useFetch(`https://api.npr.org/query?orgId=${process.env.GATSBY_NPR_ORG_ID}&fields=title,byline,storyDate,parent,teaser,image&startDate=2021-07-27&dateType=story&output=JSON&apiKey=${process.env.GATSBY_NPR_API_KEY}`)
    const siteTitle = 'Articles'

    function localDateTime(datetime) {
        const dt = moment(datetime).format('ddd, DD MMM YYYY hh:mm:ss')
        return moment(dt).format('ddd, M/D/YY, h:mm a')
    }
    
    return (
        <Layout title={siteTitle}>
            {loading && <Loading />}
            {!loading && error ? <Error /> : 
            data?.list.story.map(story => {
                if (story.byline[0].name['$text'] !== 'Ray Hawthorne') return null
                
                return (
                    <div key={story.id} className='articles'>
                        <a href={story.link[0]['$text']} target='__blank' noreferrer className='article-link'>
                        <h3>{story.title['$text']}</h3>
                        <div className='article'>
                            <img src={story.image[0].src}  
                                className='article-headline'
                                alt='Story Headline' />    
                            <div className='article-meta'>
                                <div>{story.teaser['$text']}</div>
                                <div className='article-published-line'>
                                    <span className='article-published-text'>Published:&nbsp;</span> 
                                    {localDateTime(story.storyDate['$text'])}
                                </div>
                            </div>
                        </div></a>
                    </div>
                )
            })
            }
        </Layout>
    )
}