export interface IFormFieldValue {
  value: string;
  error: string;
}

export interface InitialContctFormState {
  name: IFormFieldValue;
  email: IFormFieldValue;
  phone: IFormFieldValue;
  subject: IFormFieldValue;
  message: IFormFieldValue;
}

export interface IInputField {
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errorMessage: string;
  placeholder: string;
}
