const FormTextArea = ({label,name,placeholder}) => {
  return (
    <div className="flex flex-col space-y-1 my-3">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={""}
        className="px-4 py-2 bg-gray-200 rounded outline-none"
      ></textarea>
    </div>
  );
};

export default FormTextArea;
