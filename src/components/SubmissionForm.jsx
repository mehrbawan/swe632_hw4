import { useState } from 'react'

function SubmissionForm({ homeworks, setSubmissions }) {
  const [submission, setSubmission] = useState('')
  const [homeworkId, setHomeworkId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSubmission = {
      id: Date.now(),
      submission,
      homeworkId, // Ensure this matches a homework ID
      grade: null, // Grade field added, initially null
    }
    setSubmissions((prev) => [...prev, newSubmission])
    alert('Submission received!')
    setSubmission('')
    setHomeworkId('')
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fa-solid fa-file-arrow-up me-2"></i> Submit Homework
      </h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="homeworkSelect" className="form-label">
            <i className="fa-solid fa-book me-2"></i> Select Homework:
          </label>
          <select
            id="homeworkSelect"
            className="form-select"
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
        </div>
        <div className="mb-3">
          <label htmlFor="submission" className="form-label">
            <i className="fa-solid fa-file-lines me-2"></i> Submission:
          </label>
          <textarea
            id="submission"
            className="form-control"
            rows="4"
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            required
          ></textarea>
        </div>
        <label htmlFor="fileUpload" className="form-label">
             OR Upload Assignment File:
          </label>
          <input
            type="file"
            id="fileUpload"
            className="form-control mb-4"
            disabled
          />
        <button type="submit" className="btn btn-primary w-100">
          <i className="fa-solid fa-paper-plane me-2"></i> Submit
        </button>
      </form>
    </div>
  )
}

export default SubmissionForm