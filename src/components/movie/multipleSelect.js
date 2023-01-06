import React, { memo, useEffect, useRef } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultipleSelect = ({ onChange, value, options, className, success }) => {
  const selectRef = useRef(null);
  const defaultValueGenre = (options, value) => {
    if (typeof value === "string") {
      const genreList = [];
      const myvalues = value.split(",");
      for (let i = 0; i < myvalues?.length; i++) {
        const option = options.find((option) => option.value === myvalues[i]);
        genreList.push(option);
      }
      return genreList;
    }
  };

  const onOptionsChange = (value) => {
    const values = value?.map((v) => v.value);
    return onChange(values);
  };
  useEffect(() => {
    if (success) {
      selectRef.current.clearValue();
    }
  }, [success]);

  const nightRiderColor = "#323232";

  return (
    <div className={className}>
      <Select
        ref={selectRef}
        isMulti
        options={options}
        value={defaultValueGenre(options, value)}
        onChange={onOptionsChange}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused && nightRiderColor,
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

export default memo(MultipleSelect);

MultipleSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  success: PropTypes.any,
};
