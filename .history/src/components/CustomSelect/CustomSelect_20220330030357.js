import Select from "react-select/dist/declarations/src/Select";
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width }}) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export default CustomSelect = ({options}) => {
	return (
		<>
			<Select
			 styles={customStyles}
			 options={options}
			/>
		</>
	)
}