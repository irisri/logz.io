import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { EventProps } from '../screens/mainScreen';

interface EventTableProps {
  data: EventProps[];
  deleteEvent: (value: number) => void;
}

const renderColumns = (deleteEvent: (value: number) => void): GridColDef<EventProps>[] => {
  return [
    { field: 'ID', headerName: 'ID', width: 70 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return <button onClick={() => deleteEvent(params.row.ID)}>Dismiss</button>;
      },
    },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Description', headerName: 'Description', width: 500 },
    {
      field: 'Severity',
      headerName: 'Severity',
      width: 100,
    },
    {
      field: 'Time',
      headerName: 'Time',
      type: 'number',
      width: 500,
      valueGetter: (params: any) => {
        const date = new Date(params.row.Time);
        return date.toString();
      },
    },
  ];
};

export const EventTable = ({ data, deleteEvent }: EventTableProps) => {
  const dismiss = (value: number) => {
    deleteEvent(value);
  };

  return (
    <div>
      <h1>table</h1>

      <DataGrid
        rows={data}
        columns={renderColumns(dismiss)}
        getRowId={(row: any) => row.ID}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
