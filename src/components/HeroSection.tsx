import { ScissorOutlined } from '@ant-design/icons';
import hairdresserImage from '../assets/hairdresser.avif'; // Correct import of image

const HeroSection = () => {
  return (
    <div
      style={{
        height: '100vh', // Full screen height
        display: 'flex', // Flexbox to center content
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        flexDirection: 'column', // Stack elements vertically
        textAlign: 'center', // Center align text
        backgroundImage: `url(${hairdresserImage})`, // Background image
        backgroundSize: 'cover', // Ensure image covers the full container
        backgroundPosition: 'center', // Center the image
        color: 'white', // Text color white for visibility
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Hairdresser <ScissorOutlined />
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
        Your perfect hair styling experience awaits.
      </p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default HeroSection;
