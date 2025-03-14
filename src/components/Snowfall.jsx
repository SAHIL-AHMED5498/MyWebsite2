import React, { useEffect } from "react";

const Snowfall = () => {
  useEffect(() => {
    let snowfallActive = true; // Flag to control snowfall

    function createSnowflake() {
      if (!snowfallActive) return; // Stop snowfall after timeout

      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = "❄";

      document.body.appendChild(snowflake);

      const size = Math.random() * 15 + 5;
      const startX = Math.random() * window.innerWidth;

      snowflake.style.left = `${startX}px`;
      snowflake.style.fontSize = `${size}px`;
      snowflake.style.color = "#ADD8E6"; // Light blue color
      snowflake.style.animation = `fall ${Math.random() * 5 + 2}s linear`;

      // Remove after 5 seconds with fade-out effect
      setTimeout(() => {
        snowflake.style.opacity = "0"; // Start fade-out
        setTimeout(() => {
          snowflake.remove(); // Remove after fade-out
        }, 1000);
      }, 4000);
    }

    function startSnowfall() {
      for (let i = 0; i < 10; i++) {
        setTimeout(createSnowflake, i * 200);
      }
    }

    startSnowfall();
    const interval = setInterval(startSnowfall, 3000);

    // Stop snowfall after 10 seconds
    setTimeout(() => {
      snowfallActive = false;
      clearInterval(interval);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

// Add CSS for animation
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0.8; }
  }
  
  .snowflake {
    position: absolute;
    top: 0;
    pointer-events: none;
    user-select: none;
    transition: opacity 1s ease-in-out;
  }
`;
document.head.appendChild(style);

export default Snowfall;
