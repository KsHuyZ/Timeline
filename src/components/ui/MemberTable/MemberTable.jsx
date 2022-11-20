import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { Input, TextField } from '@mui/material';
import './member-table.css'
import img from "../../../assets/employee.png"
import SaveIcon from '@mui/icons-material/Save';

const employees = [
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
    { name: "Phan Thanh Tùng", mail: "tungphan@gmail.com", position: "Trưởng phòng", imgUrl: img },
]

const MemberTable = () => {

    const [showEditBtns, setShowEditBtns] = useState(false)

    return (

        <Col lg="5" className="mb-5">
            <div className="member-section">
                <div className="header-title-wrapper">
                    <div className="header-title d-flex align-items-center ">
                        <div className="title">
                            Thành viên
                        </div>
                        <div className="edit d-flex align-items-center">
                            {showEditBtns ? (<>
                                <button type="button" class="btn btn-primary" ><SaveIcon />Lưu</button>
                                <div className='exit' onClick={() => setShowEditBtns(false)}>Hủy bỏ</div>

                            </>) : (<button type="button" class="btn btn-primary" onClick={() => setShowEditBtns(true)}> Chỉnh sửa</button>)}
                        </div>
                    </div>

                </div>
                <div className="input-section">
                    <TextField id="outlined-search" label="Vui lòng nhập email nhân viên" type="search" />
                </div>
                <div className="list-employees">
                    {employees.map((employee, index) => (
                        <div key={index} className={`emplopyee d-flex ${index % 2 === 0 ? "active" : ""}`}>
                            <div className="avt">
                                <img src={employee.imgUrl} alt="" />
                            </div>
                            <div className="detail">
                                <div className="name-email">
                                    {`${employee.name} - ${employee.mail}`}
                                </div>
                                <div className="postion">
                                    {`${employee.position}`}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Col>



    )
}

export default MemberTable