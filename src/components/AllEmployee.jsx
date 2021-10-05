import { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { getEmployees, deleteEmployee } from '../Service/api';
import { LinkContainer } from 'react-router-bootstrap';

export default function AllEmployee() {

  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    const response = await getEmployees();
    console.log(response.data);
    setEmployees(response.data)
  }

  const deleteEmployeeData = async (id) => {
    await deleteEmployee(id);
    getAllEmployees()
  }

  useEffect(() => {
    getAllEmployees()
  }, []);

  return (
    <Container>
      <h1 className='mb-5 mt-3'>Employee List</h1>
      <div className="shadow-lg -p4">
        <Table hover size="sm" className='table-borderless shadow rounded'>
          <thead className='table-dark'>
            <tr>
              <th className='text-center'>S. No</th>
              <th>Name</th>
              <th>Email</th>
              <th className='text-center'>Phone Number</th>
              <th className='text-center'>E-ID</th>
              <th className='text-center'>Edit</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee, index) => (
                <tr key={employee.empId}>
                  <td className='text-center'>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td className='text-center'>{employee.phone}</td>
                  <td className='text-center'>{employee.empId}</td>
                  <td className='text-center'>
                    <LinkContainer to={`/edit/${employee.id}`}>
                      <Button variant="primary" size="sm" >Edit</Button>
                    </LinkContainer>
                  </td>
                  <td className='text-center'>
                    <Button variant="danger" size="sm" onClick={() => deleteEmployeeData(employee.id)}>Delete</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </Container >
  )
}
