import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <img src="./assets/Microsoft-Logo.wine.png" alt="Microsoft Logo" className="logo" />
        <h1>Microsoft Fabric Dashboard</h1>
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <p>&copy; 2024 Microsoft. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;

