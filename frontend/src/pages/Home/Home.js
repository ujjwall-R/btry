import React from "react";
import Dora from "../../files/dora3.PNG";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Professional Animated Videos for your Brand | Magicarnival</title>
      <link rel="stylesheet" href="styles/styleHome.css" />
      <img src={Dora} alt="back image" id="backimage" />
      <header className="headerclass">
        <header-component />
        <h1
          style={{
            color: "white",
            fontWeight: "200%",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Professional Animated
          <br />
          Videos for your Brand.
        </h1>
        <br />
        <h6>Elevate your brand with us</h6>
        <br />
        <span id="midget">
          <a href="getstarted.html" id="ff">
            Get Started
          </a>
        </span>
        <br />
        <span className="contacts">
          Call Us&nbsp;&nbsp;&nbsp;&nbsp;7979033873
        </span>
        <br />
        <span className="contacts">
          Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@magicvarnival.com
        </span>
        <br />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
