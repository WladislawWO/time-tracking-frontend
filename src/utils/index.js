export const getTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  let res = `${hours || ''}${hours && minutes ? '.' : ''}${minutes}`;
  if (minutes && !hours) {
    res += 'm';
  } else if (hours) {
    res += 'h';
  }

  return res;
};
