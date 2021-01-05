import {useFormik} from 'formik';

export default function Contact(props) {
    const formik = useFormik({
        initialValues: {
            name: props.contact.name,
            phoneNum:props.contact.phone,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 3));
          },
    });
    return (
        <div onSubmit={formik.handleSubmit}>
 <label htmlFor="firstName">Имя</label>
    <input
        id="name"
        type="text"
        {...formik.getFieldProps('name')}
    />

    <label htmlFor="phoneNum">Телефон</label>
    <input
        id="phoneNum"
        type="text"
        {...formik.getFieldProps('phoneNum')}
    />
    <button type="submit">Редактировать</button>

        </div>
    );
}