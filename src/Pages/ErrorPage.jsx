import React from "react";

function ErrorPage() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h3>Page doesn't exist</h3>
      </div>
    </div>
  );
}

export default ErrorPage;
