import React from 'react'
import TextField from '@mui/material/TextField';
import "./add-work.css"
import CloseIcon from '@mui/icons-material/Close';
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
                            Tiêu đề
                        </div>
                        <TextField id="outlined-basic" label="Tên tiêu đề" variant="outlined" className='w-100' />
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