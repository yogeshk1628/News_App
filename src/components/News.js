import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    if (this.props.category === "general") {
      document.title = "News App";
    } else {
      document.title = `News App - ${this.capitalizeFirstLetter(
        this.props.category
      )}`;
    }
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ae83b3097aa4f12bb1c84c6f11a779b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parseData = await data.json();
    this.props.setProgress(90);
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.country !== this.props.country) {
      this.updateNews();
    }
  }

  fetchMoreData = async() => {
    this.setState({
      page: this.state.page + 1
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ae83b3097aa4f12bb1c84c6f11a779b&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    });
  };
  render() {
    let { mode } = this.props;

    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ fontFamily: "Roboto", fontWeight: "bold" }}
        >
          NewZ - Top{" "}
          {this.props.category === "general"
            ? ""
            : `${this.capitalizeFirstLetter(this.props.category)}`}{" "}
          HeadLines
        </h1>
        {this.state.loading && <Spinner mode={mode}/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner mode={mode}/>}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title ? element.title.slice(0, 45) + "..." : ""
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 99) + "..."
                          : ""
                      }
                      img_url={element.urlToImage}
                      news_url={element.url}
                      mode={mode}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
