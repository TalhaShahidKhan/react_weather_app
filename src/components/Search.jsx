export default function Search() {
  return (
    <form action="#">
      <div className="flex items-center px-3 py-2 space-x-2 transition-all border-b group focus-within:bg-black/30 border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="w-full text-xs text-white bg-transparent border-none outline-none placeholder:text-white md:text-base"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={Search} />
        </button>
      </div>
    </form>
  );
}
