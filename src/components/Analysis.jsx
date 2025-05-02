function Analysis({ submissions }) {
  if (submissions.length === 0) return <p>No submissions to analyze.</p>

  return (
    <div>
      <h2>Analysis</h2>
      <p>Total Submissions: {submissions.length}</p>
      {/* Add more analysis logic here */}
    </div>
  )
}

export default Analysis