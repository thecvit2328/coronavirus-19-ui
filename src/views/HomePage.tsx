import React, { FunctionComponent } from 'react';
import Footer from '../components/layout/Footer';
import '../styles/Covid19.scss';

const HomePage: FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <div className="page-header">
        <div className="header">
          <div className="title">
            <h1>THAILAND</h1>
            <p>asia</p>
          </div>
          <div className="search"></div>
        </div>
      </div>
      <div className="page-body">{children}</div>
      <div className="page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
