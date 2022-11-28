import React from 'react'
import TextField from '@mui/material/TextField';
import "./add-work.css"
import CloseIcon from '@mui/icons-material/Close';
import EditorText from '../../EditorText';


const AddWork = ({ showModal }) => {


    return (
        <div className="modal-add d-flex">
            <div className="pop-up-add">
                <div className="title-title-add">
                    <div className="title d-flex">
                        <div className="mini-title">
                            <div className="final-title">
                                Thêm list công việc
                            </div>
                            <div className="close-icon" onClick={() => showModal(false)} style={{ cursor: "pointer" }}>
                                <CloseIcon />
                            </div>
                        </div>

                    </div>
                    <div className="title-title">
                        <div className="title-tit mb-3">
                            Phân Mục Công Việc
                        </div>
                        <select className='w-100 select-form-mui'>
                            <option value="1">A</option>
                        </select>
                    </div>
                    <div className="title-title">
                        <div className="title-tit mb-3">
                            Tiêu đề
                        </div>
                        <TextField id="outlined-basic" variant="outlined" className='w-100' />
                    </div>
                    <div className="title-title">
                        <div className="title-tit mb-3">
                            Đính Kèm Liên Kết
                        </div>
                        <TextField id="outlined-basic" variant="outlined" className='w-100' placeholder='Link file' />
                    </div>
                    <div className="title-title">
                        <div className="title-tit mb-3">
                            Phân Công
                        </div>
                        <select className='w-100 select-form-mui'>
                            <option value="1">A</option>
                        </select>
                    </div>
                    <div className="title-title">
                        <div className="title-tit mb-3">
                            Upload File
                        </div>
                        <input type="file" accept='image/*' />
                        <div className="preview-img">
                            <img src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" className='set-img' alt="" />
                        </div>
                    </div>
                    <div className="input-date">
                    <div className="title-title form-date-here">
                        <div className="title-tit mb-3">
                            Bắt Đầu Ngày
                        </div>
                        <input type="datetime-local" className='w-100 select-form-mui date-form' />
                        </div>
                        <div className="title-title form-date-here">
                        <div className="title-tit mb-3">
                            Kết Thúc Ngày
                        </div>
                        <input type="datetime-local" className='w-100 select-form-mui date-form' />
                    </div>
                    </div>
                    <div className="title-title">
                    <div className="title-tit mb-3">
                            Mô tả
                        </div>
                        <EditorText/>
                    </div>
                </div>
                <div className="button-add d-flex">
                    <button type="button" class="btn btn-primary">Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default AddWork