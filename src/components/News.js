import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Ray Sanchez, Steve Almasy, Rosa Flores, CNN",
      "title": "A 13-year-old was behind the wheel in Texas crash that killed 9 people and left two University of the Southwest golfers critically injured - CNN",
      "description": "A 13-year-old child was behind the wheel of a pickup truck involved in a head-on collision in Texas that killed nine people -- including six University of the Southwest golfers and their coach, National Transportation Safety Board Vice Chairman Bruce Landsber…",
      "url": "https://www.cnn.com/2022/03/17/us/usw-golf-team-van-crash-thursday/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220316062855-odessa-texas-bus-crash-03162022-super-tease.jpeg",
      "publishedAt": "2022-03-18T12:21:40Z",
      "content": "(CNN)A 13-year-old boy drove the pickup truck involved in a fiery head-on collision in Texas that killed nine people, including six University of the Southwest golfers and their coach, a National Tra… [+6921 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Ben Morse, CNN",
      "title": "Saint Peter's completes huge March Madness upset, stunning No. 2 seed Kentucky - CNN",
      "description": "It's early in March Madness, but we may not see a bigger shock in the men's NCAA tournament than Thursday night's stunning result.",
      "url": "https://www.cnn.com/2022/03/18/sport/saint-peters-kentucky-march-madness-spt-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220318101638-peacocks-celebrate-super-tease.jpg",
      "publishedAt": "2022-03-18T11:35:00Z",
      "content": null
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "By Seán Federico-O'Murchú, Adam Renton, Jeevan Ravindran and George Ramsay, CNN",
      "title": "Russia invades Ukraine: Live updates - CNN",
      "description": "Ukraine said it launched a counteroffensive aimed at gaining control of Kyiv's suburbs after NATO officials said Russia's offensive to capture the capital has largely stalled. Follow here for live news updates.",
      "url": "https://www.cnn.com/europe/live-news/ukraine-russia-putin-news-03-18-22/index.html",
      "urlToImage": "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/67b34f21-4faa-437b-98f5-57b1daec2b88.JPG",
      "publishedAt": "2022-03-18T10:39:12Z",
      "content": "As Chinese President Xi Jinping prepares for a phone call with his US counterpart on Friday, the war in Ukraine looms large with Beijing's position on Russia's invasion under increasing international… [+2798 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Steve Almasy, CNN",
      "title": "American killed in Ukraine described increasing hardships for civilians in city near Russia - CNN",
      "description": "Months before Russian troops attacked Ukraine, American Jimmy Hill went there to be with his Ukranian partner, Ira, who has multiple sclerosis. When war broke out, Hill stayed, despite the deteriorating conditions in the northern Ukrainian city of Chernihiv.",
      "url": "https://www.cnn.com/2022/03/17/europe/james-hill-american-killed-ukraine-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220317182936-01-james-whitney-hill-super-tease.jpg",
      "publishedAt": "2022-03-18T10:28:00Z",
      "content": "(CNN)Months before Russian troops attacked Ukraine, American Jimmy Hill went there to be with his Ukranian partner, Ira, who has multiple sclerosis. When war broke out, Hill stayed, despite the deter… [+2864 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Space.com"
      },
      "author": "Chelsea Gohd",
      "title": "NASA's new moon rocket, its most powerful ever, rolls out for 1st time - Space.com",
      "description": "The Artemis 1 moon rocket is NASA's first Space Launch System booster.",
      "url": "https://www.space.com/nasa-artemis-1-moon-mission-rollout-launch-pad",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/zZxBPb7eojVZHjGx4gancn-1200-80.jpg",
      "publishedAt": "2022-03-18T10:26:42Z",
      "content": "CAPE CANAVERAL, Florida — NASA's new megarocket for its Artemis 1 moon mission is on the launch pad for the first time.\r\nOn Thursday (March 17) at 5:47 p.m. EDT (2147 GMT), with the largest doors in … [+4623 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Acme Packing Company"
      },
      "author": "justis.mosqueda",
      "title": "Green Bay Packers now sixth in 2022 NFL Draft capital after Davante Adams trade - Acme Packing Company",
      "description": "Only the Jacksonville Jaguars have more draft selections in April’s draft.",
      "url": "https://www.acmepackingcompany.com/2022/3/18/22984375/green-bay-packers-now-sixth-in-2022-nfl-draft-capital-after-davante-adams-trade",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/bAMuS3pKZ289fFcOMw9LOoKkXs4=/0x474:5056x3121/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23326373/1238931293.jpg",
      "publishedAt": "2022-03-18T10:00:00Z",
      "content": "There are many ways to measure draft capital, with the most popular being Jimmy Johnsons trade chart from his days with the Dallas Cowboys, simply because it was widely available before more nuanced … [+3702 chars]"
      }
  ]
  constructor() {
    super();
    console.log("Hello");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
          </div>
      </div>
    )
  }
}
export default News;
