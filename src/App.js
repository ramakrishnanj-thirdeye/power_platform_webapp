import React from "react";
import "./App.css";
import logoLeft from "./assets/logo1.png"; // Left logo
import logoRight from "./assets/logo.png"; // Right logo
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const pages = [
    { id: 1, label: "Enhance HR Activity", link: "https://regale.cloud/thirdeye-data/play/3794/power-platform-employee-onboarding-user#/0/0" },
    { id: 2, label: "Improve Efficiency In IT", link: "https://regale.cloud/thirdeye-data/play/3773/power-platform-improve-efficiencies-in-it#/0/0" },
    { id: 3, label: "Data Security", link: "https://regale.cloud/thirdeye-data/play/3774/power-platform-data-security-and-privacy-user-end#/0/0" },
    { id: 4, label: "M365 License Assignment", link: "https://regale.cloud/thirdeye-data/play/3792/power-platform-m365-licence-assignment-maker#/0/0" },
    { id: 5, label: "Copilot Studio", link: "https://regale.cloud/thirdeye-data/play/3777/power-platform-copilot-studio-maker#/0/0" },
    { id: 6, label: "Employee Welcome Site", link: "https://regale.cloud/thirdeye-data/play/3788/power-platform-employee-welcome-site-power-page-maker#/0/0" },
    { id: 7, label: "Reduce Cost Risk", link: "https://regale.cloud/thirdeye-data/play/3776/power-platform-reduce-cost-and-risk-maker#/0/0" },
  ];

  const videos = [
    { id: 1, label: "User Video", link: "https://stdemoassets.blob.core.windows.net/videos/L50/1.%20Microsoft%20Power%20Platform%20-%20L50%20Demo%20for%20User.mp4" },
    { id: 2, label: "Copilot in Power Automate Video", link: "https://stdemoassets.blob.core.windows.net/videos/L50/2.%20Microsoft%20Power%20Platform%20-%20Demo%201a%20-%20Copilot%20in%20Power%20Automate.mp4" },
    { id: 3, label: "Copilot Studio Video", link: "https://stdemoassets.blob.core.windows.net/videos/L50/3.%20Microsoft%20Power%20Platform%20-%20Demo%201b%20-%20Copilot%20Studio.mp4" },
    { id: 4, label: "Copilot Power Pages Video", link: "https://stdemoassets.blob.core.windows.net/videos/L50/4.%20Microsoft%20Power%20Platform%20-%20Demo%201c%20-%20Copilot%20in%20Power%20Pages.mp4" },
    { id: 5, label: "Finale Video", link: "https://stdemoassets.blob.core.windows.net/videos/L50/5.%20Microsoft%20Power%20Platform-%20L50%20Finale%20Video.mp4" },
  ];

  return (
    <div className="app">
      <header className="header-container">
        <div className="logo-container">
          <img src={logoLeft} alt="Left Logo" className="logo" />
          <img src={logoRight} alt="Right Logo" className="logo" />
        </div>
        <h1 className="heading">Innovate with AI in Low Code</h1>
      </header>

      {/* Card container for pages */}
      <div className="container card-container px-4">
        <h2 className="section-heading">Click By Click</h2>
        <div className="row">
          {pages.map((page) => (
            <div key={page.id} className="col-12 col-md-4 mb-4 px-4">
              <a
                href={page.link}
                rel="noopener noreferrer"
                className="card-link"
              >
                <div className="grid-item">{page.label}</div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer between containers */}
      <div style={{ height: "20px" }}></div>

      {/* Card container for video links */}
      <div className="container card-container px-4">
        <h2 className="section-heading">Videos</h2>
        <div className="row">
          {videos.map((video) => (
            <div key={video.id} className="col-12 col-md-4 mb-4 px-4">
              <a
                href={video.link}
                rel="noopener noreferrer"
                className="card-link"
              >
                <div className="grid-item">{video.label}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
