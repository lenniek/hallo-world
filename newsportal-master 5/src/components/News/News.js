import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }


  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?country=se&apiKey=fe37b926e66c4979a26b28c6b7cbe438';
    fetch(url)//  Hämtar in API, gör om det till json och lägger den i variabeln 'url'
.then(response => response.json())
      .then((jsonData) => {
        this.setState({
          news: jsonData.articles
        });
      })
      .catch(error => console.log(error));
 
  }

  renderItems() {
    return this.state.news.map(item => (     // vi använder `this.state` för att referera till det som vi har fetchat 
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
