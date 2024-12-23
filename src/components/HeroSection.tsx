import { ScissorOutlined } from "@ant-design/icons";
import hairdresserImage from "../assets/hairdresser.jpg"; // Correct import of image

const HeroSection = () => {
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align at the start of the section
      });
    }
  };

  return (
    <div
      style={{
        height: "100vh", // Full screen height
        display: "flex", // Flexbox to center content horizontally and vertically
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
          transform: "translateY(-10%)", // Adjust vertical position slightly
          width: "100%",
          maxWidth: "90%", // Prevent overflow on smaller screens
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)", // Responsive font size for Hairdresser title
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
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Responsive font size for paragraph
            marginBottom: "30px",
          }}
        >
          Your perfect hair styling experience awaits.
        </p>
        <button
          onClick={scrollToService}
          style={{
            padding: "clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)", // Responsive padding for button
            backgroundColor: "#4CAF50",
            border: "none",
            borderRadius: "5px",
            color: "white",
            fontSize: "clamp(1.2rem, 3vw, 2rem)", // Responsive font size for button
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
