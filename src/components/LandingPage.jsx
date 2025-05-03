import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function LandingPage() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
      <h1 className="display-4 fw-bold"><i class="fa-solid fa-school-flag text-warning"></i></h1>
      <h1 className="display-4 fw-bold">Homework Portal</h1>
      <p className="lead">Please Select an option below to log in.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="fa-solid fa-chalkboard-user fa-3x text-primary"></i>
              </div>
              <h5 className="card-title fw-bold">Teacher</h5>
              <p className="card-text">Manage homework, grade submissions, and analyze results.</p>
              <Link to="/teacher" className="btn btn-primary w-100">
                Teacher Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="fa-solid fa-user-graduate fa-3x text-success"></i>
              </div>
              <h5 className="card-title fw-bold">Student</h5>
              <p className="card-text">View assignments, submit homework, and check grades.</p>
              <Link to="/student" className="btn btn-success w-100">
                Student Login
              </Link>
            </div>
          </div>
        </div>
        <footer className="d-flex justify-content-between align-items-center mt-5 mt-5 pt-3 border-top">
        <div className="text-muted">&copy; 2002-2025 School Inc. All Rights Reserved.</div>
        <div>
          <a href="#" className="text-muted me-3">
            Help
          </a>
          <a href="#" className="text-muted me-3">
            Privacy
          </a>
          <a href="#" className="text-muted me-3">
            Terms of Use
          </a>
          <a href="#" className="text-muted">
            Accessibility
          </a>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default LandingPage