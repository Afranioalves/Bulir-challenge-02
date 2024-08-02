import {toast} from 'react-toastify';

const position = "top-center"

export const toastSuccess = (text:string) =>
  toast.success(text, {
    className: "foo-bar",
    autoClose: 2000,
    pauseOnHover: false,
    position,
    theme:'light'
});

export const toastInfo = (text:string) =>
  toast.info(text, {
    className: "foo-bar",
    autoClose: 2000,
    pauseOnHover: false,
    position,
    theme:'light'
  });

  export const toastWarn = (text:string) =>
  toast.warn(text, {
    className: "foo-bar",
    autoClose: 2000,
    pauseOnHover: false,
    position
  });

  export const toastError = (text:string) =>
  toast.error(text, {
    className: "foo-bar",
    autoClose: 2000,
    pauseOnHover: false,
    position,
     theme:'light'
  });

  export const loading = (toastId:any, text:string, type:any) => {
    toast.update(toastId, {
      render: text,
      type: type,
      isLoading: false,
      autoClose: 2000,
      className: "foo-bar",
      position
    });
  };