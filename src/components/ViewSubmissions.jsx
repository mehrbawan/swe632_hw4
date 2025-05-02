function ViewSubmissions({ submissions, homeworks }) {
  return (
    <div>
      <h2>Your Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <ul>
          {submissions.map((submission) => {
            const homework = homeworks.find((hw) => hw.id === submission.homeworkId)
            return (
              <li key={submission.id}>
                <strong>Homework:</strong> {homework?.title || 'Unknown'} ({homework?.subject || 'No Subject'})
                <br />
                <strong>Your Submission:</strong> {submission.submission}
                <br />
                <strong>Grade:</strong> {submission.grade || 'Not Graded Yet'}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ViewSubmissions