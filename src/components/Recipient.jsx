const Recipient = () => {
    return ( 
        <form action="" className="bg-white w-full p-5 rounded-xl">
           <div className="flex flex-col space-y-1">
            <label htmlFor="fullname">User Name</label>
            <input type="text" className="px-4 py-2 bg-gray-200 rounded outline-none" />
           </div>
        </form>
     );
}
 
export default Recipient;