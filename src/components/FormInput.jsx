const FormInput = ({label,name,type,placeholder}) => {
  return (
    <div className="flex flex-col space-y-1 my-3">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={""}
        className="px-4 py-2 bg-gray-200 rounded outline-none accent-blue-500"
      />
    </div>
  );
};

export default FormInput;
