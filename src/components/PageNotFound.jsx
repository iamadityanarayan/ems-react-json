import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className='bg-dark text-light d-flex flex-column justify-content-center align-items-center min-vh-100'>
      <h1 className='text-uppercase text-danger mb-4'>Page Not Found</h1>
      <Link className='rounded-pill btn btn-primary btn-lg' to='/' variant="primary" size='lg' >
        Go To Home Page
      </Link>
    </div>
  )
}
