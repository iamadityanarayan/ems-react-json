import axios from 'axios';

const employeeURL = 'http://localhost:5000/employees'

export async function getEmployees(id) {
  id = id || ''
  return await axios.get(`${employeeURL}/${id}`)
}

export const addEmployee = async (employee) => {
  return await axios.post(employeeURL, employee)
}

export const editEmployee = async (id, employee) => {
  return await axios.put(`${employeeURL}/${id}`, employee)
}

export const deleteEmployee = async (id) => {
  return await axios.delete(`${employeeURL}/${id}`)
}

