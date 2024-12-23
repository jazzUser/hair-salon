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
    {
      id: 2,
      type: "Haircut + Washing (Drying by yourself)",
      time: "15 min",
      price: "$10",
    },
    {
      id: 3,
      type: "Short Hair length - Haircut",
      time: "90 min",
      price: "$50",
    },
    {
      id: 4,
      type: "Middle Hair length- Haircut",
      time: "90 min",
      price: "$50",
    },
    { id: 5, type: "Long Hair- Haircut", time: "90 min", price: "$50" },
    { id: 6, type: "Coloring + Washing", time: "20 min", price: "$15" },
    { id: 7, type: "Washing + Styling", time: "20 min", price: "$15" },
  ];

  const handleSelectClick = (id: number) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)", // Responsive font size for header
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
          overflow: "hidden", // Prevent scroll inside Paper
        }}
      >
        <TableContainer
          style={{
            overflow: "hidden", // Disable overflow
          }}
        >
          <Table aria-label="services table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      paddingLeft: "50px",
                    }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    }}
                  >
                    {row.time}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center", // Center the button
                    }}
                  >
                    <Button
                      variant={selectedRows.includes(row.id) ? "contained" : "outlined"} // Toggle button variant
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
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
