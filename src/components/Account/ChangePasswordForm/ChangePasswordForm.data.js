import * as Yup from 'yup'

export const initialValues = () => {
  return {
    actualPassword: '',
    newPassword: '',
    reNewPassword: ''
  }
}

export const validationSchema = () => {
  return Yup.object({
    actualPassword: Yup.string()
      .required('La contraseña actual es obligatoria'),
    newPassword: Yup.string()
      .required('La nueva contraseña es obligatoria'),
    reNewPassword: Yup.string()
      .required('Contraseña de verificación obligatoria')
      .oneOf([Yup.ref('newPassword')], 'Las contraseñas deben coincidir')
  })
}
