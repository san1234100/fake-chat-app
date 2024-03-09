import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

const Recipient = () => {
  return (
    <form className="bg-white w-full p-5 rounded-xl" onSubmit={(e)=>e.preventDefault()}>
      <div className="font-semibold text-xl">Recipient Message</div>
      <FormTextArea label={"Message"} placeholder={"Enter your message"} />
      <button className="bg-blue-400 px-4 py-2 text-white rounded hover:bg-blue-500">
        Send message
      </button>
    </form>
  );
};

export default Recipient;
