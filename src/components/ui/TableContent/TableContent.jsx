import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './table-content.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Department from './Department';


const contentArray =
    [
        {
            branchName: "Chi nhánh Hà Nội",
            departments: [
                { id: 1, name: "Phòng nhân sự" },
                { id: 2, name: "Phòng kế toán" },
                { id: 3, name: "Phòng kinh doanh" },

            ]
        },
        {
            branchName: "Chi nhánh Hà Nội",
            departments: [
                { id: 4, name: "Phòng nhân sự" },
                { id: 5, name: "Phòng kế toán" },
                { id: 6, name: "Phòng kinh doanh" },

            ]
        },
        {
            branchName: "Chi nhánh Hà Nội",
            departments: [
                { id: 7, name: "Phòng nhân sự" },
                { id: 8, name: "Phòng kế toán" },
                { id: 9, name: "Phòng kinh doanh" },

            ]
        },
    ]



const TableContent = ({ showMembers }) => {


    const [isOpenArray, setIsOpenArray] = useState([0, 1, 2])
    const [isActive, setIsActive] = useState()
    const handleSetOpenTab = (index) => {
        if (!isOpenArray.includes(index)) {
            setIsOpenArray((prev) => prev.concat(index))
        } else {
            let aray = []
            setIsOpenArray((prev => {
                aray = prev.filter(item => item !== index)
                return aray
            }))

        }

    }



    return (
        <Col lg="3" className="mb-5">
            <div className="search-section">
                <div className="search-bar">
                    <input type="text" placeholder='Vui lòng nhập nội dung tìm kiếm' />
                </div>
                <div className="branch">
                    {contentArray.map((item, index) => (
                        <div className="branch-item" key={index}>
                            <div className="branch-name d-flex align-items-center" onClick={() => handleSetOpenTab(index)}>
                                <ExpandMoreIcon className={isOpenArray.includes(index) && 'active'} />
                                <div className="name">{item.branchName}</div>
                            </div>
                            {isOpenArray.includes(index) && <div className="department-list">
                                {item.departments.map((i, id) => (
                                    <Department key={id} item={i} setIsActive={setIsActive} isActive={isActive} />
                                ))}
                            </div>}

                        </div>
                    ))}


                </div>
            </div>
        </Col>



    )
}

export default TableContent