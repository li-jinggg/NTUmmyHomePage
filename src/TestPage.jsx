import React from "react";
import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#22c55e" }}>🎉 Success!</h1>
      <p style={{ fontSize: "18px" }}>
        The Discover button link and React Router navigation are working correctly!
      </p>
      <Link 
        to="/" 
        style={{ 
          display: "inline-block", 
          marginTop: "20px", 
          padding: "10px 20px", 
          backgroundColor: "#2563eb", 
          color: "#fff", 
          borderRadius: "6px", 
          textDecoration: "none" 
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
