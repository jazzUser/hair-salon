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
    height: "100%", // Ensure it takes full height of the parent container
    margin: "0 auto", // Center the map horizontally
  };

  // For small screens, set to 100% width and height
  const mobileMapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ensure full height for the container
        width: "100%",
      }}
    >
      {/* Map Header */}
      <h2
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          marginBottom: "20px", // Give some space between the heading and map
        }}
      >
        Here is where you can find us
      </h2>

      {/* Map */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center map horizontally
          alignItems: "center", // Center map vertically
          width: "100%", // Take full width
          height: "80%", // Take a good portion of the height to make the map larger
        }}
      >
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={
              window.innerWidth <= 768
                ? mobileMapContainerStyle
                : mapContainerStyle
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
