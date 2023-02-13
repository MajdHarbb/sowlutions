import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog(props) {
  const { open, onClose, itema } = props;
    
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{itema.title}</DialogTitle>
        <DialogContent>
          <div>
            <h6>Price: {` ${itema.price}`}</h6>
          </div>

          <div>
            <h6>Quantity: {` ${itema.quantity}`}</h6>
          </div>
          {/* <div>
            <h6>Category: {item.category[0].class_name}</h6>
          </div> */}
          
          <div className="d-flex">
            <div className="col-md-8">
              <img src={itema.images[0].thumbnail} alt="Image" />
            </div>
          </div>
          <DialogContentText id="alert-dialog-slide-description">
            {/* {text} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>dismiss</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
