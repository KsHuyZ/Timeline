import React from 'react'
import { Col } from 'reactstrap'
import img from "../../../assets/profile.png"
import './profile.css'
import DoneIcon from '@mui/icons-material/Done';

const Profile = () => {
  return (
    <Col lg="4" className="mb-5">
      <div className="profile-section">
        <div className="profile d-flex">
          <div className="top-profile d-flex">
            <div className="image-profile">
              <img src={img} alt="" />
            </div>
            <div className="name-position d-flex">
              <div className="name">Phan Thanh Tùng</div>
              <div className="position">Trưởng phòng</div>
              <div className="is-active d-flex align-items-center ">
                <DoneIcon fontSize='10px' style={{ color: '#1890FF' }} />
                <div>Đang hoạt động</div>
              </div>
            </div>
          </div>
          <div className="bottom-profile mt-2">
            <div className="title-line">
              <div className="basic-line d-flex align-items-center">
                Thông tin cơ bản
              </div>
              <div className="contact-line d-flex align-items-center">Thông tin liên lạc</div>
            </div>
            <div className="infor-profile d-flex mt-4">
              <div className="date-gender d-flex">
                <div className="birth-date">
                  Ngày sinh: 01/06/1995
                </div>
                <div className="gender">
                  Giới tính: Nam
                </div>
              </div>
              <div className="email-address d-flex">
                <div className="email">Email: thanhtung@gmail.com</div>
                <div className="address">Địa chỉ: Quận Gò Vấp, Thành phố Hồ Chí Minh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Profile