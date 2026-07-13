import { useState, useRef, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaAsterisk } from 'react-icons/fa6';
import styled from 'styled-components';
import Select from 'react-select';

const StyledGroup = styled(Form.Group)`
  margin-bottom: 15px;
`;

const StyledLabel=styled.label`
display:flex;
align-items:center;
text-transform:capitalize;


`
const InputGroup = ({ label, name, placeholder, required, formRef }) => (
  <StyledGroup>
    <StyledLabel htmlFor={name}><p>{label}</p> {required && <sup><FaAsterisk size={8} className='text-danger' /></sup>}</StyledLabel>
    <Form.Control
      onChange={(e) => { formRef.current[name] = e.target.value; }}
      name={name}
      placeholder={placeholder}
    />
  </StyledGroup>
);


const DateInputGroup = ({ label, name, placeholder, required, formRef }) => (
  <StyledGroup>
    <StyledLabel htmlFor={name}><p>{label}</p> {required && <sup><FaAsterisk size={8} className='text-danger' /></sup>}</StyledLabel>
    <Form.Control
    type='date'
      onChange={(e) => { formRef.current[name] = e.target.value; }}
      name={name}
      placeholder={placeholder}
    />
  </StyledGroup>
);

const NumberInputGroup = ({ label, name, placeholder, required, formRef }) => (
  <StyledGroup>
    <StyledLabel htmlFor={name}><span>{label} {required && <sup><FaAsterisk size={8} className="text-danger" /></sup>}</span></StyledLabel>
    <Form.Control type='number'
      onChange={(e) => { formRef.current[name] = e.target.value; }}
      name={name}
      placeholder={placeholder}
    />
  </StyledGroup>
);

const TextareaGroup = ({ label, name, placeholder, required, formRef }) => (
  <StyledGroup>
    <StyledLabel htmlFor={name}><p>{label}</p> {required && <sup><FaAsterisk size={8} className="text-danger" /></sup>}</StyledLabel>
    <textarea
      onChange={(e) => { formRef.current[name] = e.target.value; }}
      className="form-control"
      placeholder={placeholder}
    ></textarea>
  </StyledGroup>
);

const SelectGroup = ({ label, name, required, options = [], formRef, onChange, value, placeholder }) => {
  const formattedOptions = options.map(opt => ({
    value: opt.value,
    label: opt.name
  }));

  const selectedValue = formattedOptions.find(opt => opt.value === value) || null;

  const handleChange = (selectedOption) => {
    const val = selectedOption ? selectedOption.value : "";
    formRef.current[name] = val;
    if (onChange) onChange(val);
  };

  return (
    <StyledGroup>
      <StyledLabel htmlFor={name}>
        <p>{label}</p> {required && <sup><FaAsterisk size={8} className="text-danger" /></sup>}
      </StyledLabel>
      <Select
        name={name}
        value={selectedValue}
        options={formattedOptions}
        onChange={handleChange}
        isSearchable={true}
        isClearable={true}
        placeholder={placeholder || "Search and select..."}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: '#dee2e6',
            boxShadow: 'none',
            '&:hover': { borderColor: '#86b7fe' }
          })
        }}
      />
    </StyledGroup>
  );
};

function PopupModal({ show, onHide, fields, fn }) {
  const [loading, setLoading] = useState(false);
  const [inpErrors, setInpErrors] = useState([]);
  const formRef = useRef({});

  useEffect(() => {
    if (show) {
      fields.forEach(field => {
        if (field.value !== undefined) {
          formRef.current[field.name] = field.value;
        }
      });
    } else {
      formRef.current = {};
      setInpErrors([]);
      setLoading(false);
    }
  }, [show, fields]);

  const validateForm = (e) => {
    e.preventDefault();
    const errors = [];
    const requiredFields = fields.filter((field) => field.required);
    const unfilledInputs = requiredFields.filter((x) => !formRef.current[x.name]);

    unfilledInputs.forEach((inp) => {
      errors.push(`Field for ${inp.name} is required`);
    });

    setInpErrors(errors);

    if (errors.length === 0) {
      setLoading(true);
      console.log(formRef.current)
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {inpErrors.map((err, index) => (
          <p key={index} className="text-danger" style={{ textTransform: 'capitalize' }}>
            {err}
          </p>
        ))}
        <Form onSubmit={validateForm}>
          {fields.map((field, index) => {
            let Component;
            switch (field.type) {
              case 'select': Component = SelectGroup; break;
              case 'textarea': Component = TextareaGroup; break;
              case "number": Component=NumberInputGroup; break;
              case "date":Component= DateInputGroup;break;
              default: Component = InputGroup; break;
            }
            return <Component key={index} {...field} formRef={formRef} />;
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={validateForm}>
          {loading?"Saving":"Save"} Changes
          {loading && <Spinner style={{ marginLeft: '2px' }} size="sm" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;