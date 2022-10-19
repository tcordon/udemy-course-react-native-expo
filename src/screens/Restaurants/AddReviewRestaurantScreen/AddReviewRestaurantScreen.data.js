import * as Yup from 'yup'

export function initialValues() {
  return {
    title: '',
    comment: '',
    rating: 3
  }
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required('El Titulo es Obligatorio'),
    comment: Yup.string().required('El comentario es Obligatorio'),
    rating: Yup.number().required('El Rating es Obligatorio')
  })
}
