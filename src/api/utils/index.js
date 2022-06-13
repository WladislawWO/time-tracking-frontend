import { toast } from 'react-toastify';

export const handleErrors = (err) => {
  if (err.response.data.message) {
    toast.error(err.response.data.message);
  } else {
    err.response.data.errors.errors.map((error) => toast.error(`${error.param}: ${error.msg}`));
  }
};
