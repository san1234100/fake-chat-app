import RecipientChat from "./RecipientChat";
import UserChat from "./UserChat";

const ChatBox = ({msgList}) => {
  const date = new Date();
  const arr=[<UserChat msg={"Hello"} date={date}/>,<RecipientChat msg={"Hello"} date={date}/>]
  return (
    <main>
      {/* rounded-b-xl */}
    <div className=" p-5 bg-[url('./src/assets/images/chatBg.png')] bg-cover h-[450px]">
     {msgList.map(val=>val)} 
    </div>
   <div className="relative">
   <input type="text" 
    className="w-full px-10 py-3 text-lg outline-none  rounded-b-xl"
    placeholder="Message"
    />
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="absolute bottom-2 left-2 cursor-pointer text-gray-600"><g fill="none"><path fill="currentColor" d="M10.988 11.798v.781a2.811 2.811 0 0 1-.351 1.45a2.399 2.399 0 0 1-.984.931c-.44.224-.93.336-1.423.325a3.108 3.108 0 0 1-1.581-.395a2.688 2.688 0 0 1-1.054-1.133A3.751 3.751 0 0 1 5.208 12c-.006-.473.07-.943.228-1.388a2.9 2.9 0 0 1 .633-1.028c.269-.283.595-.504.957-.65c.374-.15.775-.225 1.178-.22c.343-.002.684.051 1.01.159c.297.1.576.248.825.439c.24.19.443.422.598.685c.155.27.256.57.298.878H9.557a1.406 1.406 0 0 0-.175-.404a1.045 1.045 0 0 0-.29-.298a1.23 1.23 0 0 0-.387-.194a1.696 1.696 0 0 0-.483-.035c-.31-.01-.615.073-.878.237a1.599 1.599 0 0 0-.571.712c-.15.358-.223.745-.211 1.133c-.008.388.06.773.202 1.133c.123.287.324.533.58.712c.26.17.567.256.878.246c.27.008.539-.05.782-.167a1.15 1.15 0 0 0 .518-.492c.108-.206.165-.435.167-.668H8.283v-.992zm2.462-2.882v6.211a.088.088 0 0 1-.087.088h-1.177a.08.08 0 0 1-.065-.023a.08.08 0 0 1-.023-.065v-6.21a.08.08 0 0 1 .053-.085a.08.08 0 0 1 .035-.003h1.177a.088.088 0 0 1 .088.087m1.108 6.211v-6.21a.088.088 0 0 1 .088-.088h4.146v1.115h-2.758a.088.088 0 0 0-.088.088v1.344a.097.097 0 0 0 .088.088h2.512v1.115h-2.512a.088.088 0 0 0-.088.088v2.46a.08.08 0 0 1-.088.088h-1.177a.089.089 0 0 1-.087-.009a.088.088 0 0 1-.036-.079"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.625 3.75h-9.25c-2.554 0-4.625 2.052-4.625 4.583v7.334c0 2.531 2.07 4.583 4.625 4.583h9.25c2.554 0 4.625-2.052 4.625-4.583V8.333c0-2.531-2.07-4.583-4.625-4.583"/></g></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" className="absolute right-12 bottom-2 cursor-pointer text-gray-600 rotate-45"><path fill="currentColor" d="M18 15.75q0 2.6-1.825 4.425T11.75 22q-2.6 0-4.425-1.825T5.5 15.75V6.5q0-1.875 1.313-3.187T10 2q1.875 0 3.188 1.313T14.5 6.5v8.75q0 1.15-.8 1.95t-1.95.8q-1.15 0-1.95-.8T9 15.25V6h2v9.25q0 .325.213.538t.537.212q.325 0 .538-.213t.212-.537V6.5q-.025-1.05-.737-1.775T10 4q-1.05 0-1.775.725T7.5 6.5v9.25q-.025 1.775 1.225 3.013T11.75 20q1.75 0 2.975-1.237T16 15.75V6h2z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256" className="absolute cursor-pointer text-gray-600 right-2 bottom-2"><path fill="currentColor" d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48M96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6"></path></svg>
   </div>
    </main>
  );
};

export default ChatBox;
