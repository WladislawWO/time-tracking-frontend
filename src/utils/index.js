export const getTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  let res = `${((hours === 0 && minutes) || (!hours && !minutes)) ? '' : hours}${hours && minutes ? '.' : ''}${minutes === 0 && hours ? '' : minutes}`;
  if (minutes && !hours) {
    res += 'm';
  } else if (hours) {
    res += 'h';
  }

  return res;
};

export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}.${minutes}`;
};

export const getTimeLabels = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  let res = '';
  if (minutes && !hours) {
    res += 'm';
  } else if (hours) {
    res += 'h';
  }

  return res;
};
