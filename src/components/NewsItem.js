import React, { Component } from 'react'

export class NewsItem extends Component {



  render() {
      let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
          <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://ak.picdn.net/shutterstock/videos/1055155337/thumb/1.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem