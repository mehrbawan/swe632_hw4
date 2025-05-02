import { useState } from 'react'

function SubmissionForm({ homeworks, setSubmissions }) {
  const [studentName, setStudentName] = useState('')
  const [submission, setSubmission] = useState('')
  const [homeworkId, setHomeworkId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSubmission = {
      id: Date.now(),
      studentName,
      submission,
      homeworkId, // Ensure this matches a homework ID
      grade: null, // Grade field added, initially null
    }
    setSubmissions((prev) => [...prev, newSubmission])
    alert('Submission received!')
    setStudentName('')
    setSubmission('')
    setHomeworkId('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Homework</h2>
      <label>
        Select Homework:
        <select
          value={homeworkId}
          onChange={(e) => setHomeworkId(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Select Homework --
          </option>
          {homeworks.map((hw) => (
            <option key={hw.id} value={hw.id}>
              {hw.title} ({hw.subject})
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Submission:
        <textarea
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SubmissionForm