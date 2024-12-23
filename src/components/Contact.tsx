import { TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        background: 'rgba(248, 240, 255, 0.97)', // light background
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Have Questions? Contact Us!
        </h2>
        <form
          style={{
            width: "80%",
            maxWidth: "600px", // Restrict form width for large screens
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
          }}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            style={{
              marginBottom: "10px",
            }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            required
            style={{
              marginBottom: "10px",
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            placeholder="Write your message here..."
            style={{
              marginBottom: "10px",
            }}
          />
          <Button
            variant="outlined"
            color="primary"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive button text size
              padding: "8px 16px",
              alignSelf: "center",
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
