import React from 'react'
import { Button, Table } from 'react-bootstrap'

const BookList = () => {
  return (
    <>
        <div className='mb-2'>
            <Button variant='dark edit'>Refresh List</Button>
        </div>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Boook Title</th>
                    <th>Boock Author</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    </>
  )
}

export default BookList