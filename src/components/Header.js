import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


export const Header = () => {
  return (
    <header className="header">
      <div className="content-conatainer">
        <div className="header__content">
            <h1>Aplikacja walutowa</h1>
        </div>
      </div>
    </header>
  );
};
