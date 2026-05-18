const getPages = (current, total) => {
  let pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};

const Pagination = ({ pageHandler, page, totalDynamicPage }) => {
  return (
    <div className="mt-12 flex items-center justify-center space-x-2 py-4">
      {/* Previous Navigator Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-4 py-2 text-xs font-bold tracking-wide uppercase rounded-xl transition-all duration-200 ${
          page === 1 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60" 
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-500 shadow-xs cursor-pointer active:scale-95"
        }`}
      >
        Prev
      </button>

      {/* Pages Array Badges Stack maps mapping layout line */}
      <div className="flex items-center gap-1.5">
        {getPages(page, totalDynamicPage)?.map((item, index) => {
          const isNumber = typeof item === "number";
          return (
            <button
              key={index}
              disabled={!isNumber}
              onClick={() => isNumber && pageHandler(item)}
              className={`min-w-9 h-9 flex items-center justify-center text-xs font-bold rounded-xl transition-all duration-200 ${
                !isNumber 
                  ? "text-gray-400 cursor-default px-1" 
                  : item === page
                    ? "bg-red-500 text-white shadow-md shadow-red-500/20 scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 cursor-pointer active:scale-95"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Next Navigator Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === totalDynamicPage}
        className={`px-4 py-2 text-xs font-bold tracking-wide uppercase rounded-xl transition-all duration-200 ${
          page === totalDynamicPage 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60" 
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-red-500 shadow-xs cursor-pointer active:scale-95"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;