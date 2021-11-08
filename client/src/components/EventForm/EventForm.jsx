import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  // TextField,
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

import { EventsContext } from './../../contexts/events.context';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const schema = yup.object().shape({
  venue: yup.string().required(),
  // materials: yup.boolean().required(),
  // food: yup.boolean().required(),
  // drink: yup.boolean().required(),
  // customQuestions: yup.string().required(),
});

function EventForm({ initialValues }) {
  const classes = useStyles();
  let { id } = useParams();
  const [populated, setPopulated] = useState(false);

  const defaultValues = {
    venue: "online",
    // materials: true,
    // food: true,
    // drink: true,
    // customQuestions: "",
  };

  const { addEvent, updateEvent } = useContext(EventsContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  // console.log("formState", formState);
  const { isDirty, isValid } = formState;

  if (initialValues && !populated) {
    // initialValues.price = initialValues.price / 100;
    reset({
      ...initialValues,
    });
    setPopulated(true);
  }

  // console.log("errors", errors);
  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    // formValues._id = id; // pulled from the URL using router 'useParams' hook

    if (populated) {
      const updates = {};
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          if (initialValues[key] !== formValues[key] && key[0] !== "_") {
            updates[key] = formValues[key];
          }
        }
      }
      console.log("updates", updates);
      updateEvent(id, updates);
    } else {
      addEvent(formValues);
    }
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formrow}>
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will your event be online or in-person?</FormLabel>
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
                <FormControlLabel value="online" control={<Radio/>} label="Online"/>
                <FormControlLabel value="inPerson" control={<Radio/>} label="In-person"/>
                <FormControlLabel value="both" control={<Radio/>} label="Both"/>
              </RadioGroup>
              </FormControl>
            )}
            name="venue"
            control={control}
            rules={{ required: true }}
          />
      </div>
      {/* <div className={classes.formrow}>
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
              error={!!errors.price}
              helperText={errors.price?.message}
              id="price"
              name={name}
              placeholder="x.xx"
              label="price £x.xx"
            />
          )}
          name="price"
          control={control}
          rules={{ required: true }}
        />
      </div>
      <div className={classes.formrow}>
        <Controller
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category">Choose a category</InputLabel>
              <Select
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.category}
                id="category"
                name={name}
                label="category"
                required={true}
              >
                <MenuItem value="">Choose a category</MenuItem>
                {productCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          name="category"
          control={control}
          rules={{ required: true }}
        />
        {errors.category ? (
                <InputLabel htmlFor="category">
                  {errors.category.message}
                </InputLabel>
              ) : (
                ""
              )}
      </div> */}
      <div className={classes.formrow}>
        <Button onClick={() => reset(defaultValues)}>Reset</Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!isValid || !isDirty}
        >
          {populated ? "Update" : "Make"} Event
        </Button>
      </div>
    </form>
  );
}

export default EventForm;
