import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  Container,
  Input,
  Label,
  BtnAdd,
  Error,
  FormCont,
} from './FormContact.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('Phone number is required'),
});

export const FormContact = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    addContact(name, number);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <FormCont>
            <Label>
              Name
              <Input type="text" name="name" placeholder="Enter name" />
              <Error name="name" component="div" className="error" />
            </Label>
            <Label>
              Phone number
              <Input
                type="tel"
                name="number"
                placeholder="Enter phone number"
              />
              <Error name="number" component="div" className="error" />
            </Label>
            <BtnAdd type="submit" disabled={!isValid || !dirty}>
              Add contact
            </BtnAdd>
          </FormCont>
        )}
      </Formik>
    </Container>
  );
};

FormContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// export class FormContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { addContact } = this.props;
//     addContact(name, number);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     const isFormEmpty = !name || !number;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             placeholder="Enter name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label>
//           Phone number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             placeholder="Enter phone number"
//             onChange={this.handleChange}
//             value={number}
//           />
//         </label>
//         <button type="submit" disabled={isFormEmpty}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
