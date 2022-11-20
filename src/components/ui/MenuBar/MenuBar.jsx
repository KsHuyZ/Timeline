import React from 'react'
import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material'
import { Col, Row } from 'reactstrap';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoopIcon from '@mui/icons-material/Loop';
import { createStyles, makeStyles } from '@material-ui/core';
import "../../../styles/list-work.css"

const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0",
        }
    });
});

const MenuBar = ({ age, handleChange, userOnline }) => {
    const { search } = useStyles();
    return (
        <Row className='align-items-center row-menubar'>
            <Col lg="4">
                <div className="left-side d-flex">
                    <div className="select-side">
                        <FormControl sx={{ m: 1 }} className="form-control" >
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Phòng Designer</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    <div className="users-online d-flex align-items-center">
                        {userOnline.map((user, index) => {
                            return index < 4 ? (<div key={index} className="user-online" style={{ zIndex: index, marginLeft: -10 }}>
                                <img src={user.avt} alt="" />
                            </div>) : ""
                        }
                        )}
                        <div className='user-more' style={{ zIndex: 1, marginLeft: -10 }}> +{userOnline.length - 4} </div>
                    </div>
                </div>

            </Col>
            <Col lg="6" className="share-search action-col d-flex">
                <Button variant="outlined">Chia sẻ</Button>

                <FormControl className={search} style={{ width: 200 }}>
                    <TextField
                        size="small"
                        variant="outlined"
                        onChange={handleChange}
                        placeholder="Tìm kiếm"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start"  >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            // endAdornment: (
                            //     <InputAdornment
                            //         position="end"
                            //         style={{ display: showClearIcon }}
                            //         onClick={handleClick}
                            //     >
                            //         <ClearIcon />
                            //     </InputAdornment>
                            // )
                        }}
                    />
                </FormControl>
                <div className="filter d-flex align-items-center">
                    <FilterAltOutlinedIcon /> <div>Lọc</div>
                </div>
                <div className="sort d-flex align-items-center">
                    <SwapVertOutlinedIcon />
                    <div>Sắp xếp</div>
                </div>
                <div className="template d-flex align-items-center">
                    <ViewQuiltIcon />
                    <div>Giao diện </div>
                    <ExpandMoreIcon />
                </div>
                <div className="synchronized d-flex align-items-center">
                    <LoopIcon />
                    <div>Đồng bộ </div>
                </div>
            </Col>
            <Col lg="2">
                <Button variant="contained" className='add-new'>Thêm mới</Button>
            </Col>
        </Row>
    )
}

export default MenuBar