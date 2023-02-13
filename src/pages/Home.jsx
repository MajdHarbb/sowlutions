import { useState, useEffect } from "react";
import { fetchData } from "../helpers/api";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AlertDialog from "../components/AlertDialog";

function Home() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState();
  const [tempItems, setTempItems] = useState();
  const [item, setItem] = useState();
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);
  const [end, setEnd] = useState(10);
  const [start, setStart] = useState(0);
  const incrementEnd = () => {
    if (items.length - start >= 10) {
      setStart(start + 10);
    } else {
      setStart(items.length - start);
    }
    if (items.length - end <= 10) {
      setEnd(end + 10);
    } else {
      setEnd(items.length);
    }
  };
  const setAlertItem = (itemName) => {
    setItem(itemName);
    openDialog();
  };
  const DecrementEnd = () => {
    if (items.length - start >= 10) {
      setStart(start - 10);
    } else {
      setStart(items.length - start);
    }
    if (items.length - end <= 10) {
      setEnd(end - 10);
    } else {
      setEnd(items.length);
    }
  };
  const fetchItems = async () => {
    try {
      const res = await fetchData();
      console.log("data here", res.data);
      setLoading(false);
      setItems(res.data.data.items);
      setItem(res.data.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {loading ? (
        <h5>Loading</h5>
      ) : (
        <div>
          <AlertDialog open={dialogIsOpen} onClose={closeDialog} itema={item} />
          <div className="d-flex my-3" style={{ flexFlow: "row wrap" }}>
            {items.slice(start, end).map((item, index) => {
              return (
                <div key={item + index} className="col-md-4 my-3">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.images[0].thumbnail}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          price: {item.price} $
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => setAlertItem(item)}
                      >
                        More
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center my-3">
        <button className="btn btn-primary mx-3" onClick={incrementEnd}>
          {" "}
          {`<`}{" "}
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={DecrementEnd}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default Home;
