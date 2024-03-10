import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import UserChat from "./UserChat";
const User = ({
  headerData,
  setHeaderData,
  batteryPercent,
  setbatteryPercent,
  mobileNetwork,
  setMobileNetwork,
  userMsg,
  setUserMsg,
  msgList,
  setMsgList
}) => {
  const date = new Date();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setHeaderData({ ...headerData, [name]: value });
  };
  const handleFormMsg = (e) =>{
    e.preventDefault();
    setMsgList([...msgList,<UserChat msg={userMsg} key={msgList.length+1} date={date}/>])
  }
  return (
    <form
      className="bg-white w-full p-5 rounded-xl"
      onSubmit={handleFormMsg}
    >
      <FormInput
        label={"User Name"}
        type={"text"}
        name={"userName"}
        placeholder={"Enter user name"}
        value={headerData.userName}
        handleOnChange={handleInput}
      />
      <FormInput
        label={"Last seen"}
        type={"text"}
        name={"lastseen"}
        placeholder={"Enter last seen"}
        value={headerData.lastseen}
        handleOnChange={handleInput}
      />
      <FormSelect
        name={"mobilenewtwork"}
        placeholder={"-- Select network --"}
        mobileNetwork={mobileNetwork}
        setMobileNetwork={setMobileNetwork}
      />
      <div>
        <label htmlFor="batteryPercent">Battery Percentage</label>
        <input
          type="range"
          id="batteryPercent"
          className="accent-blue-500 w-full"
          min="0"
          max="100"
          value={batteryPercent}
          onChange={(e)=>setbatteryPercent(e.target.value)}
        />
      </div>
      <FormInput
        label={"Time"}
        type={"time"}
        name={"time"}
        value={headerData.time}
        handleOnChange={handleInput}
      />
      <FormTextArea 
      label={"Message"} 
      placeholder={"Enter your message"}
      msg={userMsg}
      handleMsg={(e)=>setUserMsg(e.target.value)}
       />
      <button className="bg-blue-400 px-4 py-2 text-white rounded hover:bg-blue-500">
        Send message
      </button>
    </form>
  );
};

export default User;
