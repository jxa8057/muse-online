const getErrorMessageForField = (fieldName, formikInstance) => {
  if (formikInstance.errors[fieldName] && formikInstance.touched[fieldName])
    return formikInstance.errors[fieldName];
  return null;
};

export { getErrorMessageForField };
