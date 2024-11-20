const Navbar = () => {
  return (
    <div>
      <div className="py-1.5 bg-black text-white font-jbmono flex items-center justify-between">
        <div className="sm:pl-10 pl-5">
          <p className="text-4xl border-white border-2 pl-1 cursor-pointer">R.</p>
        </div>
        <div className="sm:pr-10 pr-5 flex text-lg">
          {/* <p className=" px-3 py-1 hover:rounded-md hover:bg-neutral-900 cursor-pointer">Home</p> */}
          {/* <p className="px-3 py-1 hover:rounded-md hover:bg-neutral-900 cursor-pointer">About & Contact</p> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
