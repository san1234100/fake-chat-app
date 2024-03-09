const FormSelect = ({name,placeholder}) => {
  return (
    <div className="flex flex-col space-y-1 my-3">
      <select name={name} id={name} className="px-4 py-2 bg-gray-200 rounded outline-none">
         <option value="">{placeholder}</option>
         <option value="2G">2G</option>
         <option value="3G">3G</option>
         <option value="4G">4G</option>
      </select>
    </div>
  );
};

export default FormSelect;
