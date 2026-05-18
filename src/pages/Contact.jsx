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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Details */}
          <div className="space-y-6 bg-white/5 p-6 md:p-8 rounded-xl border border-white/10">
            <div>
              <h2 className="mb-2 font-bold text-2xl text-white">Contact Info</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Have a question or need support? We're here to help you with your electronics journey.
              </p>
            </div>
            
            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400">Address</h3>
                <p className="text-white text-lg font-medium">Muridke, Lahore</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400">Email</h3>
                <p className="text-white text-lg font-medium">support@zaptro.com</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400">Phone</h3>
                <p className="text-white text-lg font-medium">+92 312-047-6372</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Your Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Your Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-1.5">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 font-medium">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 font-semibold text-white py-3.5 rounded-xl shadow-lg transition duration-300 active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
