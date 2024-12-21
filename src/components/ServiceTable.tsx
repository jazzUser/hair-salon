import { Paper, Button } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { useState, useCallback } from "react";

type RowData = {
  id: number;
  type: string;
  time: string;
  price: string;
};

const ServiceTable = () => {
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]); // Track selected rows as readonly array
  const [pageSize, setPageSize] = useState(5); // Default page size

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

  const columns = [
    { field: "type", headerName: "Type", width: 300 },
    { field: "time", headerName: "Time", width: 70 },
    { field: "price", headerName: "Price", width: 200 },
    {
      field: "select",
      headerName: "Book a Service",
      width: 120,
      renderCell: (params: GridCellParams) => (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center", // Align button vertically in the middle
            height: "100%", // Ensure the div takes full height of the cell
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleSelectClick(params.row.id)}
          >
            Select
          </Button>
        </div>
      ),
    },
  ];

  const handleSelectClick = (id: number) => {
    alert(`You selected the service with ID: ${id}`);
    // Handle the selection logic
  };

  const handleAddToCart = () => {
    alert(
      `You added the following items to your cart: ${selectedRows.join(", ")}`
    );
    // Replace with actual logic for adding to cart
  };

  // Update the selected rows when selection changes
  const handleRowSelectionChange = useCallback(
    (newSelectionModel: GridRowSelectionModel) => {
      setSelectedRows(newSelectionModel); // Set the selected rows directly (read-only array)
    },
    []
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        height: "100vh",
      }}
    >
      <Paper sx={{ width: "50%", height: "400px" }}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            rowSelectionModel={selectedRows}
            onRowSelectionModelChange={handleRowSelectionChange}
            pagination
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ServiceTable;
