import {ContactFormDataType} from './ContactFormType'

export const ContactFormData: ContactFormDataType = {
  en: {
    title: 'Feedback',
    labelName: 'Name',
    placeholderName: 'Enter your name...',
    labelEmail: 'Email',
    placeholderEmail: 'Enter your email...',
    labelSubject: 'Subject',
    placeholderSubject: 'Enter subject...',
    labelMessage: 'Message',
    placeholderMessage: 'Enter your message...',
    sending: 'Send Mail',
    sendingOK: 'Thanks for your interest! I will contact you as soon as it possible',
    sendingFAIL: 'Something is wrong while sending the message!',
    errorsName: 'Name is required',
    errorsEmail: 'Email is required',
    errorsEmailInvalid: 'Invalid email address',
    errorsSubject: 'Subject is required',
    errorsMessage: 'Message is required',
  },
  ru: {
    title: 'Обратная связь',
    labelName: 'Имя',
    placeholderName: 'Введите ваше имя...',
    labelEmail: 'Электронная почта',
    placeholderEmail: 'Введите адрес электронной почты...',
    labelSubject: 'Тема обращения',
    placeholderSubject: 'Тема обращения...',
    labelMessage: 'Сообщение',
    placeholderMessage: 'Написать сообщение...',
    sending: 'Отправить',
    sendingOK: 'Спасибо за ваш интерес! Я свяжусь с вами как можно скорее',
    sendingFAIL: 'Сообщение не отправлено. Пожалуйста, свяжитесь другим способом.',
    errorsName: 'Введите имя',
    errorsEmail: 'Введите Email',
    errorsEmailInvalid: 'Неверный адрес электронной почты',
    errorsSubject: 'Введите тему',
    errorsMessage: 'Введите текст',
  }
}