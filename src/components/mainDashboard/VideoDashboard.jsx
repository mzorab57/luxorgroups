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
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Add, Edit, Delete, Cancel, Save } from "@mui/icons-material";

const API_URL = "https://luxorgroups.com/api/video";

const initialForm = { title: "", description: "", video: null };

export default function VideoDashboard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch(`${API_URL}/get.php`);
    const data = await res.json();
    setItems(data);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleFileChange = (e) =>
    setForm({ ...form, video: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    if (form.video) formData.append("video", form.video);
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
    setForm({ title: row.title, description: row.description, video: null });
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
      <Typography className="text-white pt-8"  variant="h5" gutterBottom>
        Video Table
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        Add
      </Button>
      <Paper sx={{ mt: 2, height: 500 }}>
        <DataGrid
          rows={items}
          columns={[
            { field: "id", headerName: "ID", width: 50 },
            { field: "title", headerName: "Title", width: 120 },
            { field: "description", headerName: "Description", width: 200 },
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
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>{editingId ? "Edit" : "Add"} Video</DialogTitle>
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
              <Grid item xs={12}>
                <label>Upload Video:</label>{" "}
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
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
