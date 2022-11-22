import React from 'react'
import "./add-user.css"
import profile from '../../../assets/profile.png'
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const AddUser = ({ type, setType }) => {
    const [value, setValue] = React.useState(dayjs(Date.now()));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="modal-add-user">
            <div className="pop-up-add d-flex">
                <div className="title">
                    Thông tin cá nhân
                </div>
                <div className="form-add-user d-flex">
                    <div className="form-avt d-flex text-center">
                        <div className="image-avt">
                            <img src={profile} alt="" />
                        </div>
                        <div className="support d-flex">
                            <div className="support-file">
                                *jeg,*jpg,*png
                            </div>
                            <div className="support-size">
                                Kích thước tối đa 4 MB
                            </div>
                        </div>
                    </div>
                    <div className="form-type">
                        <div className="form-input d-flex">
                            <div className="name-position d-flex">
                                <TextField id="outlined-basic" label="Họ và tên" variant="outlined" />
                                <TextField id="outlined-basic" label="Chức vụ" variant="outlined" />
                            </div>
                            <div className="email-birthday d-flex">
                                <TextField id="outlined-basic" label="Email" variant="outlined" className='w-100' />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="Date desktop"
                                        inputFormat="MM/DD/YYYY"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="gender-form">
                            <FormControl className='flex-row align-items-center w-100 radio-form'>
                                <FormLabel id="demo-row-radio-buttons-group-label" >Giới tính:</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    style={{ marginLeft: 10 }}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Nam" checked />
                                    <FormControlLabel value="male" control={<Radio />} label="Nữ" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="submit-btns d-flex align-items-center" style={{ marginTop: 20, justifyContent: 'end' }}>
                    <div className="exit" style={{ marginRight: 30, color: "#919EAB", cursor: 'pointer' }} onClick={() => setType()}>
                        Hủy bỏ
                    </div>
                    <div className="add">
                        <button type="button" class="btn btn-primary">{type === "add" ? "Thêm mới" : "Lưu lại"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser