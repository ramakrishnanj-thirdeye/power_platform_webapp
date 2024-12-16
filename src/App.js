import React from "react";
import "./App.css";
import logoLeft from "./assets/logo1.png"; // Left logo
import logoRight from "./assets/logo.png"; // Right logo
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const pages = [
    { id: 1, label: "Data Integration via Dataflows", link: " https://regale.cloud/thirdeye-data/play/3874/power-platform-for-pro-devs-data-pool-through-dataflows#/0/0" },
    { id: 2, label: "HR Workflows via Automate Flow", link: "https://regale.cloud/thirdeye-data/play/3875/power-platform-for-pro-devs-data-pool-through-automate-flows#/0/0 " },
    { id: 3, label: "LOB Modernization HR App", link: "https://regale.cloud/thirdeye-data/play/3888/power-platform-for-pro-devs-lob-modernization-hr-app#/0/0" },
    { id: 4, label: "Application Lifecycle Management", link: "https://regale.cloud/thirdeye-data/play/3873/power-platform-for-pro-devs-alm-processes-for-enterprise-apps#/0/0 " },
    { id: 5, label: "Customizations", link: "https://regale.cloud/thirdeye-data/play/3869/power-platform-for-pro-devs-supplier-portal-customization#/0/0" },
    { id: 6, label: "AI Builder", link: "https://regale.cloud/thirdeye-data/play/3824/power-platform-accelerate-innovation-with-ai-in-low-code-supplier-portal-invoice#/0/0" },
    { id: 7, label: "Verification of Cancelled Checks", link: "https://regale.cloud/thirdeye-data/play/3872/power-platform-for-pro-devs-cancelled-checks-bank-account-verification#/0/0" },
    { id: 8, label: "HR Performance Insights", link: "https://regale.cloud/thirdeye-data/play/3870/power-platform-for-pro-devs-hr-performance-review-insights-from-scores-and-manag#/0/0 " },
    { id: 9, label: "Sentiment Analysis", link: "https://regale.cloud/thirdeye-data/play/3871/power-platform-for-pro-devs-sentiment-analysis-for-employee-performance-scoring#/0/0" },

  
  ];

  const videos = [
    { id: 1, label: "Data Flows and Power Automate", link: "https://stdemoassets.blob.core.windows.net/videos/L400/1.%20Dataflows%20and%20Power%20Automate.mp4" },
    { id: 2, label: "LOB Modernization App", link: "https://stdemoassets.blob.core.windows.net/videos/L400/2.%20LOB%20App%20modernization.mp4" },
    { id: 3, label: "App Lifecycle Management", link: "https://stdemoassets.blob.core.windows.net/videos/L400/3.%20ALM+ADO.mp4" },
    { id: 4, label: "Customizations", link: "https://stdemoassets.blob.core.windows.net/videos/L400/4.%20Customization%20App%20+%20Data%20video.mp4" },
    { id: 5, label: "AI Builder", link: "https://stdemoassets.blob.core.windows.net/videos/L400/5%20AI-Builder-%20Invoice%20processing.mp4" },
    { id: 6, label: "Cancelled Checks Verification", link: "https://stdemoassets.blob.core.windows.net/videos/L400/6.%20AI%20Builder-%20Cancelled%20Check%20processing.mp4" },
    { id: 7, label: "Performance Scoring", link: "https://stdemoassets.blob.core.windows.net/videos/L400/7.%20AI%20prompt%20sentiment%20analysis%20and%20performance%20scoring.mp4" },
    { id: 8, label: "Sales Video", link: "https://stdemoassets.blob.core.windows.net/videos/L400/8.%20Sales%20video.mp4" },
    { id: 9, label: "Finale Video", link: "https://stdemoassets.blob.core.windows.net/videos/L400/9.%20Finale%20video.mp4" },
  ];

  return (
    <div className="app">
      <header className="header-container">
        <div className="logo-container">
          <img src={logoLeft} alt="Left Logo" className="logo" />
          <img src={logoRight} alt="Right Logo" className="logo" />
        </div>
        <h1 className="heading">Power Platform for Pro Devs</h1>
      </header>

      {/* Card container for pages */}
      <div className="container card-container px-4 ">
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
      <div style={{ height: "10px" }}></div>

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
