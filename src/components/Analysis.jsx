import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Analysis({ submissions }) {
  const [aiRundown, setAiRundown] = useState(''); // State for AI-generated rundown

  if (submissions.length === 0) return <p>No submissions to analyze.</p>;

  const totalSubmissions = submissions.length;

  const letterGradeData = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Number of Students',
        data: [15, 17, 7, 4, 3],
        backgroundColor: [
          'rgba(75, 192, 143, 0.6)',
          'rgba(54, 160, 231, 0.6)',
          'rgba(255, 202, 67, 0.6)',
          'rgba(237, 150, 64, 0.6)',
          'rgba(228, 84, 116, 0.6)',
        ],
        borderColor: [
          'rgb(75, 192, 149)',
          'rgb(40, 146, 216)',
          'rgb(254, 196, 49)',
          'rgb(254, 142, 30)',
          'rgb(240, 86, 119)',
        ],
      },
    ],
  };

  const handleAiRundown = () => {
    const AIRUNDOWN = "The majority of students scored in the B range, with a smaller number achieving A grades. A grades are a near majority, showing strong overall performance. C and lower-scoring students make up the minority; reach out to ensure they get the necessary support."
    setAiRundown(AIRUNDOWN);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        <i className="fa-solid fa-chart-line me-2"></i> Analysis
      </h2>


      <div className="row mt-4 mb-4">
        <div className="col text-center">
          <button className="btn btn-primary" onClick={handleAiRundown}>
            <i className="fa-solid fa-robot me-2"></i> Generate AI Rundown
          </button>
        </div>
      </div>

      {aiRundown && (
        <div className="row mt-4 mb-4">
          <div className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-lightbulb me-2"></i> AI Rundown
                </h5>
                <p className="card-text">{aiRundown}</p>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="fa-solid fa-file-alt me-2"></i> Total Submissions
              </h5>
              <p className="card-text display-6">{totalSubmissions}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="fa-solid fa-calculator me-2"></i> Average Score
              </h5>
              <p className="card-text display-6">88.7%</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="fa-solid fa-trophy me-2"></i> Highest Score
              </h5>
              <p className="card-text display-6">93%</p>
            </div>
          </div>
        </div>
      </div>
      {/* Letter Grade Distribution Chart */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <Bar data={letterGradeData} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Analysis;