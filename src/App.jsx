import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HomeworkForm from './components/HomeworkForm'
import SubmissionForm from './components/SubmissionForm'
import Grading from './components/Grading'
import Analysis from './components/Analysis'
import ViewSubmissions from './components/ViewSubmissions'
import './App.css'

function App() {
  const [homeworks, setHomeworks] = useState(() => {
    const savedHomeworks = localStorage.getItem('homeworks')
    return savedHomeworks ? JSON.parse(savedHomeworks) : []
  })

  const [submissions, setSubmissions] = useState(() => {
    const savedSubmissions = localStorage.getItem('submissions')
    return savedSubmissions ? JSON.parse(savedSubmissions) : []
  })

  // Persist homeworks and submissions to localStorage
  useEffect(() => {
    localStorage.setItem('homeworks', JSON.stringify(homeworks))
  }, [homeworks])

  useEffect(() => {
    localStorage.setItem('submissions', JSON.stringify(submissions))
  }, [submissions])

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Teacher Section */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route
            path="homework"
            element={<HomeworkForm setHomeworks={setHomeworks} />}
          />
          <Route
            path="grade"
            element={
              <Grading
                homeworks={homeworks}
                submissions={submissions}
                setSubmissions={setSubmissions} // Pass setSubmissions to allow grade updates
              />
            }
          />
          <Route
            path="analysis"
            element={<Analysis submissions={submissions} />}
          />
        </Route>

        {/* Student Section */}
        <Route path="/student" element={<StudentLayout />}>
          <Route
            path="submit"
            element={
              <SubmissionForm
                homeworks={homeworks}
                setSubmissions={setSubmissions}
              />
            }
          />
          <Route
            path="view"
            element={<ViewSubmissions submissions={submissions} homeworks={homeworks} />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

function TeacherLayout() {
  return (
    <div>
      <nav>
        <Link to="/teacher/homework">Define Homework</Link> | 
        <Link to="/teacher/grade">Grade Submissions</Link> | 
        <Link to="/teacher/analysis">Analysis</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function StudentLayout() {
  return (
    <div>
      <nav>
        <Link to="/student/submit">Submit Homework</Link> | 
        <Link to="/student/view">View Submissions</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App