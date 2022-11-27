import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Input, TextField } from "@mui/material";
import "../../../styles/manager-user.css";
import "./modal-add.css"
import img from "../../../assets/employee.png";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
const employees = [
  {
    id: 1,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 2,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 3,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 4,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 5,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 6,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 7,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
  {
    id: 8,
    name: "Phan Thanh Tùng",
    mail: "tungphan@gmail.com",
    position: "Trưởng phòng",
    imgUrl: img,
  },
];

const ModalAddUserToRoom = ({ showModal }) => {
  const [showEditBtns, setShowEditBtns] = useState(false);
  const [memberSelected, setMemberSelected] = useState([]);

  const handleSelectMember = (id) => {
    console.log(id);
    if (!memberSelected.includes(id)) {
      setMemberSelected([...memberSelected, id]);
    } else {
      const arr = memberSelected.filter(item => item !== id)
      setMemberSelected(arr);
    }
  };

  return (
    <div className="modal-add-user">
      <div className="pop-up-add-user">
        <div className="member-section">
          <div className="header-title-wrapper">
            <div className="header-title d-flex align-items-center ">
              <div className="title">Thành viên</div>
              <div className="edit add d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => showModal(false)}
                >
                  Thêm thành viên
                </button>
              </div>
            </div>
          </div>
          <div className="input-section">
            <TextField
              id="outlined-search"
              label="Vui lòng nhập email nhân viên"
              type="search"
            />
          </div>
          <div className="list-employees">
            {employees.map((employee, index) => (
              <div
                key={index}
                className={`emplopyee d-flex ${index % 2 === 0 ? "active" : ""}`}
                onClick={() => handleSelectMember(employee.id)}
              >
                <div className="title-profile d-flex">
                  <Checkbox checked={memberSelected.includes(employee.id)} />
                  <div className="avt">
                    <img src={employee.imgUrl} alt="" />
                  </div>
                  <div className="detail">
                    <div className="name-email">
                      {`${employee.name} - ${employee.mail}`}
                    </div>
                    <div className="postion">{`${employee.position}`}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUserToRoom;
