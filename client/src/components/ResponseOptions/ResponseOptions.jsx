import React, { useState, useEffect, useContext } from 'react';
import dateFormat from '../../utils/dateFormat';
// import ResponseFormNative from "../ResponseFormNative/ResponseFormNative";
// import ResponseForm from '../ResponseForm/ResponseForm';
import { useHistory } from 'react-router-dom';
import FormStart from '../FormStart/FormStart';
import FormOnline from '../FormOnline/FormOnline';
import FormInPerson from '../FormInPerson/FormInPerson';
import FormMaterials from '../FormMaterials/FormMaterials';
import FormFood from '../FormFood/FormFood';
import FormDrink from '../FormDrink/FormDrink';
import FormAssistance from '../FormAssistance/FormAssistance';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ResponseOptions.css';
import { EventsContext } from './../../contexts/events.context';

function ResponseOptions({ event, id }) {
  const { updateAttendeeResponse } = useContext(EventsContext);

  const [responseForm, setResponseForm] = useState({
    step: 0,
    totalSteps: 1,
    isOnlineStepValue: null,
    isInPersonStepValue: null,
    hasMaterialsStepValue: null,
    hasFoodStepValue: null,
    hasDrinkStepValue: null,
    formAnswers: {},
  });

  let { formConfig } = event;
  let { title, date } = event.formConfig;

  const nextStep = () => {
    setResponseForm({
      ...responseForm,
      step: responseForm.step + 1,
    });
  };

  const prevStep = () => {
    setResponseForm({
      ...responseForm,
      step: responseForm.step - 1,
    });
  };

  useEffect(() => {
    const configKeys = Object.keys(formConfig);
    const allTrueConfigs = configKeys.filter(function (key) {
      return formConfig[key];
    });
    let onlyTrueConfigsCount = 1;
    let onlyTrueConfigs = [];
    for (const config of allTrueConfigs) {
      if (config === 'title' || config === 'date') {
        continue;
      }
      onlyTrueConfigsCount += 1;
      onlyTrueConfigs[config + 'StepValue'] = onlyTrueConfigsCount;
    }

    setResponseForm({
      ...responseForm,
      totalSteps: onlyTrueConfigsCount,
      ...onlyTrueConfigs,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formConfig]);

  const history = useHistory();
  const routeChange = () => {
    let path = `/success`;
    history.push(path);
  };

  const onNext = (formValues) => {
    const updatedState = {
      ...responseForm,
      formAnswers: {
        ...responseForm.formAnswers,
        ...formValues,
      },
      step: responseForm.step + 1,
    };
    setResponseForm(updatedState);
  };

  const onSubmit = (formValues) => {
    const updatedState = {
      ...responseForm,
      formAnswers: {
        ...responseForm.formAnswers,
        ...formValues,
      },
    };
    updateAttendeeResponse(id, updatedState.formAnswers);
    routeChange();
  };

  if (!event) {
    return <p>Couldn't find the event with that ID</p>;
  }
  return (
    <div>
      {responseForm.step === 0 && (
        <FormStart
          title={title}
          date={dateFormat(date)}
          id={event._id}
          step={responseForm.step}
          buttonAction={nextStep}
        />
      )}
      {responseForm.step === 1 && (
        <FormAssistance
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={responseForm.totalSteps === 1 ? onSubmit : onNext}
          buttonText={responseForm.totalSteps === 1 ? 'Finish' : 'Next'}
        />
      )}
      {responseForm.step === responseForm.isOnlineStepValue && (
        <FormOnline
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={
            responseForm.totalSteps === responseForm.isOnlineStepValue
              ? onSubmit
              : onNext
          }
          buttonText={
            responseForm.totalSteps === responseForm.isOnlineStepValue
              ? 'Finish'
              : 'Next'
          }
        />
      )}
      {responseForm.step === responseForm.isInPersonStepValue && (
        <FormInPerson
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={
            responseForm.totalSteps === responseForm.isInPersonStepValue
              ? onSubmit
              : onNext
          }
          buttonText={
            responseForm.totalSteps === responseForm.isInPersonStepValue
              ? 'Finish'
              : 'Next'
          }
        />
      )}
      {responseForm.step === responseForm.hasMaterialsStepValue && (
        <FormMaterials
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={
            responseForm.totalSteps === responseForm.hasMaterialsStepValue
              ? onSubmit
              : onNext
          }
          buttonText={
            responseForm.totalSteps === responseForm.hasMaterialsStepValue
              ? 'Finish'
              : 'Next'
          }
        />
      )}
      {responseForm.step === responseForm.hasFoodStepValue && (
        <FormFood
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={
            responseForm.totalSteps === responseForm.hasFoodStepValue
              ? onSubmit
              : onNext
          }
          buttonText={
            responseForm.totalSteps === responseForm.hasFoodStepValue
              ? 'Finish'
              : 'Next'
          }
        />
      )}
      {responseForm.step === responseForm.hasDrinkStepValue && (
        <FormDrink
          step={responseForm.step}
          prevStep={prevStep}
          buttonAction={
            responseForm.totalSteps === responseForm.hasDrinkStepValue
              ? onSubmit
              : onNext
          }
          buttonText="Finish"
        />
      )}
      <ProgressBar
        step={responseForm.step}
        totalSteps={responseForm.totalSteps}
      />
    </div>
  );
}

export default ResponseOptions;
