import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


export default function EditContactForm(props) {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Имя должно быть больше 2 символов')
            .required('Имя обязательно для заполнения'),
        phone: Yup.string()

    });

  return (
    <Formik
      initialValues={{name: props.name, phone: props.phone}}
      validationSchema={validationSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 3));
      }}
    >
      <Form>
        <Field name="name" type="text" placeholder="Имя"/>
        <ErrorMessage name="name" />
        <Field name="phone" type="text" placeholder="Телефон"/>
        <ErrorMessage name="phone" />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={props.cancel}>Отмена</button>
      </Form>
    </Formik>
  );
};