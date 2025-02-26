import React from 'react';
import './left-aside.css';
import chart from '../img/chart.svg';
import news from '../img/news.svg';
import wallet from '../img/wallet.svg';
import symbol from '../img/home.svg';

export default function LeftAside() {
  return (
    <aside className="left-aside">
      <span>MENU</span>
      <div className="lists-container">
        <div className="options">
          <img src={symbol} alt="option" />
          <span>Dashboard</span>
        </div>
        <div className="options">
        <img src={wallet} alt="option" />
        <span>My Asset</span>
        </div>
        <div className="options">
        <img src={chart} alt="option" />
        <span>Analytics</span>
        </div>
        <div className="options">
        <img src={news} alt="option" />
        <span>News</span>
        </div>
      </div>
      
    </aside>
  )
}
