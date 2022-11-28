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
import ColTask from "../ui/ColTask/ColTask";
import AddWork from "../ui/AddWork/AddWork";
import PopTooltip from "../PopToolTip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import EditorText from "../EditorText";

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

const colTask = [
  {
    id: 1,
    title: "Yêu cầu",
    color: "#1890ff",
  },
  {
    id: 2,
    title: "Đang làm",
    color: "#ff9600",
  },
  {
    id: 3,
    title: "Chờ duyệt",
    color: "#ff9600",
  },
  {
    id: 4,
    title: "Sửa",
    color: "#ff4842",
  },
  {
    id: 5,
    title: "Đã sửa",
    color: "#1890ff",
  },
];

const ListWorkDetail = () => {
  const [age, setAge] = useState(1);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {showModalAdd && <AddWork showModal={setShowModalAdd} />}
      <Header />
      <Container fluid>
        <MenuBar
          age={age}
          handleChange={handleChange}
          userOnline={userOnline}
          showModal={setShowModalAdd}
        />
        <Row className="card-new">
          <div className="title-work">
            <button className="btn status-title">Status</button>
            <PopTooltip
              description={
                "[T-04-3]_APP_Search được room khi vượt quá số lượng tr"
              }
            >
              <h3 className="main-title-work three-dot">
                [T-04-3]_APP_Search được room khi vượt quá số lượng tr
              </h3>
            </PopTooltip>
          </div>
          <div className="card-word">
            <div className="introduce-card">
              <div className="avatar-left">
                <div>
                  <img
                    className="img-avatar"
                    src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                    alt=""
                  />
                </div>
                <div className="name-avatar">
                  <b>KhanhBatLuc</b>
                  <div className="date-avatar">
                    CreatedNov. 09, 2022 17:11:22
                  </div>
                </div>
              </div>
              <div className="avatar-right">
                <button className="btn btn-copy">
                  <i class="fa-solid fa-copy"></i> Copy URI
                </button>
              </div>
            </div>
            <div className="description-data ">dasdasdas</div>
          </div>
          <div className="card-word width-card-100 mt-2">
            <i class="fa-solid fa-paperclip" style={{ color: "gray" }}></i>{" "}
            <p className="title-attack">Attack(1)</p>
          </div>
          <div className="title-comment">Comments(7)</div>
          <div className="card-word">
            <div className="comment">
              <div className="introduce-card">
                <div className="avatar-left">
                  <div>
                    <img
                      className="img-avatar"
                      src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                      alt=""
                    />
                  </div>
                  <div className="name-avatar">
                    <b>KhanhBatLuc</b>
                    <div className="date-avatar">
                      CreatedNov. 09, 2022 17:11:22
                    </div>
                  </div>
                </div>
                <div className="avatar-right">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <i class="fa-solid fa-bars"></i>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </ListItemIcon>
                      <ListItemText>Sửa</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <i class="fa-solid fa-trash"></i>
                      </ListItemIcon>
                      <ListItemText>Xóa</ListItemText>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="text-description">
                Đối ứng thêm phần include trong sức chứa không nữa nghe
              </div>
            </div>
            <div className="comment">
              <div className="introduce-card">
                <div className="avatar-left">
                  <div>
                    <img
                      className="img-avatar"
                      src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                      alt=""
                    />
                  </div>
                  <div className="name-avatar">
                    <b>KhanhBatLuc</b>
                    <div className="date-avatar">
                      CreatedNov. 09, 2022 17:11:22
                    </div>
                  </div>
                </div>
                <div className="avatar-right">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <i class="fa-solid fa-bars"></i>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </ListItemIcon>
                      <ListItemText>Sửa</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <i class="fa-solid fa-trash"></i>
                      </ListItemIcon>
                      <ListItemText>Xóa</ListItemText>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="text-description">
                Đối ứng thêm phần include trong sức chứa không nữa nghe
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <div className="bottom-comment">
        <input type="text" className="input-comment" />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
        >
          Thay đổi trạng thái
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <i class="fa-solid fa-pen-to-square"></i>
            </ListItemIcon>
            <ListItemText>Sửa</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <i class="fa-solid fa-trash"></i>
            </ListItemIcon>
            <ListItemText>Xóa</ListItemText>
          </MenuItem>
        </Menu>
          </div>

      {/* <div className="bottom-comment height-300px ">
        <EditorText />
              <div className="list-button">
              <Button
          id="basic-button"
          className="editor-text"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
                      variant="outlined"
                      className="margin-2"
        >
          Thay đổi trạng thái
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <i class="fa-solid fa-pen-to-square"></i>
            </ListItemIcon>
            <ListItemText>Sửa</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <i class="fa-solid fa-trash"></i>
            </ListItemIcon>
            <ListItemText>Xóa</ListItemText>
          </MenuItem>
                  </Menu>
                  <Button  className="margin-2" variant="outlined">
                      Close
                  </Button>
                  <Button  className="margin-2" variant="contained">
                      Submit
                  </Button>
       </div>
      </div> */}
    </>
  );
};

export default ListWorkDetail;
