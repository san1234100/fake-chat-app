
import FormTextArea from "./FormTextArea";
import RecipientChat from "./RecipientChat";
const Recipient = ({recipientMsg,setRecipientMsg,msgList,
  setMsgList}) => {
    const date = new Date();
    const handleFormMsg = (e) =>{
      e.preventDefault();
      setMsgList([...msgList,<RecipientChat msg={recipientMsg} key={msgList.length+1} date={date}/>])
    }
  return (
    <form className="bg-white w-full p-5 rounded-xl" onSubmit={handleFormMsg}>
      <div className="font-semibold text-xl">Recipient Message</div>
      <FormTextArea 
       msg={recipientMsg}
       handleMsg={(e)=>setRecipientMsg(e.target.value)}
      label={"Message"} 
      placeholder={"Enter your message"} />
      <button className="bg-blue-400 px-4 py-2 text-white rounded hover:bg-blue-500">
        Send message
      </button>
    </form>
  );
};

export default Recipient;
