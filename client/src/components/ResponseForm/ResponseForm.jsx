import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  // TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { EventsContext } from './../../contexts/events.context';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(3),
    minWidth: 120,
    display: 'flex',
    justifyContent: 'center',
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

  let { isOnline, isInPerson, hasMaterials, hasFood, hasDrink } = formConfig;

  console.log(
    'FORM CONFIG OPTS',
    isOnline,
    isInPerson,
    hasMaterials,
    hasFood,
    hasDrink,
  );

  // conditionally render form depending on event type
  const defaultValues = {
    ...(isOnline && { regularBreaks: '' }),
    ...(isInPerson && { stepFree: '' }),
    extraPlace: '',
    ...(hasMaterials && { materialsBefore: '' }),
    ...(hasFood && { vegetarian: '' }),
    ...(hasDrink && { nonAlcoholic: '' }),
  };

  const schema = yup.object().shape({
    ...(isOnline && { regularBreaks: yup.boolean().required() }),
    ...(isInPerson && { stepFree: yup.boolean().required() }),
    extraPlace: yup.boolean().required(),
    ...(hasMaterials && { materialsBefore: yup.boolean().required() }),
    ...(hasFood && { vegetarian: yup.boolean().required() }),
    ...(hasDrink && { nonAlcoholic: yup.boolean().required() }),
  });

  const { updateAttendeeResponse } = useContext(EventsContext);
  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues,
  });

  const { isDirty, isValid } = formState;

  const history = useHistory();
  const routeChange = () => {
    let path = `/success`;
    history.push(path);
  };

  const onSubmit = async (formValues) => {
    // console.log("formValues", formValues);
    // console.log("formID", id);
    updateAttendeeResponse(id, formValues);
    console.log('formValues', formValues);
    routeChange();
  };

  console.log('isValid?', isValid);
  console.log('isDirty?', isDirty);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isOnline && (
          <div className={classes.formrow}>
            <Controller
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty },
              ) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Will you require regular breaks?
                  </FormLabel>
                  <RadioGroup
                    row
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors.regularBreaks}
                    helperText={errors.regularBreaks?.message}
                    id="regularBreaks"
                    name={name}
                    aria-label="regularBreaks"
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              name="regularBreaks"
              control={control}
              rules={{ required: true }}
            />
          </div>
        )}
        {isInPerson && (
          <div className={classes.formrow}>
            <Controller
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty },
              ) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Will you require step free access to the venue?
                  </FormLabel>
                  <RadioGroup
                    row
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors.stepFree}
                    helperText={errors.stepFree?.message}
                    id="stepFree"
                    name={name}
                    aria-label="stepFree"
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              name="stepFree"
              control={control}
              rules={{ required: true }}
            />
          </div>
        )}
        <div className={classes.formrow}>
          <Controller
            render={(
              { onChange, onBlur, value, name, ref },
              { invalid, isTouched, isDirty },
            ) => (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Will you require an extra place for a carer or assistant?
                </FormLabel>
                <RadioGroup
                  row
                  inputRef={ref}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={!!errors.extraPlace}
                  helperText={errors.extraPlace?.message}
                  id="extraPlace"
                  name={name}
                  aria-label="extraPlace"
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            )}
            name="extraPlace"
            control={control}
            rules={{ required: true }}
          />
        </div>
        {hasMaterials && (
          <div className={classes.formrow}>
            <Controller
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty },
              ) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Do you require any materials like slide decks before the
                    event?
                  </FormLabel>
                  <RadioGroup
                    row
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors.materialsBefore}
                    helperText={errors.materialsBefore?.message}
                    id="materialsBefore"
                    name={name}
                    aria-label="materialsBefore"
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              name="materialsBefore"
              control={control}
              rules={{ required: true }}
            />
          </div>
        )}
        {hasFood && (
          <div className={classes.formrow}>
            <Controller
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty },
              ) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Are you a vegetarian?
                  </FormLabel>
                  <RadioGroup
                    row
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors.vegetarian}
                    helperText={errors.vegetarian?.message}
                    id="vegetarian"
                    name={name}
                    aria-label="vegetarian"
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              name="vegetarian"
              control={control}
              rules={{ required: true }}
            />
          </div>
        )}
        {hasDrink && (
          <div className={classes.formrow}>
            <Controller
              render={(
                { onChange, onBlur, value, name, ref },
                { invalid, isTouched, isDirty },
              ) => (
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Will you require non-alcoholic drinks?
                  </FormLabel>
                  <RadioGroup
                    row
                    inputRef={ref}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={!!errors.nonAlcoholic}
                    helperText={errors.nonAlcoholic?.message}
                    id="nonAlcoholic"
                    name={name}
                    aria-label="nonAlcoholic"
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
              name="nonAlcoholic"
              control={control}
              rules={{ required: true }}
            />
          </div>
        )}
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
