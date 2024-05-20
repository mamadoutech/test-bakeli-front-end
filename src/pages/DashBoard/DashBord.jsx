import { Link, useNavigate } from "react-router-dom";
import "./DashBoard.css";

export default function DashBoard(props) {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    props.handleLogOut();
    navigate("/auth/connexion");
  }
  return (
    <div className="dash-container">
      <div className="wrapper">
        <div className="sub-container">
          <div className="side-bar">
            <h3 className="dashboard">
              <span className="svg">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
              </span>
              <span className="dashbord-heading">DASHBOARD</span>
            </h3>
            <ul className="side-bar-unordonate-list">
              <li>
                <span>
                  <img
                    className="home"
                    src="/img/home-icon-silhouette-svgrepo-com.svg"
                  />
                </span>
                <span>Home</span>
              </li>
              <li>
                <span>
                  <img
                    className="profile"
                    src="/img/profile-icon-png-908.png"
                  />
                </span>
                <span>Profile</span>
              </li>
              <li>
                <span>
                  <img src="/img/wallet-svgrepo-com.svg" className="wallet" />
                </span>
                <span>Wallet</span>
              </li>
              <li>
                <span>
                  <img
                    src="/img/chart-removebg-preview.png"
                    className="chart"
                  />
                </span>
                <span>Aanalytics</span>
              </li>
              <li>
                <span>
                  <img src="/img/tasks.png" className="task" />
                </span>
                <Link className="task-link" to="/task">
                  <span>Tasks</span>
                </Link>
              </li>
              <li>
                <span>
                  <img
                    className="setting"
                    src="/img/Settings-icon-symbol-vector.png"
                  />
                </span>
                <span>Settings</span>
              </li>
              <li>
                <span>
                  <img
                    src="/img/kisspng-question-mark-computer-icons-button-font-awesome-cross-5b4b913635b172.4904670615316790302199.png"
                    className="question"
                  />
                </span>
                <span>Help</span>
              </li>
            </ul>
            <div className="logout" onClick={handleClick}>
              <span>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                  />
                </svg>
              </span>
              <span>Log out</span>
            </div>
          </div>
          <div className="main">
            <div className="main-top">
              <div className="main-top-nav">
                <h2>Skills</h2>
                <span>
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <ul className="skills-ul">
                <li>
                  <span>
                    <img
                      className="laptop"
                      src="/img/64px-Font_Awesome_5_solid_laptop-code.svg.png"
                    />
                  </span>
                  <h4>Web Developemt</h4>
                  <p>Join over 1 million Students.</p>
                  <button>Get Started</button>
                </li>
                <li>
                  <span>
                    <img
                      className="wordpress"
                      src="/img/32px-Wordpress-Logo.svg.png"
                    />
                  </span>
                  <h4>WordPress</h4>
                  <p>Join over 3 million Students.</p>
                  <button>Get Started</button>
                </li>
                <li>
                  <span>
                    <img className="paint" src="/img\2026954.png" />
                  </span>
                  <h4>Graphic Design</h4>
                  <p>Join over 2 million Students.</p>
                  <button>Get Started</button>
                </li>
                <li>
                  <span>
                    <img className="ios" src="/img/apple-app-store-icon.png" />
                  </span>
                  <h4>IOS Dev</h4>
                  <p>Join over 1 million Students.</p>
                  <button>Get Started</button>
                </li>
              </ul>
            </div>
            <div className="main-bottom">
              <h3>My Courses</h3>
              <div className="main-bottom-sub-container">
                <ul className="tech-heading">
                  <li>In Progress</li>
                  <li>Explore</li>
                  <li>incoming</li>
                  <li>Finished</li>
                </ul>
                <div className="technologies">
                  <div className="html">
                    <h4>HTML</h4>
                    <div className="sub-html">
                      <div className="progres-btn">
                        <div>
                          <p>80% - Progress</p>
                        </div>
                        <button>Continue</button>
                      </div>
                      <img
                        className="html-img"
                        src="/img/Screenshot_2024-05-18_081614-removebg-preview.png"
                      />
                    </div>
                  </div>
                  <div className="css">
                    <h4>CSS</h4>
                    <div className="sub-css">
                      <div className="progres-btn progres-btn-css">
                        <div>
                          <p>50% - Progress</p>
                        </div>
                        <button>Continue</button>
                      </div>
                      <img
                        className="css-img"
                        src="/img/output-onlinepngtools.png"
                      />
                    </div>
                  </div>
                  <div className="javascript">
                    <h4>Javascript</h4>
                    <div className="sub-javascript">
                      <div className="progres-btn progres-btn-js">
                        <div>
                          <p>30% - Progress</p>
                        </div>
                        <button>Continue</button>
                      </div>
                      <img
                        className="javascript-img"
                        src="/img/javascript-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
