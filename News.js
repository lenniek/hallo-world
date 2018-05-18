import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  // Detta hämtar in API, för att göra om det till json och förpackar den i variabeln 'url'.

  componentDidMount() {
    const url =
      'https://newsapi.org/v2/top-headlines?country=se&apiKey=fe37b926e66c4979a26b28c6b7cbe438';
    fetch(url)
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({
          news: jsonData.articles
        });
      })
      .catch(error => console.log(error));
  }

  // Refererar till det som tidigare är fetchat, detta görs via att använda 'this.state'.

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
