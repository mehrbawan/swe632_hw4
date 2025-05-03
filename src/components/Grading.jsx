import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Grading({ homeworks, submissions, setSubmissions }) {
  const [selectedHomeworkId, setSelectedHomeworkId] = useState('');
  const [gradingCriteria, setGradingCriteria] = useState(''); // State for grading criteria

  const filteredSubmissions = submissions.filter(
    (submission) => submission.homeworkId === selectedHomeworkId
  );

  const handleGradeChange = (id, grade) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === id ? { ...submission, grade } : submission
      )
    );
  };

  const handleAutoGrade = () => {
    if (!gradingCriteria) {
      alert('Please enter grading criteria before autograding.');
      return;
    }
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.homeworkId === selectedHomeworkId
          ? { ...submission, grade: Math.floor(Math.random() * 51) + 50 }
          : submission
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fa-solid fa-clipboard-check me-2"></i> Grading Submissions
      </h2>

      <label htmlFor="homeworkSelect" className="form-label">
        <i className="fa-solid fa-book me-2"></i> Select Homework:
      </label>

      <div className="row mb-4">
        <div className="col">
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
        <div className="col">
          <div className="d-flex justify-content-end mb-4">
            <button className="btn btn-success" onClick={handleAutoGrade}>
              <i className="fa-solid fa-wand-magic-sparkles me-2"></i> Autograde with AI
            </button>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <label htmlFor="gradingCriteria" className="form-label">
            <i className="fa-solid fa-pen me-2"></i> AI Grading Criteria:
          </label>
          <input
            type="text"
            id="gradingCriteria"
            className="form-control"
            placeholder="Enter grading criteria here..."
            value={gradingCriteria}
            onChange={(e) => setGradingCriteria(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {filteredSubmissions.map((submission) => (
          <div className="col-md-6 mb-4" key={submission.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-user me-2"></i> {submission.studentName}
                </h5>
                <p className="card-text">
                  <strong>Submission:</strong> {submission.submission}
                </p>
                <div className="mb-3">
                  <label htmlFor={`grade-${submission.id}`} className="form-label">
                    <i className="fa-solid fa-star me-2"></i> Grade:
                  </label>
                  <input
                    type="text"
                    id={`grade-${submission.id}`}
                    className="form-control"
                    value={submission.grade || ''}
                    onChange={(e) => handleGradeChange(submission.id, e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredSubmissions.length === 0 && selectedHomeworkId && (
        <p className="text-center text-muted">No submissions found for this homework.</p>
      )}
    </div>
  );
}

export default Grading;