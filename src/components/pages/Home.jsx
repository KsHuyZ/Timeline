import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import MemberTable from '../ui/MemberTable/MemberTable'
import Profile from '../ui/Profile/Profile'
import TableContent from '../ui/TableContent/TableContent'

const Home = () => {
    const [showMemberTable, setShowMemberTable] = useState(false)
    const handleShowMembers = () => {
        setShowMemberTable((prev) => !prev)
    }
    return (
        <Container fluid className='mt-5'>
            <Row>
                <TableContent showMembers={handleShowMembers} />
                <MemberTable />
                <Profile />
            </Row>
        </Container>
    )
}

export default Home