import * as React from "react";
import { AppBar, Box, Toolbar,Modal,Tooltip, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography  sx={{ flexGrow: 1 }} component="div">
          <Link
              to="/"
              style={{
                textDecoration: "none",
                margin: "20px",
                color: "white",
                fontSize: "20px",
              }}
            >
             BookYourShow.com
            </Link>
          </Typography>
         

          <div
            style={{
              marginLeft: "20px",
              display: "flex",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                margin: "20px",
                color: "white",
                fontSize: "20px",
              }}
            >
              Home
            </Link>
          </div>
          <Tooltip title="Missed Ticket Details ? Click me...">
            <IconButton  onClick={handleOpen}>
              <HelpIcon  sx={{color: 'white'}}  />
            </IconButton>

          </Tooltip>
        </Toolbar>

      </AppBar>


      <Modal  open={open}  onClose={handleClose} >
        <Box sx={{
          position: 'absolute',  top: '50%',left: '50%', transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper', borderRadius: '10px', boxShadow: 24,
          p: 4,
        }}>
          <Typography sx={{ mt:2 }}>
            Booked Ticket... But couldn't Find Ticket Details ? Don't Worry... I got you covered ...
           &#128514; I literally got you covered... &#128519; : 
           <a href='https://igotucovereddotcom.netlify.app' target="_blank" >IGotYouCovered.com</a>  
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
