export default function Tooltip({ message, children }) {
    return (
      <div className="group relative flex flex-col items-center justify-center">
        {children}
        <div className="absolute left-0 top-10 ml-auto mr-auto w-80 -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
            <div className="rounded bg-white border border-gray-300 p-2 text-left text-xs text-black">
              {message}
            </div>
        </div>
      </div>
    );
  }