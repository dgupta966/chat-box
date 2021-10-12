import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./main.css";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="main-btn"
      >
        Support
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Typography sx={{ p: 2 }}>Support</Typography>
        {/* <form>
         Email <input type="text" /><br /><br />
         Message <textarea rows="5" cols="10" /> <br />
         <input type="submit" value="Submit" />
        </form> */}
        {/* <div id="id01" className="modal"> */}

        <form
          className="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <span
            onclick="document.getElementById('id01').style.display='none'"
            className="close"
            title="Close Modal"
          >
            &times;
          </span>

          <label for="uname">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter email" name="email" required />
          <label for="mes">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Messagw" name="mes" required />

          <button type="submit">Submit</button>
          {/* <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label> */}
        </form>

        {/* </div> */}
      </Popover>
    </div>
  );
}
