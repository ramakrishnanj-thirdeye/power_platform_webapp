import React from "react";
import "./App.css";
import logoLeft from "./assets/logo1.png"; // Left logo
import logoRight from "./assets/logo.png"; // Right logo
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const pages = [
    { id: 1, label: "Warehouse App", link: "https://regale.cloud/thirdeye-data/play/3820/power-platform-accelerate-innovation-with-ai-in-low-code-warehouse-app-user#/0/0" },
    { id: 2, label: "Admin App", link: "https://regale.cloud/thirdeye-data/play/3822/power-platform-accelerate-innovation-with-ai-in-low-code-regional-manager-portal#/0/0" },
    { id: 3, label: "App Lifecycle Management", link: "https://regale.cloud/thirdeye-data/play/3832/power-platform-accelerate-innovation-with-ai-in-low-code-alm#/0/0" },
    { id: 4, label: "Supplier Portal", link: "https://regale.cloud/thirdeye-data/play/3833/powerplatform-accelerate-innvoation-with-ai-in-low-code-supplier-portal-power-pa#/0/0" },
    { id: 5, label: "Invoice Processing", link: "https://regale.cloud/thirdeye-data/play/3824/power-platform-accelerate-innovation-with-ai-in-low-code-supplier-portal-invoice#/0/0" },
    { id: 6, label: "Ability to Ask Questions", link: "https://regale.cloud/thirdeye-data/play/3834/power-platform-accelerate-innovation-with-ai-in-low-code-copilot-studio-maker#/0/0" },
    { id: 7, label: "Power Automate", link: "https://regale.cloud/thirdeye-data/play/3823/power-platform-accelerate-innovation-with-ai-in-low-code-power-automate-backend-#/0/0" },
  ];

  const videos = [
    { id: 1, label: "Warehouse App", link: "https://stdemoassets.blob.core.windows.net/videos/L100/1.%20Microsoft%20Power%20Platform%20-%20Warehouse%20Management%20APP.mp4" },
    { id: 2, label: "Admin App", link: "https://stdemoassets.blob.core.windows.net/videos/L100/2.%20Microsoft%20Power%20Platform-Regional%20Manager%20APP.mp4" },
    { id: 3, label: "App Lifecycle Management", link: "https://stdemoassets.blob.core.windows.net/videos/L100/3.%20Microsoft%20Power%20Platform-%20ALM.mp4" },
    { id: 4, label: "Supplier Portal", link: "https://stdemoassets.blob.core.windows.net/videos/L100/4.%20Microsoft%20Power%20Platform-Supplier%20Portal.mp4" },
    { id: 5, label: "Invoice Processing", link: "https://stdemoassets.blob.core.windows.net/videos/L100/5.%20Microsoft%20Power%20Platform-Invoice%20processing.mp4" },
    { id: 6, label: "Ability To Ask Questions", link: "https://stdemoassets.blob.core.windows.net/videos/L100/6.%20Microsoft%20Power%20Platform-Sales%20Video.mp4" },
    { id: 7, label: "Power Automate", link: "https://stdemoassets.blob.core.windows.net/videos/L100/7.%20Microsoft%20Power%20Platform-Finale%20Video.mp4" },
  ];

  return (
    <div className="app">
      <header className="header-container">
        <div className="logo-container">
          <img src={logoLeft} alt="Left Logo" className="logo" />
          <img src={logoRight} alt="Right Logo" className="logo" />
        </div>
        <h1 className="heading">Accelerate Innovations with Low Code</h1>
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
      <div style={{ height: "10px" }}></div>

      {/* Card container for video links */}
      <div className="container card-container px-4 ">
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