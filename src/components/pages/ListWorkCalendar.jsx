import CalendarTimeLine from "../CalendarTimeLine"
import React from 'react'
import { Container, Row } from 'reactstrap';
import Header from '../Header/Header'
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"
import '../../styles/list-work.css'
import { useState } from 'react';
import MenuBar from '../ui/MenuBar/MenuBar';
import ColTask from "../ui/ColTask/ColTask"
import AddWork from '../ui/AddWork/AddWork';

const userOnline = [
    {
        id: 1,
        avt: user1
    },
    {
        id: 2,
        avt: user2
    },
    {
        id: 3,
        avt: user3
    },
    {
        id: 4,
        avt: user4
    },
    {
        id: 5,
        avt: user4
    },
]


const colTask = [{
    id: 1,
    title: "Yêu cầu",
    color: "#1890ff"
},
{
    id: 2,
    title: "Đang làm",
    color: "#ff9600"
},
{
    id: 3,
    title: "Chờ duyệt",
    color: "#ff9600"
},
{
    id: 4,
    title: "Sửa",
    color: "#ff4842"
},
{
    id: 5,
    title: "Đã sửa",
    color: "#1890ff"
},
]


const ListWorkCalendar = () => {
    return (
       
        <>
         <Header />
            <Container fluid>
                <MenuBar userOnline={userOnline} />
                <Row>
                <CalendarTimeLine/>
                </Row>
            </Container>
        </>

    )
}

export default ListWorkCalendar