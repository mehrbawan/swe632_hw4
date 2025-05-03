import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HomeworkForm from './components/HomeworkForm'
import SubmissionForm from './components/SubmissionForm'
import Grading from './components/Grading'
import Analysis from './components/Analysis'
import ViewSubmissions from './components/ViewSubmissions'
import TeacherLayout from './components/TeacherLayout'
import StudentLayout from './components/StudentLayout'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
                setSubmissions={setSubmissions}
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

export default App