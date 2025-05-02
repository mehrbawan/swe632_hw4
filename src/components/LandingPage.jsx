import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Homework Grader</h1>
      <p>Select an option to proceed:</p>
      <div>
        <Link to="/teacher">Teacher Section</Link>
      </div>
      <div>
        <Link to="/student">Student Section</Link>
      </div>
    </div>
  )
}

export default LandingPage