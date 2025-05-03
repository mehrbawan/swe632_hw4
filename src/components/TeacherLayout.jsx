import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TeacherLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    {/* Logo with Icon */}
                    <Link className="navbar-brand d-flex align-items-center text-white" to="/teacher">
                        <i className="fa-solid fa-chalkboard-user me-2"></i>
                        Teacher Portal
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/teacher/homework">
                                    <i className="fa-solid fa-book me-2 text-white"></i>
                                    Define Homework
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/teacher/grade">
                                    <i className="fa-solid fa-clipboard-check me-2 text-white"></i>
                                    Grade Submissions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/teacher/analysis">
                                    <i className="fa-solid fa-chart-line me-2 text-white"></i>
                                    Analysis
                                </Link>
                            </li>
                        </ul>
                        <Link className="nav-link text-white d-flex align-items-center" to="/">
                            <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <div className="row mt-4">
                    <div className="col">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                                    alt="Profile"
                                    style={{ height: '70px' }}
                                />
                            </div>
                            <div className="col-6">
                                <h2>Professor XYZ</h2>
                                <p>ID: 321847</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h2>
                            <i className="fa-solid fa-school me-3"></i>Welcome to the Teacher Portal!
                        </h2>
                        <p>Manage homework assignments, grade submissions, and analyze student performance.</p>
                    </div>
                </div>
                <hr className="solid"></hr>
                <Outlet />
                <div className="row text-center mt-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-success text-white">Recent Activity</div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>New Assignment Created:</strong> History Essay on February 7, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <strong>New Submission:</strong> John Doe for Math Assignment 1 on February 5, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <strong>New Submission:</strong> Jane Smith for Science Project on February 6, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#">More Activity &gt;&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-success text-white">Reminders</div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Upcoming Deadline:</strong> Math Assignment 1 due on February 10, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Upcoming Deadline:</strong> History Assignment 1 due on February 22, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <strong>System Reminder:</strong> Semester grades due on March 15, 2025.
                                    </li>
                                    <li className="list-group-item">
                                        <a href="#">More Reminders &gt;&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-md-12">
                        <h3>Calendar</h3>
                        <table className="table table-bordered">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th className="bg-success text-white">Sun</th>
                                    <th className="bg-success text-white">Mon</th>
                                    <th className="bg-success text-white">Tue</th>
                                    <th className="bg-success text-white">Wed</th>
                                    <th className="bg-success text-white">Thu</th>
                                    <th className="bg-success text-white">Fri</th>
                                    <th className="bg-success text-white">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-light"></td>
                                    <td className="bg-light"></td>
                                    <td className="bg-light">1</td>
                                    <td className="bg-light">2</td>
                                    <td className="bg-light">3</td>
                                    <td className="bg-light">4</td>
                                    <td className="bg-light">5</td>
                                </tr>
                                <tr>
                                    <td className="bg-light">6</td>
                                    <td className="bg-light">7</td>
                                    <td className="bg-light">8</td>
                                    <td className="bg-light">9</td>
                                    <td className="bg-warning">10</td>
                                    <td className="bg-light">11</td>
                                    <td className="bg-light">12</td>
                                </tr>
                                <tr>
                                    <td className="bg-light">13</td>
                                    <td className="bg-light">14</td>
                                    <td className="bg-light">15</td>
                                    <td className="bg-light">16</td>
                                    <td className="bg-light">17</td>
                                    <td className="bg-light">18</td>
                                    <td className="bg-light">19</td>
                                </tr>
                                <tr>
                                    <td className="bg-light">20</td>
                                    <td className="bg-light">21</td>
                                    <td className="bg-warning">22</td>
                                    <td className="bg-light">23</td>
                                    <td className="bg-success">24</td>
                                    <td className="bg-light">25</td>
                                    <td className="bg-light">26</td>
                                </tr>
                                <tr>
                                    <td className="bg-light">27</td>
                                    <td className="bg-light">28</td>
                                    <td className="bg-light">29</td>
                                    <td className="bg-light">30</td>
                                    <td className="bg-light">31</td>
                                    <td className="bg-light"></td>
                                    <td className="bg-light"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherLayout;