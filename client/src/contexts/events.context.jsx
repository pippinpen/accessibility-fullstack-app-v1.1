import React, { createContext, useState, useCallback, useContext } from "react";
import { AuthContext } from "./auth.context";
import { useToasts } from "react-toast-notifications";


let headers = {
  "Content-Type": "application/json",
  // 'Content-Type': 'application/x-www-form-urlencoded',
};

export const EventsContext = createContext({
  fetchEvents: () => [],
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
  loaded: false,
  loading: false,
  error: null,
  events: [],
});

export const EventsProvider = (props) => {
  const {
    accessToken,
  } = useContext(AuthContext);
  
  // console.log('AccessToken', accessToken);

  const [state, setState] = useState({
    loading: false,
    loaded: false,
    error: null,
    events: [],
  });

  const {loading, error, events, loaded} = state;
  // console.log('rerendering', {loading, error, events, loaded});

  const setLoading = useCallback(
    () =>
      setState({
        ...state,
        loading: true,
      }),
    [state]
  );

  const setEvents = useCallback(
    (data) =>
      setState({
        ...state,
        events: data,
        error: null,
        loading: false,
        loaded: true,
      }),
    [state]
  );

  const setError = useCallback(
    (err) =>
      setState({
        ...state,
        error: err.message || err.statusText,
        loading: false,
        loaded: true,
      }),
    [state]
  );

  // const [search, setSearch] = useState("");
  const { addToast } = useToasts();


  const fetchEvents = useCallback(async () => {
    // console.log('loading', loading);
    // console.log('error', error);

    const { loading, loaded, error } = state;

    if (loading || loaded || error || !accessToken ) {
      return;
    }

    setLoading();

    try {
      const response = await fetch("/api/v1/events", {
        headers: accessToken
          ? { ...headers, Authorization: `Bearer ${accessToken}` }
          : headers,
      });
      if (!response.ok) {
        throw response;
      }
      const data = await response.json();
      setEvents(data);
      // console.log('events from context', events);
    } catch (err) {
      console.log("err", err);
      setError(err);
    }
  }, [accessToken, setError, setLoading, setEvents, state]);

  const addEvent = useCallback(
    async (formData) => {
      if(!accessToken) return;
      console.log("headers", headers);
      console.log("accessToken", accessToken);
      setLoading();
      const { events } = state;
      try {
        const response = await fetch("/api/v1/events", {
          method: "POST",
          headers: accessToken
            ? { ...headers, Authorization: `Bearer ${accessToken}` }
            : headers,
          body: JSON.stringify(formData),
        });
        if (response.status !== 201) {
          throw response;
        }
        const savedEvent = await response.json();
        console.log("got data", savedEvent);
        setEvents([...events, savedEvent]);
        addToast(`Saved ${savedEvent.formConfig.title}`, {
          appearance: "success",
        });
      } catch (err) {
        console.log(err);
        setError(err);
        addToast(`Error ${err.message || err.statusText}`, {
          appearance: "error",
        });
      }
    },
    [accessToken, addToast, setLoading, setError,setEvents, state]
  );

  const updateEvent = useCallback(
    async (id, updates) => {
      if(!accessToken) return;
      let newEvent = null;
      setLoading();
      const { events } = state;
      try {
        const response = await fetch(`/api/v1/events/:${id}`, {
          method: "PUT",
          headers: accessToken
            ? { ...headers, Authorization: `Bearer ${accessToken}` }
            : headers,
          body: JSON.stringify(updates),
        });
        if (!response.ok) {
          throw response;
        }
        // Get index
        const index = events.findIndex((event) => event._id === id);

        // Get actual event
        const oldEvent = events[index];
        console.log(
          "🚀 ~ file: events.context.js ~ line 95 ~ updateEvent ~ oldEvent",
          oldEvent
        );

        // Merge with updates
        newEvent = {
          ...oldEvent,
          ...updates,
        };
        console.log(
          "🚀 ~ file: events.context.js ~ line 99 ~ updateEventt ~ newEventt",
          newEvent
        );
        // recreate the events array
        const updatedEvents = [
          ...events.slice(0, index),
          newEvent,
          ...events.slice(index + 1),
        ];
        console.log(
          "🚀 ~ file: event.context.js ~ line 120 ~ updatedEvents",
          updatedEvents
        );
        setEvents(updatedEvents);
        addToast(`Updated ${newEvent.formConfig.title}`, {
          appearance: "success",
        });
      } catch (err) {
        console.log(err);
        setError(err);
        addToast(`Error: Failed to update ${newEvent.formConfig.title}`, {
          appearance: "error",
        });
      }
    },
    [accessToken, addToast, setError, setLoading, setEvents, state]
  );

  const deleteEvent = useCallback(
    async (id) => {
      if(!accessToken) return;
      let deletedEvent = null;
      setLoading();
      const { events } = state;
      try {
        const response = await fetch(`/api/v1/events/:${id}`, {
          method: "DELETE",
          headers: accessToken
            ? { ...headers, Authorization: `Bearer ${accessToken}` }
            : headers,
        });
        if (response.status !== 204) {
          throw response;
        }
        // Get index
        const index = events.findIndex((event) => event._id === id);
        deletedEvent = events[index];
        // recreate the events array without that event
        const updatedEvents = [
          ...events.slice(0, index),
          ...events.slice(index + 1),
        ];
        setEvents(updatedEvents);
        addToast(`Deleted ${deletedEvent.formConfig.title}`, {
          appearance: "success",
        });
      } catch (err) {
        console.log(err);
        setError(err);
        addToast(`Error: Failed to update ${deletedEvent.formConfig.title}`, {
          appearance: "error",
        });
      }
    },
    [accessToken, addToast, setError, setLoading, setEvents, state]
  );

  

  return (
    <EventsContext.Provider
      value={{
        events,
        loading,
        error,
        loaded,
        fetchEvents,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};
