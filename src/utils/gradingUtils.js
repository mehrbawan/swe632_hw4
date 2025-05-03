function handleGradeChange(submissions, id, grade) {
  return submissions.map((submission) =>
    submission.id === id ? { ...submission, grade } : submission
  );
}

function handleAutoGrade(submissions, selectedHomeworkId) {
  return submissions.map((submission) =>
    submission.homeworkId === selectedHomeworkId
      ? { ...submission, grade: Math.floor(Math.random() * 51) + 50 } // Random grade between 50-100
      : submission
  );
}

module.exports = { handleGradeChange, handleAutoGrade };