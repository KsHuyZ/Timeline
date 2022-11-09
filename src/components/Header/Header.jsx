import React, { useRef, useEffect, useState, useContext } from "react";
import "./header.css";
import { Container } from "reactstrap";
import Skeleton from '@mui/material/Skeleton';
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import avt from '../../assets/avatar.png'

const NAV__LINKS = [
    {
        display: "Dashboard",
        url: "/home",
    },
    {
        display: "Cơ cấu tổ chức",
        url: "/market",
    },
    {
        display: "Công việc",
        url: "/create",
    },
    {
        display: "Báo cáo",
        url: "/contact",
    },
    {
        display: "Kiểu người dùng",
        url: "/contact",
    },
    {
        display: "Quản lý kiểu người dùng",
        url: "/contact",
    },

];



const Header = () => {

    return (
        <header className="header" >
            <Container fluid>
                <div className="navigation">
                    <div className="logo">
                        <h2 className=" d-flex gap-2 align-items-center ">
                            <div className="logo-img"> <img src={logo} alt="" /></div>
                            <div style={{ fontFamily: 'Roboto' }}> Fine Team</div>
                        </h2>
                    </div>

                    <div className="nav__menu" >
                        <ul className="nav__list">
                            {NAV__LINKS?.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink
                                        to={item.url}
                                        className={(navClass) =>
                                            navClass.isActive ? "active" : ""
                                        }
                                    >
                                        <div className="link">     {item.display}</div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-5 ">
                        <div className="btn d-flex gap-2 align-items-center button">
                            <button className="btn d-flex gap-2 align-items-center">
                                <div className="img">
                                    <img src={avt} alt="" />
                                </div>
                                <div className="right-side d-flex">
                                    <div className="name">Nguyễn Ngọc Châu</div>
                                    <div className="postition">Desgin team</div>
                                </div>
                            </button>
                        </div>

                        <span className="mobile__menu">
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
