

const Navbar = () => {
  return (
    <nav className="bg-slate-950 sticky top-0 left-0 right-0 z-10 flex justify-center p-4 gap-10 text-slate-400">
      <span className="flex gap-10">
        <h1  className="cursor-pointer ">Movies</h1>
        <h1 className="cursor-pointer ">Series</h1>
      </span>
      <input type="text" placeholder="search..." />
      <h1 className="cursor-pointer ">user</h1>
    </nav>
  )
}

export default Navbar
