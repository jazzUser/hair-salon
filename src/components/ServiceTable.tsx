import { Paper, Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useState } from "react";

type RowData = {
  id: number;
  type: string;
  time: string;
  price: string;
};

const ServiceTable = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows: RowData[] = [
    { id: 1, type: "Haircut + Washing + Drying", time: "30 min", price: "$25" },
    { id: 2, type: "Haircut + Washing (Drying by yourself)", time: "15 min", price: "$10" },
    { id: 3, type: "Short Hair length - Haircut", time: "90 min", price: "$50" },
    { id: 4, type: "Middle Hair length- Haircut", time: "90 min", price: "$50" },
    { id: 5, type: "Long Hair- Haircut", time: "90 min", price: "$50" },
    { id: 6, type: "Coloring + Washing", time: "20 min", price: "$15" },
    { id: 7, type: "Washing + Styling", time: "20 min", price: "$15" },
  ];

  const handleSelectClick = (id: number) => {
    setSelectedRows([id]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px", // Add padding for smaller screens
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)", // Responsive font size for header
          marginBottom: "20px", // Margin for spacing between title and table
          width: "100%", // Ensure title takes full width for centering
        }}
      >
        Book your desired Service:
      </h2>

      <Paper
        sx={{
          width: "100%", // Full width
          maxWidth: "1000px", // Optional, control maximum width of table
          position: "relative",
          margin: "0 auto", // Center horizontally
          overflowX: "auto", // Enable horizontal scrolling if needed
        }}
      >
        <TableContainer
          style={{
            overflowX: "auto", // Allow horizontal scrolling for smaller screens
            maxWidth: "100%", // Ensure the table fits within the container
            display: "flex", // Use flex for centering the table container
            justifyContent: "center", // Center horizontally
          }}
        >
          <Table aria-label="services table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font size
                      padding: "8px 16px", // Padding to make cells look better on small screens
                    }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font size
                      padding: "8px 16px", // Padding for readability
                    }}
                  >
                    {row.time}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive font size
                      padding: "8px 16px", // Padding for readability
                    }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center", // Center the button
                      padding: "8px 16px", // Padding for better button appearance
                    }}
                  >
                    <Button
                      variant={selectedRows.includes(row.id) ? "contained" : "outlined"} // Toggle button variant
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)", // Responsive button text size
                        padding: "8px 16px", // Button padding for touch targets
                      }}
                      onClick={() => handleSelectClick(row.id)}
                    >
                      {selectedRows.includes(row.id) ? "Selected" : "Select"} {/* Toggle button text */}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default ServiceTable;
