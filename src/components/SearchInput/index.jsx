export default function SearchInput() {
  return (
    <div className="flex items-center max-w-md mx-auto bg-dark-color rounded border-primary-color-dark border-2">
      <div className="w-full">
        <input
          type="search"
          className="w-full px-4 py-1 text-light-color rounded-full focus:outline-none bg-dark-color"
          placeholder="Digite aqui..."
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex items-center bg-primary-color-dark hover:bg-primary-color hover:rounded-r duration-125 justify-center w-12 h-12 text-white"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
