import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultipleSelect = ({ onChange, value, options, className }) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  const onOptionsChange = (value) => {
    const values = value.map((v) => v.value);
    return onChange(values);
  };

  return (
    <div className={className}>
      <Select
        isMulti
        options={options}
        value={defaultValue(options, value)}
        onChange={onOptionsChange}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? "#323232" : "#323232",
            width: "525px",
            height: "57px",
            alignContent: "center",
            border: "none",
            borderRadius: "4px",
            borderEndEndRadius: "4px",
          }),
        }}
      />
    </div>
  );
};

export default MultipleSelect;

MultipleSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  options: PropTypes.array,
  className: PropTypes.string,
};
