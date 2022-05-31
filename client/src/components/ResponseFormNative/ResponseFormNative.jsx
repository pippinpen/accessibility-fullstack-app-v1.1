import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { EventsContext } from '../../contexts/events.context';

function ResponseFormNative({ formConfig }) {
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

  // const schema = yup.object().shape({
  //   ...(isOnline && {regularBreaks: yup.string().required()}),
  //   ...(isInPerson && {stepFree: yup.string().required()}),
  //   extraPlace: yup.string().required(),
  //   ...(hasMaterials && {materialsBefore: yup.string().required()}),
  //   ...(hasFood && {vegetarian: yup.string().required()}),
  //   ...(hasDrink && {nonAlcoholic: yup.string().required()})
  // });

  const { updateAttendeeResponse } = useContext(EventsContext);
  const { register, handleSubmit, errors, control, reset, formState } = useForm(
    {
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues,
    },
  );

  const { isDirty, isValid } = formState;

  const history = useHistory();
  const routeChange = () => {
    let path = `/success`;
    history.push(path);
  };

  const onSubmit = async (formValues) => {
    updateAttendeeResponse(id, formValues);
    routeChange();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isOnline && (
          <div>
            <label htmlFor="regularBreaks">
              Will you require regular breaks?
              <label htmlFor="regularBreaks-true">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="regularBreaks"
                  value="true"
                  id="regularBreaks-true"
                />
                Yes
              </label>
              <label htmlFor="regularBreaks-false">
                <input
                  // {...register('regularBreaks')}
                  ref={register({ required: true })}
                  type="radio"
                  name="regularBreaks"
                  value="false"
                  id="regularBreaks-false"
                />
                No
              </label>
              {errors.regularBreaks &&
                errors.regularBreaks.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
            </label>
          </div>
        )}
        {isInPerson && (
          <div>
            <label htmlFor="stepFree">
              Will you require step free access to the venue?
              <label htmlFor="stepFree-true">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="stepFree"
                  value="true"
                  id="stepFree-true"
                />
                Yes
              </label>
              <label htmlFor="stepFree-false">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="stepFree"
                  value="false"
                  id="stepFree-false"
                />
                No
              </label>
              {errors.stepFree && errors.stepFree.type === 'required' && (
                <span role="alert">This is required</span>
              )}
            </label>
          </div>
        )}
        <div>
          <label htmlFor="extraPlace">
            Will you require an extra place for a carer or assistant?
            <label htmlFor="extraPlace-true">
              <input
                ref={register({ required: true })}
                type="radio"
                name="extraPlace"
                value="true"
                id="extraPlace-true"
              />
              Yes
            </label>
            <label htmlFor="extraPlace-false">
              <input
                ref={register({ required: true })}
                type="radio"
                name="extraPlace"
                value="false"
                id="extraPlace-false"
              />
              No
            </label>
            {errors.extraPlace && errors.extraPlace.type === 'required' && (
              <span role="alert">This is required</span>
            )}
          </label>
        </div>
        {hasMaterials && (
          <div>
            <label htmlFor="materialsBefore">
              Will you require any materials like slide decks before the event?
              <label htmlFor="materialsBefore-true">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="materialsBefore"
                  value="true"
                  id="materialsBefore-true"
                />
                Yes
              </label>
              <label htmlFor="materialsBefore-false">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="materialsBefore"
                  value="false"
                  id="materialsBefore-false"
                />
                No
              </label>
              {errors.materialsBefore &&
                errors.materialsBefore.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
            </label>
          </div>
        )}
        {hasFood && (
          <div>
            <label htmlFor="vegetarian">
              Are you a vegetarian?
              <label htmlFor="vegetarian-true">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="vegetarian"
                  value="true"
                  id="vegetarian-true"
                />
                Yes
              </label>
              <label htmlFor="vegetarian-false">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="vegetarian"
                  value="false"
                  id="vegetarian-false"
                />
                No
              </label>
              {errors.vegetarian && errors.vegetarian.type === 'required' && (
                <span role="alert">This is required</span>
              )}
            </label>
          </div>
        )}
        {hasDrink && (
          <div>
            <label htmlFor="nonAlcoholic">
              Will you require non-alcoholic drinks?
              <label htmlFor="nonAlcoholic-true">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="nonAlcoholic"
                  value="true"
                  id="nonAlcoholic-true"
                />
                Yes
              </label>
              <label htmlFor="nonAlcoholic-false">
                <input
                  ref={register({ required: true })}
                  type="radio"
                  name="nonAlcoholic"
                  value="false"
                  id="nonAlcoholic-false"
                />
                No
              </label>
              {errors.nonAlcoholic &&
                errors.nonAlcoholic.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
            </label>
          </div>
        )}
        <div>
          <button onClick={() => reset(defaultValues)}>Reset</button>
          <button type="submit" disabled={!isValid || !isDirty}>
            Send Response to Organiser
          </button>
        </div>
      </form>
    </>
  );
}

export default ResponseFormNative;
