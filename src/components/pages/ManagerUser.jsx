import React, { useState } from 'react'
import Header from '../Header/Header'
import "../../styles/manager-user.css"
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Container } from 'reactstrap';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import ModalDelete from "../ui/ModalDelete/ModalDelete"
import AddUser from '../ui/AddUser/AddUser';

const columns = [
    { id: 'number', label: 'STT', maxWidth: 60 },
    { id: 'fullname', label: 'Họ và tên', minWidth: 90 },
    {
        id: 'email',
        label: 'Email',
        minWidth: 100,
        // align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'position',
        label: 'Chức vụ',
        minWidth: 80,
        // align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'department',
        label: 'Phòng ban',
        minWidth: 80,
        // align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'typeuser',
        label: 'Kiểu người dùng',
        minWidth: 80,
        // align: 'center',
        format: (value) => value.toFixed(2),
    },
    // {
    //     id: 'actions',
    //     label: 'Thao tác',
    //     minWidth: 90,
    //     align: 'center',
    //     format: (value) => value.toFixed(2),
    // },
];

function createData(number, fullname, email, position, department, typeuser) {

    return { number, fullname, email, position, department, typeuser };
}

const rows = [
    createData(1, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(2, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(3, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(4, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(5, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(6, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(7, 'Germany', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(8, 'Ireland', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(9, 'Mexico', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(10, 'Japan', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(11, 'France', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(12, 'United Kingdom', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(13, 'Russia', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(14, 'Nigeria', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
    createData(15, 'Nguyễn Văn A', 'nguyenvana@gmail.com', "Trưởng phòng", "Phòng kinh doanh", "Trưởng phòng"),
];

const ManagerUser = ({ }) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [typeModal, setTypeModal] = useState()
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {openModalDelete && <ModalDelete title={"Bạn muốn xoá thông tin người dùng"} showModal={setOpenModalDelete} />}
            {typeModal && <AddUser type={typeModal} setType={setTypeModal} />}
            <Header />
            <div className='manager-user pt-5'>
                <Container >
                    <div className="action-btns d-flex ">
                        <div className="add-user">
                            <button type="button" class="btn btn-primary" onClick={() => setTypeModal("add")}><AddIcon />Thêm mới</button>
                        </div>
                        <div className="add-from-file">
                            <button type="button" class="btn btn-outline-primary"> <FileUploadOutlinedIcon /> Thêm từ file</button>
                        </div>
                        <div className="export-list"><p>Xuất danh sách</p></div>
                    </div>
                    <div className="table-manager pt-5">


                        <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop: 3 }} className="table-container">
                            <TableContainer sx={{ maxHeight: 440 }} >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth, backgroundColor: "#F4F6F8" }}

                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                            <TableCell style={{ minWidth: 90, backgroundColor: "#F4F6F8" }}>
                                                Thao tác
                                            </TableCell>
                                        </TableRow>

                                    </TableHead>
                                    <TableBody>
                                        <TableRow style={{ backgroundColor: "#F4F6F8", marginTop: 10 }} className="table-row">
                                            <TableCell></TableCell>
                                            <TableCell><input /></TableCell>
                                            <TableCell><input /></TableCell>
                                            <TableCell><input /></TableCell>
                                            <TableCell>
                                                <select>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                </select>
                                            </TableCell>
                                            <TableCell>
                                                <select>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                    <option value=""></option>
                                                </select>
                                            </TableCell >
                                            <TableCell></TableCell>
                                        </TableRow>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className={index % 2 === 0 ? "table-row-active" : ""}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (

                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>


                                                            );
                                                        })}
                                                        <TableCell key={"actions"} style={{ color: "#919EAB" }} className="actions">

                                                            <KeyRoundedIcon style={{ cursor: "pointer" }} />
                                                            <ModeEditOutlineRoundedIcon style={{ cursor: "pointer" }} onClick={() => setTypeModal("edit")} />
                                                            <CloseIcon style={{ cursor: "pointer" }} onClick={() => setOpenModalDelete(true)} />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>



                    </div>
                </Container>
            </div>

        </>
    )
}

export default ManagerUser