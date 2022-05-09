import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  // Select,
  // MenuItem,
  FormControl,
  // InputLabel,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { EventsContext } from './../../contexts/events.context';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(3),
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function ResponseForm({ formConfig }) {
  const classes = useStyles();
  let { id } = useParams();

  // conditionally render form depending on event type
  const defaultValues = {
    // title: "",
    // date: new Date(),
    venue: "",
    // materials: "",
    // foodDrink: "",
  };

  const schema = yup.object().shape({
    // title: yup.string().required().min(3).max(20),
    // date: yup.string().required(),
    venue: yup.string().required(),
    // materials: yup.string().required(),
    // foodDrink: yup.string().required(),
  });

  const { updateAttendeeResponse } = useContext(EventsContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid } = formState;

  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/success`;
    history.push(path);
  }

  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    console.log("formID", id);
    updateAttendeeResponse(id, formValues);
    console.log("formValues", formValues);
    routeChange();
  };

  console.log("isValid?", isValid);
  console.log("isDirty?", isDirty);

  console.log("formConfig venue prop", formConfig.venue)

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formrow}>
        {/* <label>Will your event be online or in-person?</label> */}
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you require seating?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.venue}
                helperText={errors.venue?.message}
                id="venue"
                name={name}
                aria-label="venue"
                // defaultValue="online"
              >
                <FormControlLabel value="needSeating" control={<Radio/>} label="needSeating"/>
                <FormControlLabel value="noSeating" control={<Radio/>} label="noSeating"/>
              </RadioGroup>
              </FormControl>
            )}
            name="venue"
            control={control}
            rules={{ required: true }}
          />
      </div>
      <div className={classes.formrow}>
        <Button onClick={() => reset(defaultValues)}>Reset</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!isValid || !isDirty}
        >
          Send Response to Organiser
        </Button>
      </div>
    </form>
    </>
  );
}

export default ResponseForm;
