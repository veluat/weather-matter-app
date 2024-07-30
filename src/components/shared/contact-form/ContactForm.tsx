import React, {useContext, useRef} from 'react'
import {useFormik} from 'formik'
import s from './ContactForm.module.scss'
import emails from '@emailjs/browser'
import {LoadingIndicator} from '../loading-indicator'
import {LocaleContext} from '../../../utils'
import {ContactFormData} from '../../../data'

export const ContactForm = () => {
  const {locale} = useContext(LocaleContext)
  const formRef = useRef(null)
  const [loading, setLoading] = React.useState(false)
  const [myMessages, setMyMessages] = React.useState('')
  const [error, setError] = React.useState('')

  const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID
  const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID
  const emailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY

  type InitialValuesType = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const formik = useFormik<InitialValuesType>({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      validate: (values) => {
        const errors: Partial<InitialValuesType> = {}
        if (!values.name) {
          errors.name = ContactFormData[locale].errorsName
        }
        if (!values.email) {
          errors.email = ContactFormData[locale].errorsEmail
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = ContactFormData[locale].errorsEmailInvalid
        }
        if (!values.subject) {
          errors.subject = ContactFormData[locale].errorsSubject
        }
        if (!values.message) {
          errors.message = ContactFormData[locale].errorsMessage
        }
        return errors
      },
      onSubmit: () => {
        if (emailServiceId && emailTemplateId && emailPublicKey && formRef.current) {
          setLoading(true)
          emails.sendForm(emailServiceId, emailTemplateId, formRef.current, emailPublicKey)
            .then((res) => {
              setMyMessages(ContactFormData[locale].sendingOK)
              setError('')
              formik.resetForm()
              console.log('Response:', res)
            })
            .catch((error) => {
              setError(ContactFormData[locale].sendingFAIL)
              console.error('Error:', error)
            })
            .finally(() => {
              setLoading(false)
            })
        }
      }
    }
  )

  const myMessageClose = () => {
    setError('')
    setMyMessages('')
  }
  const finallyStyles = error ? `${s.error}` : `${s.error} ${s.hide}`

  return (
    <form ref={formRef} className={s.form} onSubmit={formik.handleSubmit}>
      <div className={s.block}>
        <div className={s.space}>
          <label htmlFor='name'>{ContactFormData[locale].labelName}</label>
          <input type='text' disabled={loading} className={s.input}
                 placeholder={ContactFormData[locale].placeholderName} {...formik.getFieldProps('name')} />
          <div className={finallyStyles}>{formik.touched.name && formik.errors.name && formik.errors.name}</div>
        </div>
        <div className={s.space}>
          <label htmlFor='email'>{ContactFormData[locale].labelEmail}</label>
          <input type='text' disabled={loading} className={s.input}
                 placeholder={ContactFormData[locale].placeholderEmail} {...formik.getFieldProps('email')} />
          <div className={finallyStyles}>{formik.touched.email && formik.errors.email && formik.errors.email}</div>
        </div>
        <div className={s.space}>
          <label htmlFor='subject'>{ContactFormData[locale].labelSubject}</label>
          <input type='text' disabled={loading} className={s.input}
                 placeholder={ContactFormData[locale].placeholderSubject} {...formik.getFieldProps('subject')} />
          <div
            className={finallyStyles}>{formik.touched.subject && formik.errors.subject && formik.errors.subject}</div>
        </div>
      </div>
      <div className={s.block}>
        <div className={s.space}>
          <label htmlFor='message'>{ContactFormData[locale].labelMessage}</label>
          <textarea className={s.textarea} disabled={loading}
                    placeholder={ContactFormData[locale].labelMessage} {...formik.getFieldProps('message')}></textarea>
          <div
            className={finallyStyles}>{formik.touched.message && formik.errors.message && formik.errors.message}</div>
        </div>
        {error && (
          <div className={s.responseError}>
            {error}
            <div className={s.errorClose} onClick={myMessageClose}>close</div>
          </div>
        )}
        {myMessages && (
          <div className={s.responseSuccess}>
            {myMessages}
            <div className={s.successClose} onClick={myMessageClose}>close</div>
          </div>
        )}
        {loading ?
          <div className={s.submitBtn}>
            <LoadingIndicator/>
          </div>
          : <button type='submit' className={s.submitBtn} disabled={loading}>
            <span>{ContactFormData[locale].sending}</span>
          </button>}
      </div>
    </form>
  )
}