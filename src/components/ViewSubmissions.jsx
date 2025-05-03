import { useState } from 'react'

function ViewSubmissions({ submissions, homeworks }) {
  const [selectedHomeworkId, setSelectedHomeworkId] = useState('')

  // Filter submissions based on the selected homework
  const filteredSubmissions = submissions.filter(
    (submission) => submission.homeworkId === selectedHomeworkId
  )

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fa-solid fa-clipboard-list me-2"></i> Your Submissions
      </h2>
      <div className="mb-4">
        <label htmlFor="homeworkSelect" className="form-label">
          <i className="fa-solid fa-book me-2"></i> Select Homework:
        </label>
        <select
          id="homeworkSelect"
          className="form-select"
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
      </div>
      {filteredSubmissions.length == 0 && selectedHomeworkId ? (
        <p className="text-center text-muted">No submissions found for this homework.</p>
      ) : (
        <div className="row">
          {filteredSubmissions.map((submission) => {
            const homework = homeworks.find((hw) => hw.id == submission.homeworkId)
            return (
              <div className="col-md-6 mb-4" key={submission.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fa-solid fa-book me-2"></i> {homework?.title || 'Unknown'} ({homework?.subject || 'No Subject'})
                    </h5>
                    <p className="card-text">
                      <strong>Your Submission:</strong> {submission.submission}
                    </p>
                    <p className="card-text">
                      <strong>Grade:</strong> {submission.grade || 'Not Graded Yet'}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ViewSubmissions