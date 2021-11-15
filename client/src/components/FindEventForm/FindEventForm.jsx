import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


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

const schema = yup.object().shape({
  formID: yup.string().required(),
});

function FindEventForm() {
  const classes = useStyles();
  // let { id } = useParams();

  const defaultValues = {
    formID: "",
  };

  const { handleSubmit, errors, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid } = formState;

  const history = useHistory();
  const routeChange = (formValues) =>{ 
  let path = `/view-form/:${formValues}?`; 
  history.push(path);
  };

  const onSubmit = ( formValues ) => {
    console.log("formValues", formValues);
    let formID = formValues.formID
    routeChange(formID);
  };



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formrow}>
        <label>Please enter the event ID provided by the event organiser</label>
        <Controller
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!errors.formID}
              helperText={errors.formID?.message}
              id="formID"
              name={name}
              // placeholder="fff"
              label="Event ID"
            />
          )}
          name="formID"
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formrow}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!isValid || !isDirty}
        >Find Event</Button>
      </div>
    </form>
    </>
  );
}

export default FindEventForm;