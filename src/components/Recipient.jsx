import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

const Recipient = () => {
    return ( 
        <form action="" className="bg-white w-full p-5 rounded-xl">
          <FormInput
          label={"User Name"}
          type={"text"}
          name={"userName"}
          placeholder={"Enter user name"}
          />
           <FormInput
          label={"Last seen"}
          type={"text"}
          name={"lastseen"}
          placeholder={"Enter last seen"}
          />
          
         <FormInput
          label={"Time"}
          type={"time"}
          name={"time"}
          />
         <FormTextArea
         label={"Message"}
         placeholder={"Enter your message"}
         />
        </form>
     );
}
 
export default Recipient;