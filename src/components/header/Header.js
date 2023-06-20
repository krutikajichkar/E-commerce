import React from "react";
import "./Header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {Badge} from 'antd';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src='' alt="logo" />
        </div>

        <ul type="none" style={{ display: "flex" , alignItems:'center' }}>
          <li>Admin</li>
          <li>Home</li>
          <li>ContactUs</li>
        </ul>

        <ul type="none" style={{ display: "flex" ,alignItems:'center'}}>
          <li>
            <button className='btn'>Login</button>
          </li>
          <li>
            <button className="btn">Register</button>
          </li>
          <li>My Orders</li>
          <li>
            <Badge count={0} showZero>
              <ShoppingCartOutlined style={{fontSize:'30px',color:'white'}}/>
            </Badge>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Header;
