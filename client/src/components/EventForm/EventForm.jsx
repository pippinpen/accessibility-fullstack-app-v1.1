import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
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
// import ReactDatePicker from "react-datepicker";
import DateFnsUtils from "@date-io/date-fns";
import "react-datepicker/dist/react-datepicker.css";
// import "../EventForm/EventForm.css";


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

const schema = yup.object().shape({
  title: yup.string().required(),
  date: yup.string().required(),
  venue: yup.string().required(),
  materials: yup.string().required(),
  foodDrink: yup.string().required(),
  // customQuestions: yup.string().required(),
});

function EventForm({ initialValues }) {
  const classes = useStyles();
  let { id } = useParams();
  const [populated, setPopulated] = useState(false);

  const defaultValues = {
    title: "",
    date: new Date(),
    venue: "",
    materials: "",
    foodDrink: "",
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
        {/* <label>What's the name of your event?</label> */}
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
              error={!!errors.title}
              helperText={errors.title?.message}
              id="title"
              name={name}
              // placeholder="fff"
              label="Event Name"
            />
          )}
          name="title"
          control={control}
          rules={{ required: true }}
        />
      </div>
      {/* <div className={classes.formrow}>
        <label>What date will your event take place?</label>
        <Controller
          render={(
            { onChange, onBlur, value, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <ReactDatePicker
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              selected={value}
              // name={name}
              error={!!errors.date}
              helperText={errors.date?.message}
              // id="date"
              placeholderText="Select date"
              // label="Event Date"
              className="input"
              dateFormat="dd/MM/yyyy"

            />
          )}
          name="date"
          control={control}
          // rules={{ required: true }}
        />
      </div> */}
      <div className={classes.formrow}>
        {/* <label>When will your event take place?</label> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          render={(
            { onChange, onBlur, value,  ref },
            { invalid, isTouched, isDirty }
          ) => (
            <KeyboardDatePicker
              onChange={onChange}
              onBlur={onBlur}
              inputRef={ref}
              selected={value}
              error={!!errors.date}
              helperText={errors.date?.message}
              id="date"
              placeholderText="Select date"
              label="Event Date"
              className="input"
              format="dd/MM/yyyy"
              margin="normal"
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          )}
          name="date"
          control={control}
          // rules={{ required: true }}
        />
        </MuiPickersUtilsProvider>
      </div>
      <div className={classes.formrow}>
        {/* <label>Will your event be online or in-person?</label> */}
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
      <div className={classes.formrow}>
        {/* <label>Will you have presenting materials you can share with participants?</label> */}
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you have presenting materials you can share with participants?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.materials}
                helperText={errors.materials?.message}
                id="materials"
                name={name}
                aria-label="materials"
              >
                <FormControlLabel value="yesMaterials" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="noMaterials" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="materials"
            control={control}
            rules={{ required: true }}
          />
      </div>
      <div className={classes.formrow}>
        {/* <label>Will you serve food or drink?</label> */}
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you serve food or drink?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.foodDrink}
                helperText={errors.foodDrink?.message}
                id="foodDrink"
                name={name}
                aria-label="foodDrink"
              >
                <FormControlLabel value="foodDrink" control={<Radio/>} label="Food and Drink"/>
                <FormControlLabel value="noFoodnoDrink" control={<Radio/>} label="Neither"/>
                <FormControlLabel value="food" control={<Radio/>} label="Just food"/>
                <FormControlLabel value="drink" control={<Radio/>} label="Just drink"/>
              </RadioGroup>
              </FormControl>
            )}
            name="foodDrink"
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
              error={!!errors.customQuestions}
              helperText={errors.customQuestions?.message}
              id="customQuestions"
              name={name}
              placeholder="Your question"
              label="Additional questions"
            />
          )}
          name="customQuestions"
          control={control}
          rules={{ required: true }}
        />
      </div> */}
      {/* <div className={classes.formrow}>
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
