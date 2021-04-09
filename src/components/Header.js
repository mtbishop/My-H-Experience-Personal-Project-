import React from 'react';

function Header() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="display-4">My Halo Experience</h1>
              <p className="lead">
                This page is dedicated to the way that I play Halo. I like to
                speedrun each game on the PC version of MCC (besides Halo 4). My
                best game I can run is Halo 2. I love the physics engine in the
                game and the ability to sword fly and not having to deal with
                out of bounds barriers makes the game so enjoyable to play.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>Halo Infinite HYPE!</h2>
      <div className="row">
        <div className="col-lg-12">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* <!-- Indicators --> */}
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            {/* <!-- Wrapper for slides --> */}
            <div className="carousel-inner">
              <div className="item active">
                <img
                  src="./assets/image1.jpg"
                  alt="Halo-guy"
                  style={{ width: '100%' }}
                ></img>
              </div>

              <div className="item">
                <img
                  src="./assets/image2.png"
                  alt="Build-a-Wall"
                  style={{ width: '100%' }}
                ></img>
              </div>

              <div className="item">
                <img
                  src="./assets/image3.jpg"
                  alt="Craig"
                  style={{ width: '100%' }}
                ></img>
              </div>
            </div>

            {/* <!-- Left and right controls --> */}
            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
