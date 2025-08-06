import React, { useEffect, useState } from "react";
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

const API_URL = "https://luxorgroups.com/api/project";

const initialForm = {
  title: "",
  description: "",
  images: [],
};

export default function ProjectDashboard() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch(`${API_URL}/get.php`);
    const data = await res.json();

    setProjects(data);
    console.log("data");
    console.log(res);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, images: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = new FormData();
    payload.append("title", form.title);
    payload.append("description", form.description);

    if (form.images.length > 0) {
      form.images.forEach((file) => payload.append("images[]", file));
    }

    const url = editingId ? `${API_URL}/update.php` : `${API_URL}/create.php`;

    if (editingId) payload.append("id", editingId);

    await fetch(url, {
      method: "POST",
      body: payload,
    });

    setSnackbar({
      open: true,
      message: editingId ? "Updated successfully!" : "Created successfully!",
      severity: "success",
    });
    setForm(initialForm);
    setEditingId(null);
    setOpen(false);
    fetchProjects();
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      description: item.description,
      images: [],
    });
    setEditingId(item.id);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const payload = new FormData();
    payload.append("id", id);

    await fetch(`${API_URL}/delete.php`, {
      method: "POST",
      body: payload,
    });

    setSnackbar({
      open: true,
      message: "Deleted successfully!",
      severity: "success",
    });
    fetchProjects();
  };

  const handleAdd = () => {
    setForm(initialForm);
    setEditingId(null);
    setOpen(true);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "images",
      headerName: "Images",
      width: 200,
      renderCell: (params) => (
        <span>{params.value && JSON.stringify(params.value)}</span>
      ),
    },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "Description", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" onClick={() => handleEdit(params.row)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(params.row.id)}>
            <Delete />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 3 }}>
      <Typography className="text-white pt-8"  variant="h4" gutterBottom>
        Project Dashboard
      </Typography>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        Add New
      </Button>

      <Paper elevation={3} sx={{ height: 600, width: "100%", mb: 3 }}>
        <DataGrid
          rows={projects}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20]}
          disableSelectionOnClick
        />
      </Paper>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{editingId ? "Edit Project" : "Add Project"}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <label>Images:</label>
                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Grid>
            </Grid>

            <DialogActions sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" startIcon={<Save />}>
                {editingId ? "Update" : "Create"}
              </Button>
              <Button
                variant="outlined"
                startIcon={<Cancel />}
                onClick={() => {
                  setForm(initialForm);
                  setEditingId(null);
                  setOpen(false);
                }}
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
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
