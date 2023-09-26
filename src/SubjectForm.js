import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SubjectForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all"
  ];
  return (
      <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          {/* <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Krunch Media
          </Typography> */}
          
          <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Course Code"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Course Code"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="title"
                name="title"
                label="Course Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

           

            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="artist"
                name="artist"
                label="Faculty"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="artist"
                name="artist"
                label="Faculty Email ID"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            

            {/*  */}


      {/*       <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid> */}
            
            
         {/*    <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid> */}
            

            <Grid item sm={12}>
            <Grid container xs={12} sm={12} spacing={8}>
              <Grid item>
                <Button variant="contained" sx={{ color: "#fff",width:"100%",margin:"auto" }}>
                  Discard
                </Button>
              </Grid>

              <Grid item>
                <Button variant="contained" sx={{ color: "#fff",width:"100%",margin:"auto" }}>
                  Submit
                </Button>
              </Grid>
              
              <Grid item>
                <Button variant="contained" sx={{ color: "#fff",width:"100%",margin:"auto" }}>
                  Save and Continue
                </Button>
              </Grid>
            </Grid>
            </Grid>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}

          </Grid>
        </Box>
      </Paper>
  );
}
