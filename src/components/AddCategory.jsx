import PropTypes from "prop-types";
import { useState } from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    console.log(e);
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const category = inputValue.trim();
    if(category.length <= 1) return;
    onNewCategory(category)
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add your category"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory;
