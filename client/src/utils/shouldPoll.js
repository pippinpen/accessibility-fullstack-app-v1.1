// a fn that returns true or false on whether to fetch an update from the server
// the fn takes in the maximum time it will wait to fetch (maxPollingTime), the minimum time it will wait (minPollingTime), the time the server was last fetched from (lastUpdateTime) and whether or not the data is different (dataHasChanged)
// if it has been more than maxPollingTime, it will return true to fetch the server data
// if the data has changed and it has been atleast minPollingTime, it will return true to fetch the server data
// if the data has not changed and it is halfway through the min/max time, it will return true, else false

const shouldPoll = (
  minPollingMilliseconds,
  maxPollingMilliseconds,
  lastUpdateTime,
  dataHasChanged,
) => {
  if (lastUpdateTime + maxPollingMilliseconds < Date.now()) {
    return true;
  }
  if (dataHasChanged && lastUpdateTime + minPollingMilliseconds < Date.now()) {
    return true;
  }
  if (
    !dataHasChanged &&
    lastUpdateTime + maxPollingMilliseconds > Date.now() &&
    lastUpdateTime + (maxPollingMilliseconds - minPollingMilliseconds) <
      Date.now()
  ) {
    return true;
  }
  return false;
};

export default shouldPoll;
