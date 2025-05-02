import { useState } from 'react'

function Grading({ homeworks, submissions, setSubmissions }) {
  const [selectedHomeworkId, setSelectedHomeworkId] = useState('')

  const filteredSubmissions = submissions.filter(
    (submission) => submission.homeworkId === selectedHomeworkId
  )

  const handleGradeChange = (id, grade) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === id ? { ...submission, grade } : submission
      )
    )
  }

  return (
    <div>
      <h2>Grading Submissions</h2>
      <label>
        Select Homework:
        <select
          value={selectedHomeworkId}
          onChange={(e) => setSelectedHomeworkId(e.target.value)}
        >
          <option value="">-- Select Homework --</option>
          {homeworks.map((hw) => (
            <option key={hw.id} value={hw.id}>
              {hw.title} ({hw.subject})
            </option>
          ))}
        </select>
      </label>
      <ul>
        {filteredSubmissions.map((submission) => (
          <li key={submission.id}>
            <strong>{submission.studentName}:</strong> {submission.submission}
            <br />
            <label>
              Grade:
              <input
                type="text"
                value={submission.grade || ''}
                onChange={(e) => handleGradeChange(submission.id, e.target.value)}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grading