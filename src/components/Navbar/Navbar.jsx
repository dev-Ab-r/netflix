import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React from 'react';
import './Navbar.scss';
import Profile from './profile.jpg';

export const Navbar = () => {
    return (
        <div className="navbar">
          <div className="container" >
              <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>

              </div>
              <div className="right">
                  <Search className="icon"/>
                  <span>Kids</span>
                  <Notifications className="icon"/>
                  <img src ={Profile} alt=""/>
                  <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="option">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                  </div>
                 
              </div>
          </div>
        </div>
    )
}
