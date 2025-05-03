const { handleGradeChange, handleAutoGrade } = require('../utils/gradingUtils');

describe('gradingUtils', () => {
  describe('handleGradeChange', () => {
    it('updates the grade of a specific submission', () => {
      const submissions = [
        { id: 1, submission: 'Math Homework', grade: null },
        { id: 2, submission: 'Science Project', grade: null },
      ];

      const updatedSubmissions = handleGradeChange(submissions, 1, 'A');

      expect(updatedSubmissions).toEqual([
        { id: 1, submission: 'Math Homework', grade: 'A' },
        { id: 2, submission: 'Science Project', grade: null },
      ]);
    });

    it('does not modify submissions if the ID is not found', () => {
      const submissions = [
        { id: 1, submission: 'Math Homework', grade: null },
        { id: 2, submission: 'Science Project', grade: null },
      ];

      const updatedSubmissions = handleGradeChange(submissions, 3, 'B');

      expect(updatedSubmissions).toEqual(submissions);
    });
  });

  describe('handleAutoGrade', () => {
    it('assigns random grades between 50 and 100 to submissions with the selected homework ID', () => {
      const submissions = [
        { id: 1, homeworkId: 'hw1', submission: 'Math Homework', grade: null },
        { id: 2, homeworkId: 'hw2', submission: 'Science Project', grade: null },
        { id: 3, homeworkId: 'hw1', submission: 'History Essay', grade: null },
      ];

      const updatedSubmissions = handleAutoGrade(submissions, 'hw1');

      updatedSubmissions.forEach((submission) => {
        if (submission.homeworkId === 'hw1') {
          expect(submission.grade).toBeGreaterThanOrEqual(50);
          expect(submission.grade).toBeLessThanOrEqual(100);
        } else {
          expect(submission.grade).toBeNull();
        }
      });
    });

    it('does not modify grades for submissions with a different homework ID', () => {
      const submissions = [
        { id: 1, homeworkId: 'hw1', submission: 'Math Homework', grade: null },
        { id: 2, homeworkId: 'hw2', submission: 'Science Project', grade: null },
      ];

      const updatedSubmissions = handleAutoGrade(submissions, 'hw3');

      expect(updatedSubmissions).toEqual(submissions);
    });
  });
});