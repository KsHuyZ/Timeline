import React from "react";
import { Container, Row } from "reactstrap";
import Header from "../Header/Header";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import "../../styles/list-work.css";
import { useState } from "react";
import MenuBar from "../ui/MenuBar/MenuBar";
import CardTask from "../ui/CardTask/CardTask";
import AddWork from "../ui/AddWork/AddWork";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import "./col-task.css";

const userOnline = [
  {
    id: 1,
    avt: user1,
  },
  {
    id: 2,
    avt: user2,
  },
  {
    id: 3,
    avt: user3,
  },
  {
    id: 4,
    avt: user4,
  },
  {
    id: 5,
    avt: user4,
  },
];

const ListWork = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {showModalAdd && <AddWork showModal={setShowModalAdd} />}
      <Header />
      <Container fluid>
        <MenuBar
          handleChange={handleChange}
          userOnline={userOnline}
          showModal={setShowModalAdd}
        />
        <Row>
          <div className="col-card">
            <div className="title-header d-flex">
              <div className="title-add d-flex align-items-center">
                <div
                  className="title"
                  style={{ borderLeft: ` 3px solid #1890ff` }}
                >
                  Yêu cầu
                </div>
                {/* <div className="add">
            <Button variant="outlined" style={{ border: "1px solid #91caff" }}>Thêm</Button>
          </div> */}
              </div>
              <div className="title-more">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="card-task-list">
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
            </div>
          </div>

          <div className="col-card">
            <div className="title-header d-flex">
              <div className="title-add d-flex align-items-center">
                <div
                  className="title"
                  style={{ borderLeft: ` 3px solid #ff9600` }}
                >
                  Đang làm
                </div>
                {/* <div className="add">
            <Button variant="outlined" style={{ border: "1px solid #91caff" }}>Thêm</Button>
          </div> */}
              </div>
              <div className="title-more">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="card-task-list">
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
            </div>
          </div>

          <div className="col-card">
            <div className="title-header d-flex">
              <div className="title-add d-flex align-items-center">
                <div
                  className="title"
                  style={{ borderLeft: ` 3px solid #ff9600` }}
                >
                  Chờ duyệt
                </div>
                {/* <div className="add">
            <Button variant="outlined" style={{ border: "1px solid #91caff" }}>Thêm</Button>
          </div> */}
              </div>
              <div className="title-more">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="card-task-list">
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
            </div>
          </div>

          <div className="col-card">
            <div className="title-header d-flex">
              <div className="title-add d-flex align-items-center">
                <div
                  className="title"
                  style={{ borderLeft: ` 3px solid #ff4842` }}
                >
                  Sửa
                </div>
                {/* <div className="add">
            <Button variant="outlined" style={{ border: "1px solid #91caff" }}>Thêm</Button>
          </div> */}
              </div>
              <div className="title-more">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="card-task-list">
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
            </div>
          </div>

          <div className="col-card">
            <div className="title-header d-flex">
              <div className="title-add d-flex align-items-center">
                <div
                  className="title"
                  style={{ borderLeft: ` 3px solid ##1890ff` }}
                >
                  Hoàn Thành
                </div>
                {/* <div className="add">
            <Button variant="outlined" style={{ border: "1px solid #91caff" }}>Thêm</Button>
          </div> */}
              </div>
              <div className="title-more">
                <MoreHorizIcon />
              </div>
            </div>
            <div className="card-task-list">
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
              <CardTask />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ListWork;
