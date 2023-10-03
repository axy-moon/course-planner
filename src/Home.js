import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SubjectForm from './SubjectForm';
import { ref, set } from 'firebase/database';
import { db } from './firebase';



export default function Home() {
  const [academic, setAcademic] = React.useState("");
  const [semester, setSemester] = React.useState("");
  const [year, setyear] = React.useState("");
  const [submit, setSubmit] = React.useState(true);
  



  const handleChange = (event) => {
    setAcademic(event.target.value);
  };
  const handleSem = (event) => {
    setSemester(event.target.value);
  };
  const categories = [
    "1st Year",
    "2nd Year"
  ];
  const semesters = [1,2,3,4];
  const handleSubmit = async () => {

    const dbRef = ref(db,'/course')
    set(dbRef,{
      academic : {
        year : {
        "semester" : semester
        }
    }})
      .then(()=>{
        console.log("successfully inserted")
      }
      )
      .catch((error)=>{
        console.log(error)
      })

    setSubmit(!submit)
    
  }
  return (
    <div>
       
      {submit ? (<Paper elevation={1} sx={{width : 600 , margin:"auto" }}>
       <Box sx={{ padding: 5,width: 400, margin:"auto"}}>
       <Grid container>
       <Grid container spacing={3} style={{margin:"auto"}}>
       <Grid item xs={12} sm={10}>
              <TextField
                required
                id="author"
                name="author"
                label="Academic Year"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                value={year}
                onChange={(e)=>setyear(e.target.value)}
              />
            </Grid>
       <Grid item xs={12} sm={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Year of Study</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={academic}
                  label="Year of Study"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
           
           

            <Grid item xs={12} sm={10}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={semester}
                  label="Semester"
                  onChange={handleSem}
                >
                  {semesters.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={10}>
              <Button variant="contained" sx={{ color: "#fff",width:"100%",margin:"auto" }} onClick={handleSubmit}>
                Continue
              </Button>
            </Grid>
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}

          </Grid>
            </Grid>
       </Box>
      </Paper>) : (
        <SubjectForm/>
      )


      

      }
    </div>
  )
}
