import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Add, Edit, Delete, Cancel, Save } from "@mui/icons-material";

const API_URL = "https://luxorgroups.com/api/gallery";

const initialForm = {
  title: "",
  description: "",
  category: "",
  size: "",
  price: "",
  sku: "",
  orientation: "",
  artist_name: "",
  images: [],
};

export default function GalleryDashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/get.php`);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to fetch data",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setForm({ ...form, images: Array.from(e.target.files) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (key === "images")
        value.forEach((file) => formData.append("images[]", file));
      else formData.append(key, value);
    });
    if (editingId) formData.append("id", editingId);

    await fetch(`${API_URL}/${editingId ? "update.php" : "create.php"}`, {
      method: "POST",
      body: formData,
    });
    setSnackbar({
      open: true,
      message: editingId ? "Updated" : "Created",
      severity: "success",
    });
    setOpen(false);
    setEditingId(null);
    setForm(initialForm);
    fetchItems();
  };

  const handleEdit = (row) => {
    setForm({ ...row, images: [] });
    setEditingId(row.id);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const fd = new FormData();
    fd.append("id", id);
    await fetch(`${API_URL}/delete.php`, { method: "POST", body: fd });
    setSnackbar({ open: true, message: "Deleted", severity: "success" });
    fetchItems();
  };

  return (
    <Box>
      <Typography className="text-white pt-8 " variant="h5" gutterBottom>
        Gallery Table
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        Add
      </Button>
      <Paper sx={{ mt: 2, height: 500, position: "relative" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 500,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={items}
            columns={[
              { field: "id", headerName: "ID", width: 50 },
              { field: "title", headerName: "Title", width: 120 },
              { field: "description", headerName: "Description", width: 200 },
              { field: "category", headerName: "Category", width: 100 },
              { field: "price", headerName: "Price", width: 80 },
              { field: "size", headerName: "Size", width: 80 },
              { field: "sku", headerName: "SKU", width: 120 },
              { field: "orientation", headerName: "Orientation", width: 100 },
              { field: "artist_name", headerName: "Artist Name", width: 200 },
              {
                field: "actions",
                headerName: "Actions",
                width: 120,
                renderCell: (params) => (
                  <Stack direction="row" spacing={1}>
                    <IconButton onClick={() => handleEdit(params.row)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(params.row.id)}>
                      <Delete />
                    </IconButton>
                  </Stack>
                ),
              },
            ]}
            getRowId={(row) => row.id}
            disableSelectionOnClick
          />
        )}
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{editingId ? "Edit" : "Add"} Gallery</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  label="Title"
                  value={form.title}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Description"
                  value={form.description}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="category"
                  label="Category"
                  value={form.category}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="price"
                  label="Price"
                  value={form.price}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <label>Images:</label>{" "}
                <input type="file" multiple onChange={handleFileChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                {" "}
                <TextField
                  label="Size"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  fullWidth
                  
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                {" "}
                <TextField
                  label="SKU"
                  name="sku"
                  value={form.sku}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                {" "}
                <TextField
                  label="Orientation"
                  name="orientation"
                  value={form.orientation}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {" "}
                <TextField
                  label="Artist Name"
                  name="artist_name"
                  value={form.artist_name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button type="submit" variant="contained" startIcon={<Save />}>
                {editingId ? "Update" : "Create"}
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                  setForm(initialForm);
                  setEditingId(null);
                }}
                variant="outlined"
                startIcon={<Cancel />}
              >
                Cancel
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
}
