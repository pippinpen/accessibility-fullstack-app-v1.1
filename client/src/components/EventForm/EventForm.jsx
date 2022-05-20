import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import {
  Button,
  TextField,
  FormControl,
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

const schema = yup.object().shape({
  title: yup.string().required().min(3).max(20),
  date: yup.string().required(),
  isOnline: yup.boolean().required(),
  isInPerson: yup.boolean().required(),
  hasMaterials: yup.boolean().required(),
  hasFood: yup.boolean().required(),
  hasDrink: yup.boolean().required(),
});

function EventForm({ initialValues }) {
  const classes = useStyles();
  let { id } = useParams();
  const [populated, setPopulated] = useState(false);

  const defaultValues = {
    title: "",
    date: new Date(),
    isOnline: "",
    isInPerson: "",
    hasMaterials: "",
    hasFood: "",
    hasDrink: "",
  };

  const { addEvent, updateEvent } = useContext(EventsContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const { isDirty, isValid } = formState;

  if (initialValues && !populated) {
    reset({
      ...initialValues,
    });
    setPopulated(true);
  }

  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/dashboard`;
    history.push(path);
  }

  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);

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
    routeChange();
  };

  console.log("isValid?", isValid);
  console.log("isDirty?", isDirty);

  // return (
  //   <>
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <div className={classes.formrow}>
  //       {/* <label>What's the name of your event?</label> */}
  //       <Controller
  //         render={(
  //           { onChange, onBlur, value, name, ref },
  //           { invalid, isTouched, isDirty }
  //         ) => (
  //           <TextField
  //             inputRef={ref}
  //             value={value}
  //             onChange={onChange}
  //             onBlur={onBlur}
  //             error={!!errors.title}
  //             helperText={errors.title?.message}
  //             id="title"
  //             name={name}
  //             // placeholder="fff"
  //             label="Event Name"
  //           />
  //         )}
  //         name="title"
  //         control={control}
  //         rules={{ required: true }}
  //       />
  //     </div>
  //     <div className={classes.formrow}>
  //       {/* <label>When will your event take place?</label> */}
  //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //       <Controller
  //         render={(
  //           { onChange, onBlur, value,  ref },
  //           { invalid, isTouched, isDirty }
  //         ) => (
  //           <KeyboardDatePicker
  //             onChange={onChange}
  //             onBlur={onBlur}
  //             inputRef={ref}
  //             selected={value}
  //             error={!!errors.date}
  //             helperText={errors.date?.message}
  //             id="date"
  //             placeholderText="Select date"
  //             label="Event Date"
  //             className="input"
  //             format="dd/MM/yyyy"
  //             margin="normal"
  //             KeyboardButtonProps={{
  //               "aria-label": "change date"
  //             }}
  //           />
  //         )}
  //         name="date"
  //         control={control}
  //         // rules={{ required: true }}
  //       />
  //       </MuiPickersUtilsProvider>
  //     </div>
  //     <div className={classes.formrow}>
  //       {/* <label>Will your event be online or in-person?</label> */}
  //         <Controller
  //           render={(
  //             { onChange, onBlur, value, name, ref },
  //             { invalid, isTouched, isDirty }
  //           ) => (
  //             <FormControl component="fieldset">
  //             <FormLabel component='legend'>Will your event be online or in-person?</FormLabel>
  //             <RadioGroup
  //               row
  //               inputRef={ref}
  //               value={value}
  //               onChange={onChange}
  //               onBlur={onBlur}
  //               error={!!errors.venue}
  //               helperText={errors.venue?.message}
  //               id="venue"
  //               name={name}
  //               aria-label="venue"
  //               // defaultValue="online"
  //             >
  //               <FormControlLabel value="online" control={<Radio/>} label="Online"/>
  //               <FormControlLabel value="inPerson" control={<Radio/>} label="In-person"/>
  //               <FormControlLabel value="both" control={<Radio/>} label="Both"/>
  //             </RadioGroup>
  //             </FormControl>
  //           )}
  //           name="venue"
  //           control={control}
  //           rules={{ required: true }}
  //         />
  //     </div>
  //     <div className={classes.formrow}>
  //       {/* <label>Will you have presenting materials you can share with participants?</label> */}
  //         <Controller
  //           render={(
  //             { onChange, onBlur, value, name, ref },
  //             { invalid, isTouched, isDirty }
  //           ) => (
  //             <FormControl component="fieldset">
  //             <FormLabel component='legend'>Will you have presenting materials you can share with participants?</FormLabel>
  //             <RadioGroup
  //               row
  //               inputRef={ref}
  //               value={value}
  //               onChange={onChange}
  //               onBlur={onBlur}
  //               error={!!errors.materials}
  //               helperText={errors.materials?.message}
  //               id="materials"
  //               name={name}
  //               aria-label="materials"
  //             >
  //               <FormControlLabel value="yesMaterials" control={<Radio/>} label="Yes"/>
  //               <FormControlLabel value="noMaterials" control={<Radio/>} label="No"/>
  //             </RadioGroup>
  //             </FormControl>
  //           )}
  //           name="materials"
  //           control={control}
  //           rules={{ required: true }}
  //         />
  //     </div>
  //     <div className={classes.formrow}>
  //       {/* <label>Will you serve food or drink?</label> */}
  //         <Controller
  //           render={(
  //             { onChange, onBlur, value, name, ref },
  //             { invalid, isTouched, isDirty }
  //           ) => (
  //             <FormControl component="fieldset">
  //             <FormLabel component='legend'>Will you serve food or drink?</FormLabel>
  //             <RadioGroup
  //               row
  //               inputRef={ref}
  //               value={value}
  //               onChange={onChange}
  //               onBlur={onBlur}
  //               error={!!errors.foodDrink}
  //               helperText={errors.foodDrink?.message}
  //               id="foodDrink"
  //               name={name}
  //               aria-label="foodDrink"
  //             >
  //               <FormControlLabel value="foodDrink" control={<Radio/>} label="Food and Drink"/>
  //               <FormControlLabel value="noFoodnoDrink" control={<Radio/>} label="Neither"/>
  //               <FormControlLabel value="food" control={<Radio/>} label="Just food"/>
  //               <FormControlLabel value="drink" control={<Radio/>} label="Just drink"/>
  //             </RadioGroup>
  //             </FormControl>
  //           )}
  //           name="foodDrink"
  //           control={control}
  //           rules={{ required: true }}
  //         />
  //     </div>
  //     <div className={classes.formrow}>
  //       <Button onClick={() => reset(defaultValues)}>Reset</Button>
  //       <Button
  //         type="submit"
  //         variant="contained"
  //         color="primary"
  //         className={classes.button}
  //         disabled={!isValid || !isDirty}
  //       >
  //         {populated ? "Update" : "Make"} Event
  //       </Button>
  //     </div>
  //   </form>
  //   </>
  // );




  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.formrow}>
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
              label="Event Name"
            />
          )}
          name="title"
          control={control}
          rules={{ required: true }}
        />
      </div>
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
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty }
            ) => (
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will your event be in-person?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.isInPerson}
                helperText={errors.isInPerson?.message}
                id="isInPerson"
                name={name}
                aria-label="Will your event be in person?"
              >
                <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="false" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="isInPerson"
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
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will your event be online?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.isOnline}
                helperText={errors.isOnline?.message}
                id="isOnline"
                name={name}
                aria-label="isOnline"
              >
                <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="false" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="isOnline"
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
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you have presenting materials you can share with attendees?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.materials}
                helperText={errors.materials?.message}
                id="hasMaterials"
                name={name}
                aria-label="hasMaterials"
              >
                <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="false" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="hasMaterials"
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
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you serve food?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.hasFood}
                helperText={errors.hasFood?.message}
                id="hasFood"
                name={name}
                aria-label="hasFood"
              >
                <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="false" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="hasFood"
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
              <FormControl component="fieldset">
              <FormLabel component='legend'>Will you serve drink?</FormLabel>
              <RadioGroup
                row
                inputRef={ref}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors.hasDrink}
                helperText={errors.hasDrink?.message}
                id="hasDrink"
                name={name}
                aria-label="hasDrink"
              >
                <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
                <FormControlLabel value="false" control={<Radio/>} label="No"/>
              </RadioGroup>
              </FormControl>
            )}
            name="hasDrink"
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
          {populated ? "Update" : "Make"} Event
        </Button>
      </div>
    </form>
    </>
  );

}

export default EventForm;
