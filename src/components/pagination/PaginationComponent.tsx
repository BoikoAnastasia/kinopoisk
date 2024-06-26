//styles
import { Pagination, Stack } from "@mui/material";
import '../ComponentsStyles.css';

export const PaginationComponent = ({setPageNumber}:{setPageNumber: (page: number) => void}) => {
  
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  return (
    <>
      <Stack spacing={2} >
        <Pagination sx={{
          "& .MuiPagination-ul":{
            justifyContent: "center",
            marginTop: "100px",
          },
          
          "& .MuiPaginationItem-root":{
            color: "black",
            backgroundColor: "white",
            '&:hover': {
            background: "gray",
            color: "white"
          },
          },
          "& .MuiPaginationItem-root.Mui-selected":{
            backgroundColor: "gray",
            color: "white",  
          }
        }} count={10} shape="rounded" color="primary"  onChange={handleChange} />
      </Stack>
    </>
  );
};

