import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Header from '../Header/Header'
import AddWork from '../ui/AddWork/AddWork'
import MemberTable from '../ui/MemberTable/MemberTable'
import ModalDelete from '../ui/ModalDelete/ModalDelete'
import Profile from '../ui/Profile/Profile'
import TableContent from '../ui/TableContent/TableContent'



const Home = () => {
    const [showMemberTable, setShowMemberTable] = useState(false)
    const [showModalMember, setShowModalMember] = useState(false)
   
    const handleShowMembers = () => {
        setShowMemberTable((prev) => !prev)
    }
    return (
        <>
            {showModalMember && <ModalDelete title="Bạn có chắc muốn xóa thành viên này không?" showModal={setShowModalMember} />}
            <Header />
            <Container fluid className='mt-5'>
                <Row>
                    <TableContent showMembers={handleShowMembers} />
                    <MemberTable showModal={setShowModalMember} />
                    <Profile />
                </Row>
            </Container>
        </>
    )
}

export default Home