import { Link, Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/student">
          <i class="fa-solid fa-graduation-cap me-2"></i>
            Student Portal
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/submit">
                <i className="fa-solid fa-book me-2  text-white"></i> {/* Book Icon */}
                  Submit Homework
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/student/view">
                <i className="fa-solid fa-clipboard-check me-2 text-white"></i> 
                  View Submissions
                </Link>
              </li>
            </ul>
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
                            <div className="col-6"><h2>John Doe</h2>
                                <p>ID: 234678</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"><h2><i class="fa-solid fa-school me-3"></i>Welcome to the Student Portal!</h2>
                        <p>View homework assignments, submit homework, and view grades.</p>
                    </div>
                </div>
                <hr class="solid"></hr>
                <Outlet />


                <div className="row text-center mt-4">
                    <div className="col">
                        <div class="card">
                            <div class="card-header bg-primary text-white">Recent Activity</div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <strong>New Assignment Assigned:</strong> History Essay on February 7, 2025.
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Submission Received:</strong> Math Assignment 1 on February 5, 2025.
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Submission Received:</strong> Science Project on February 6, 2025.
                                    </li>
                                    <li class="list-group-item">
                                        <a href="#">More Activity &gt;&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="card-header bg-primary text-white">Reminders</div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <strong>Upcoming Deadline:</strong> Math Assignment 1 due on February 10, 2025.
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Teacher Message:</strong> "Review ALL Project guidelines before submission."
                                    </li>
                                    <li class="list-group-item">
                                        <strong>Upcoming Deadline:</strong> History Assignment 1 due on February 22, 2025.
                                    </li>
                                    <li class="list-group-item">
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
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="bg-primary text-white">Sun</th>
                                    <th className="bg-primary text-white">Mon</th>
                                    <th className="bg-primary text-white">Tue</th>
                                    <th className="bg-primary text-white">Wed</th>
                                    <th className="bg-primary text-white">Thu</th>
                                    <th className="bg-primary text-white">Fri</th>
                                    <th className="bg-primary text-white">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-light"></td>
                                    <td className="bg-light"></td>
                                    <td className="bg-danger">1</td>
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
                                    <td className="bg-danger">14</td>
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
                                    <td className="bg-light">24</td>
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
  )
}

export default StudentLayout