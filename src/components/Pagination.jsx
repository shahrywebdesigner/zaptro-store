const getPages = (current, total) => {
  let pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "....", total);
    } else if (current >= total - 2) {
      pages.push(1, "....", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "....", total);
    }
  }
  return pages;
};

const Pagination = ({ pageHandler, page, totalDynamicPage }) => {
  return (
    <div className="mt-10 flex space-x-4">
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`${page === 1 ? "bg-red-400" : "bg-red-500"}  cursor-pointer px-3 py-1 rounded-md text-white`}
      >
        Previous
      </button>
      {getPages(page, totalDynamicPage)?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              typeof item === "number" && pageHandler(item);
            }}
            className={`cursor-pointer ${item == page ? "font-bold rounded-full  px-3 py-1 bg-red-500 hover:bg-red-600" : ""}`}
          >
            {item}
          </span>
        );
      })}
      <button
        disabled={page === totalDynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`${page === totalDynamicPage ? "bg-red-400" : "bg-red-500"} cursor-pointer px-3 py-1 rounded-md text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
