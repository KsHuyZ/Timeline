import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Department = ({ item, setIsActive, isActive }) => {
    const [btnState, setBtnState] = useState(false)
    let toggleClass = btnState ? "active" : ""

    const handleToggle = () => {
        if (isActive || btnState) {
            console.log("is active:", isActive);
            console.log("btn-state", btnState)
            setBtnState(false)
        } else {
            console.log("is active:", isActive);
            console.log("btn-state", btnState)
            setIsActive(true)
            setBtnState(true)
        }
    }



    return (

        <div className={`department-item d-flex align-items-center ${toggleClass}`} onClick={handleToggle}>
            <div >{item.name}</div>
            <div className="action-icons d-flex">
                <AddIcon />
                <EditOutlinedIcon />
                <DeleteIcon />
            </div>
        </div>
    )
}

export default Department