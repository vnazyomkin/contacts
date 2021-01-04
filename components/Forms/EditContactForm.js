import {ErrorMessage, useFormik} from 'formik';
import * as Yup from 'yup';
import "yup-phone";


export default function EditContactForm() {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Имя должно быть больше 2 символов')
            .required('Имя обязательно для заполнения'),
        phoneNum: Yup.string()
            .phone(),

    });

    const formik = useFormik({
      initialValues: {
        name: '',
        phoneNum: '',
      },
      validationSchema,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 3));
      },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="firstName">Имя</label>
    <input
        id="name"
        name="name" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.errors.handleBlur}
        value={formik.values.name} 
    />
    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

    <label htmlFor="phoneNum">Телефон</label>
    <input
        id="phoneNum"
        name="phoneNum" 
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.errors.handleBlur}
        value={formik.values.phoneNum} 
    />
    {formik.errors.phoneNum ? <div>{formik.errors.phoneNum}</div> : null}
    <button type="submit">Сохранить</button>
    </form>
  );
}