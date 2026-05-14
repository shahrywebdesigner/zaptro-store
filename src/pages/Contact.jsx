import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl ">
        <h1 className=" font-bold text-4xl text-center mb-10 text-white ">
          Get in Touch with{" "}
          <span className=" text-red-500 font-bold text-4xl">Zaptro</span>{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-1">
            <h2 className=" mb-3 font-bold text-2xl text-white">
              Contact Info
            </h2>
            <p className="text-white mb-10">
              Have a question or need support? We're here to help you with your
              electronics journey.
            </p>
            <h2 className=" font-bold text-white">Address</h2>
            <p className=" text-white">Muridke,Lahore </p>
            <h2 className=" font-bold text-white">Email</h2>
            <p className=" text-white">support@zaptro.com </p>
            <h2 className=" font-bold text-white">Phone</h2>
            <p className=" text-white">+92 312-047-6372 </p>
            </div>

          {/* form */}
          <div className="w-full p-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Your Name */}
              <div>
                <label className="block text-white mb-1 ">Your Name</label>
                  <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                class="w-full px-4 py-2 border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white mt-4 mb-1 ">Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                 class="w-full px-4 py-2 bg-white border border-white/30 text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Your Message */}
              <div>
                <label className="block text-white mt-4 mb-1 ">Your Message</label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-red-500 to-purple-500 mt-2 text-white py-3 rounded-xl hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
