// fn to format the event date

const dateFormat = (date) => {
  const parsedDate = new Date(date);
  const language = 'en-GB';
  const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  const formattedDate = parsedDate.toLocaleDateString((language), dateOptions);
  return formattedDate;
}

export default dateFormat;