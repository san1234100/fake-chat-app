import RecipientChat from "./RecipientChat";
import UserChat from "./UserChat";

const ChatBox = ({msgList}) => {
  const date = new Date();
  const arr=[<UserChat msg={"Hello"} date={date}/>,<RecipientChat msg={"Hello"} date={date}/>]
  return (
    <div className="rounded-b-xl p-5 bg-[url('./src/assets/images/chatBg.png')] bg-cover h-[450px]">
     {msgList.map(val=>val)}
       
    </div>
  );
};

export default ChatBox;
