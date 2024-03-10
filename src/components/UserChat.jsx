const UserChat = ({msg='hello',date}) => {
    return ( 
        <div className="bg-white px-4 py-1 w-fit rounded-md">
        <span>{msg}</span>
        <small className="text-[11px] ps-1 font-normal mt-3">{`${Math.abs(
          date.getHours() - 12
        )}:${date.getMinutes()}PM`}</small>
      </div>
     );
}
 
export default UserChat;