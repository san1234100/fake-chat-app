const Header = ({headerData,mobileNetwork,batteryPercent}) => {
    return ( 
        <div className="bg-blue-800 rounded-t-xl text-white py-2 px-3">
            <div className="flex items-center justify-between">
                <small>{headerData.time}</small>
                {/* <div>{JSON.stringify(headerData)}</div> */}
                <div className="flex items-center">
                <small>{mobileNetwork}</small>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 21v-1m18 1V3m-9 18v-9m4.5 9V8m-9 13v-5"/></svg>
                <div className="ps-1 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M23 10v4"/><path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"/></g></svg>
                <small className="absolute bottom-1 left-[9px] text-[9px]">{batteryPercent}</small>
                </div>
                </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" className="cursor-pointer"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"></path></svg> 
            <img src={`https://ui-avatars.com/api/?name=${headerData.userName}&background=random&color=fff`}
            alt="Vignesh" className="rounded-full w-12"/>
            <div className="select-none">
                <h1 className="font-semibold text-lg">{headerData.userName}</h1>
                <p className="text-gray-400">{headerData.lastseen}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" className="cursor-pointer"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 20 20" className="cursor-pointer"><g fill="currentColor"><circle cx="10" cy="15" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="10" cy="5" r="2"></circle></g></svg>
            </div>
        </div>
     );
}
 
export default Header;