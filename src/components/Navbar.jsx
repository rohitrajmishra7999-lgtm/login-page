const Navbar = () => {
  return (
    <nav className="border border-2 p-7 flex items-center  bg-mauve-500 justify-between px-8 py-4 gap-9 ">
        <img src="/favicon.svg"/>
   <div className=" flex text-balance p-3 m-2 bg-blue-400 rounded-2xl"> health.com </div>
   <div className=" bg-amber-200 flex  p-3 justify-evenly items-center gap-5 px-9 m-3 ml-auto rounded-2xl  ">    
    <a href =" /">Home </a>
    <a href="/doctor"> doctor   </a>
    <a href="/about"> about </a>
    <a href ="/contactUs">  contactUs</a>
   </div>
   <div className="p-1.5 border border-2 bg-blue-500 text-amber-100 flex-col ">
   <span>  <a href="/login">  login</a> </span>
       </div>

   <button className="p-1 m-1.5 border-2 bg-fuchsia-400 flex-col-reverse ">  book your appointment </button>
   
</nav>
  );
}   
export default Navbar;