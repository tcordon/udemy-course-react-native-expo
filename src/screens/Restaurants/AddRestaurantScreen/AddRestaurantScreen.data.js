import * as Yup from 'yup'

export function initialValues () {
  return {
    name: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    location: null,
    images: []
  }
}

export function validationSchema () {
  return Yup.object({
    name: Yup.string().required('Campo Obligatorio'),
    address: Yup.string().required('Campo Obligatorio'),
    phone: Yup.string().required('Campo Obligatorio'),
    email: Yup.string().required('Campo Obligatorio').email('El elmail no es valido'),
    description: Yup.string().required('Campo Obligatorio'),
    location: Yup.object().required('La localización es requerida'),
    images: Yup.array()
      .min(1, 'Se requiere una imagen como mínimo')
      .required('La imagen es requerida')
  })
}
