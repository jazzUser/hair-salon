import { ScissorOutlined } from "@ant-design/icons";
import hairdresserImage from "../assets/hairdresser.jpg"; // Correct import of image

const HeroSection = () => {
  return (
    <div
      style={{
        height: "100vh", // Full screen height
        display: "flex", // Flexbox to center content horizontally
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        flexDirection: "column", // Stack elements vertically
        textAlign: "center", // Center align text
        backgroundImage: `url(${hairdresserImage})`, // Background image
        backgroundSize: "cover", // Ensure image covers the full container
        backgroundPosition: "center", // Center the image
        color: "white", // Text color white for visibility
      }}
    >
      <div
        style={{
          transform: "translateY(-45%)", // Move content up by 15% of its height, without affecting image
          width: "100%",
          maxWidth: "90%", // Prevent overflow on smaller screens
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)", // Responsive font size for small screens
            marginBottom: "0px",
            whiteSpace: "nowrap", // Prevent breaking into multiple lines for large screens
          }}
        >
          Hairdresser{" "}
          <span style={{ display: "inline" }}>
            <ScissorOutlined />
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 4vw, 2rem)", // Responsive font size for smaller screens
            marginBottom: "30px",
          }}
        >
          Your perfect hair styling experience awaits.
        </p>
        <button
          style={{
            padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)", // Responsive padding for button
            backgroundColor: "#4CAF50",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
            fontFamily: "Times New Roman", // Responsive font size for button
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
