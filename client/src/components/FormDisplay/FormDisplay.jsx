import React, {
  // useEffect,
  // useState
} from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
  },
  configList: {
    listStyle: "none",
    padding: 0,
  },
}));

function FormDisplay() {
  const classes = useStyles();
  let data = {};
  const fetchForm = async () => {
    // console.log('loading', loading);
    // console.log('error', error);

    try {
      const response = await fetch("/api/v1/events");
      if (!response.ok) {
        throw response;
      }
      // const data = await response.json();
      // console.log('form from find-form', data);
    } catch (err) {
      console.log("err", err);
    }
  };

  if (data.length === 0) {
    return <p>There are no config settings for this form</p>;
  }
  fetchForm();
  
  return(
    <>
    <ul className={classes.eventList}>  
      {data.map((data) => (
      <>
        {/* <li key={data.id}> */}
          <h3>{data.title}</h3>
          <p>Event ID: {data._id}</p>
          <p>{data.date}</p>
        {/* </li> */}
      </>
      ))}
    </ul>
    </>
  );
}

export default FormDisplay;