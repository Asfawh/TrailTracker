import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}

function AccountModal({ title, options, handleSelect }) {
  return (
    <DropdownButton
      title={title}
      size="sm"
      variant="dark"
      onSelect={handleSelect}>
      {options.map((option) => (
        <Dropdown.Item key={option} eventKey={option}>
          {capitalize(option)}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
export default AccountModal;
