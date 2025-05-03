import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

function HomeworkForm({ setHomeworks }) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [criteria, setCriteria] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newHomework = {
      id: Date.now(), // Unique ID for the homework
      title,
      subject,
      criteria,
    }
    setHomeworks((prev) => [...prev, newHomework])
    alert('Homework defined successfully!')
    setTitle('')
    setSubject('')
    setCriteria('')
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fa-solid fa-book me-2"></i> Define Homework
      </h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <i className="fa-solid fa-heading me-2"></i> Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            className="form-control"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="criteria" className="form-label">
             Grading Criteria:
          </label>
          <textarea
            id="criteria"
            className="form-control"
            rows="4"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="fileUpload" className="form-label">
             Upload Assignment File:
          </label>
          <input
            type="file"
            id="fileUpload"
            className="form-control"
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          <i className="fa-solid fa-save me-2"></i> Save Homework
        </button>
      </form>
    </div>
  )
}

export default HomeworkForm