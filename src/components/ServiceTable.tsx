import { Paper, Button } from '@mui/material';
import { DataGrid, GridCellParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { useState, useCallback } from 'react';

type RowData = {
  id: number;
  type: string;
  time: string;
  price: string;
};

const ServiceTable = () => {
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]); // Track selected rows as readonly array

  const rows: RowData[] = [
    { id: 1, type: 'Haircut + Washing + Drying', time: '30 min', price: '$25' },
    { id: 2, type: 'Haircut + Washing (Drying by yourself)', time: '15 min', price: '$10' },
    { id: 3, type: 'Short Hair length - Haircut', time: '90 min', price: '$50' },
    { id: 4, type: 'Middle Hair length- Haircut', time: '90 min', price: '$50' },
    { id: 5, type: 'Long Hair- Haircut', time: '90 min', price: '$50' },
    { id: 6, type: 'Coloring + Washing', time: '20 min', price: '$15' },
    { id: 7, type: 'Washing + Styling', time: '20 min', price: '$15' },
  ];

  const columns = [
    { field: 'type', headerName: 'Type', width: 300 },
    { field: 'time', headerName: 'Time', width: 70 },
    { field: 'price', headerName: 'Price', width: 70 },
    {
      field: 'select',
      headerName: 'Book a Service',
      width: 120,
      renderCell: (params: GridCellParams) => (
        <Button 
          variant="contained" 
          onClick={() => handleSelectClick(params.row.id)}
        >
          Select
        </Button>
      ),
    },
  ];

  const handleSelectClick = (id: number) => {
    alert(`You selected the service with ID: ${id}`);
    // Handle the selection logic
  };

  const handleBookSelected = () => {
    alert(`You booked the following items: ${selectedRows.join(', ')}`);
    // Replace with actual logic for booking selected items
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
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full height of the viewport
      }}
    >
      <Paper sx={{ width: '50%', height: '400px' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowSelectionModel={selectedRows} // Bind the selected rows to the state (readonly array)
          onRowSelectionModelChange={handleRowSelectionChange} // Update selected rows directly
          sx={{ border: 0 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleBookSelected}
          style={{ marginTop: '20px' }}
        >
          Book Selected Items
        </Button>
      </Paper>
    </div>
  );
};

export default ServiceTable;
