import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var react = this.props.data.react.map(function (react) {
        var projectImage = "images/portfolio/" + react.image;
        return (
          <div key={react.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href={react.url}
                target="_blank"
                rel="noopener noreferrer"
                title={react.title}
              >
                <img alt={react.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{react.title}</h5>
                    <p>{react.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });

      var flutter = this.props.data.flutter.map(function (flutter) {
        var projectImage = "images/portfolio/" + flutter.image;
        return (
          <div key={flutter.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href={flutter.url}
                target="_blank"
                rel="noopener noreferrer"
                title={flutter.title}
              >
                <img alt={flutter.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{flutter.title}</h5>
                    <p>{flutter.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h2>React apps</h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {react}
            </div>

            <h2>Flutter apps</h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {flutter}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
