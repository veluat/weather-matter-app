type ContactFormDataEntry = {
  title: string;
  labelName: string;
  placeholderName: string;
  labelEmail: string;
  placeholderEmail: string;
  labelSubject: string;
  placeholderSubject: string;
  labelMessage: string;
  placeholderMessage: string;
  sending: string;
  sendingOK: string;
  sendingFAIL: string;
  errorsName: string;
  errorsEmail: string;
  errorsEmailInvalid: string;
  errorsSubject: string;
  errorsMessage: string;
};

export type ContactFormDataType = {
  en: ContactFormDataEntry;
  ru: ContactFormDataEntry;
};