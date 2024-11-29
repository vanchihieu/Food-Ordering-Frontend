import { Create } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import CreateIngredientCategoryForm from "./CreateIngredientCategory";
import { useState } from "react";
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { updateStockOfIngredient } from "../../State/Admin/Ingredients/Action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [openIngredientCategory, setOpenIngredientCategory] = useState(false);
  const handleOpenIngredientCategory = () => setOpenIngredientCategory(true);
  const handleCloseIngredientCategory = () => setOpenIngredientCategory(false);

  const [openIngredient, setOpenIngredient] = useState(false);
  const handleOpenIngredient = () => setOpenIngredient(true);
  const handleCloseIngredient = () => setOpenIngredient(false);

  const handleUpdateStocke = (id) => {
    dispatch(updateStockOfIngredient({ id, jwt }));
  };

  // State for Pagination
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when rows per page change
  };

  // Get the ingredients for the current page
  const currentIngredients = ingredients.ingredients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="px-2">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={8}>
          <Card className="mt-1">
            <CardHeader
              title={"Ingredients"}
              sx={{
                pt: 2,
                alignItems: "center",
                "& .MuiCardHeader-action": { mt: 0.6 },
              }}
              action={
                <IconButton onClick={handleOpenIngredient}>
                  <Create />
                </IconButton>
              }
            />
            <TableContainer className="h-[88vh] overflow-y-scroll">
              <Table aria-label="table in dashboard">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Availability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentIngredients.map((item) => (
                    <TableRow
                      className="cursor-pointer"
                      hover
                      key={item.id}
                      sx={{
                        "&:last-of-type td, &:last-of-type th": { border: 0 },
                      }}
                    >
                      <TableCell>{item?.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category.name}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleUpdateStocke(item.id)}
                          color={item.inStoke ? "success" : "primary"}
                        >
                          {item.inStoke ? "in stock" : "out of stock"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={ingredients.ingredients.length} // Total number of items
                rowsPerPage={rowsPerPage} // Number of items per page
                page={page} // Current page
                onPageChange={handleChangePage} // Handler for page change
                onRowsPerPageChange={handleChangeRowsPerPage} // Handler for rows per page change
              />
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="mt-1">
            <CardHeader
              title={"Category"}
              sx={{
                pt: 2,
                alignItems: "center",
                "& .MuiCardHeader-action": { mt: 0.6 },
              }}
              action={
                <IconButton onClick={handleOpenIngredientCategory}>
                  <Create />
                </IconButton>
              }
            />
            <TableContainer>
              <Table aria-label="table in dashboard">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredients.category?.map((item) => (
                    <TableRow
                      className="cursor-pointer"
                      hover
                      key={item.id}
                      sx={{
                        "&:last-of-type td, &:last-of-type th": { border: 0 },
                      }}
                    >
                      <TableCell>{item?.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Modal for creating new ingredient */}
      <Modal
        open={openIngredient}
        onClose={handleCloseIngredient}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientForm handleClose={handleCloseIngredient} />
        </Box>
      </Modal>

      {/* Modal for creating new ingredient category */}
      <Modal
        open={openIngredientCategory}
        onClose={handleCloseIngredientCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientCategoryForm
            handleClose={handleCloseIngredientCategory}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Ingredients;
