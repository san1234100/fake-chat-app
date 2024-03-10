const RecipientChat = ({msg='hello',date}) => {
    return ( 
      <div className="bg-emerald-200 flex items-center px-4 py-1 w-fit rounded-md ms-auto my-2">
      <span>{msg}</span>
      <small className="text-[11px] ps-1 font-normal mt-3">{`${Math.abs(
        date.getHours() - 12
      )}:${date.getMinutes()}PM`}</small>
    </div>
     );
}
 
export default RecipientChat;