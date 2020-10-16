import React from 'react';
import './Main.scss';
import cats from './img/cats.png';

const Main = () => {
    return (
      <article className="main">
          <img alt="cats playing" src={cats}/>
      </article>
    );
  }
  
export default Main;