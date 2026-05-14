
const About = () => {
  return (
    <div className=" px-4 py-5 my-10 bg-white max-w-6xl mx-auto rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200">
      <h1 className=" mb-5 mt-5 text-center font-bold text-4xl">
        About Zaptro
      </h1>
      <p className=" text-lg">
        Welcome to{" "}
        <span className="text-red-600 text-lg font-semibold">Zaptro</span>,
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae
        dignissimos aperiam numquam consequuntur blanditiis assumenda vero rerum
        maxime placeat.
      </p>
      <h2 className="mb-3 mt-5 text-red-600 font-semibold py-3 text-2xl">
        Our Mission
      </h2>
      <p className=" text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sequi
        numquam saepe nulla amet esse provident officia, magni vitae repellendus
        dignissimos repellat natus consequatur?
      </p>
      <h2 className="mb-6 mt-7 text-red-600 font-semibold text-2xl">
        Why Choose Zaptro?
      </h2>
      <ul>
        <li className="text-lg">
          Ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="text-lg">
          Dolor sit amet consectetur adipisicing elit.
        </li>
        <li className="text-lg">Sit amet consectetur adipisicing elit.</li>
        <li className="text-lg">
          Delor sit amet consectetur adipisicing elit.
        </li>
        <li className="text-lg">submit amet consectetur adipisicing elit.</li>
      </ul>
      <h2 className="mb-6 mt-7 text-red-600 font-semibold text-2xl">
        Our Vision
      </h2>
      <p className=" text-lg">
        Amet consectetur adipisicing elit. Eius sequi numquam saepe nulla amet
        esse provident officia, magni vitae repellendus dignissimos repellat
        natus consequatur.
      </p>
      <h2 className="mb-6 mt-7 text-red-600 text-center font-semibold text-2xl">
        Join the Zaptro Family
      </h2>
      <p className="text-lg text-center">
        {" "}
        Eius sequi numquam saepe nulla amet esse provident officia, magni vitae
        repellendus dignissimos repellat natus consequatur.
      </p>
      <div className="flex flex-col items-center justify-center mt-5 mb-3">
        <a href="/products">
          <button
            className=" bg-red-600 px-6 py-2 transition duration-300 rounded-md
       text-white hover:bg-red-700"
          >
            Start Shopping
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
