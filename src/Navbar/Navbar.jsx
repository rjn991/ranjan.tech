const Navbar = () => {
  return (
    <div>
      <div className="py-1.5 bg-black text-white font-jbmono flex items-center justify-between">
        <div className="pl-10">
          <p className="text-4xl border-white border-2 pl-1 cursor-pointer">R.</p>
        </div>
        <div className="pr-10 flex text-lg">
          <p className="mr-10 px-3 py-1 hover:rounded-md hover:bg-neutral-900 cursor-pointer">Home</p>
          <p className="px-3 py-1 hover:rounded-md hover:bg-neutral-900 cursor-pointer">Github</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
