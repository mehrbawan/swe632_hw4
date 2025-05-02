import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <h2>Define Homework</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Grading Criteria:
        <textarea
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Save Homework</button>
    </form>
  )
}

export default HomeworkForm