import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MyMap = () => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Ensure the API key is set properly, fallback to an empty string if it's undefined
  if (!googleMapsApiKey) {
    console.error("Google Maps API key is missing or undefined.");
    return <div>Error: Google Maps API key is missing!</div>;
  }

  // Define the center of the map (San Francisco)
  const mapCenter = { lat: 37.7749, lng: -122.4194 };

  // Default style for larger screens
  const mapContainerStyle = {
    width: "50%", // Default width for larger screens
    height: "50%", // Default height for larger screens
    margin: "0 auto", // Center the map horizontally
  };

  // Style for the container that holds the map
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // Center map horizontally
    alignItems: "center", // Center map vertically
    height: "100vh", // Full height of the location section
    marginTop: "10px", // Add small margin between heading and map
  };

  // For small screens, set to 100% width and height
  const mobileMapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          marginBottom: "10px", // Decrease bottom margin to bring the heading closer
        }}
      >
        Here is where you can find us
      </h2>
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={
              window.innerWidth <= 768
                ? mobileMapContainerStyle // Apply style for small screens
                : mapContainerStyle // Apply default style for larger screens
            }
            center={mapCenter}
            zoom={12}
          >
            <Marker position={mapCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MyMap;
