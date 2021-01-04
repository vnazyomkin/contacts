import {ErrorMessage, useFormik} from 'formik';

export default function EditContactForm() {
    const validate = value => {
        const errors = {};
        if (!value.name) {
            errors.name = 'Поле "Имя" обязательно для заполнения';
        } else if (value.name.length < 3) {
            errors.name = 'Длина имени должна бытыь больше двух символов';
        }
        return errors;
    };

    const formik = useFormik({
      initialValues: {
        name: '',
        phoneNum: '',
      },
      validate,
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
        value={formik.values.name} 
    />
    {formik.errors.name ? <div>{formik.errors.name}</div> : null}
    <label htmlFor="phoneNum">Телефон</label>
    <input
        id="phoneNum"
        name="phoneNum" 
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNum} 
    />
    
    <button type="submit">Сохранить</button>
    </form>
  );
}