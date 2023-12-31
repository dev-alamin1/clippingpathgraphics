import { useForm } from "react-hook-form";
import { AiFillSkype } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-8 md:py-32 border border-t-slate-300">
      <div className="w-11/12 mx-auto">
        <div className=" px-5  md:px-0 flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-2/5">
            <h1 className="text-4xl font-bold text-[#091d33] mb-3">
              Get in Touch
            </h1>
            <p className="mb-3 text-base">
              Clipping Path Graphics is one of the trusted Clipping Path Service
              Provider in 2022. We have the experience of working in this field.
              Almost 5 years and working with hundred clients from all over the
              world.
            </p>

            <div className="mb-3">
              <h2 className="text-xl font-bold text-[#091d33] mb-2 ">Call us</h2>

              <div className="flex justify-start items-center gap-1 text-base hover:text-orange-500 transition delay-100">
                  <FaPhone />
                <a href="tel:+1 (304) 574-8370">+1 (304) 574-8370</a>
              </div>

            </div>

            <div className="mb-3">
              <h2 className="text-xl font-bold text-[#091d33] mb-2">Skype</h2>

              <div className="flex justify-start items-center gap-1 text-base hover:text-orange-500 transition delay-100">
                <AiFillSkype />
                <a href="skype:rahim.minu1">rahim.minu1</a>
              </div>
            </div>

            <div className="mb-3">
              <h2 className="text-xl font-bold text-[#091d33] mb-2 ">Mail us</h2>

              <div className="flex justify-start items-center gap-1 text-base hover:text-orange-500 transition delay-100">
                <GrMail />
                <a href="mailto:info@clippingpathgraphics.com">
                  <i></i>info@clippingpathgraphics.com
                </a>
              </div>

              <div className="flex justify-start items-center gap-1 text-base hover:text-orange-500 transition delay-100">
                <GrMail />
                <a href="mailto:mailto:clippingpathgraphics@gmail.com">
                  <i></i>mailto:clippingpathgraphics@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#091d33] mb-2">Visit us</h2>

              <div className="flex justify-start items-center gap-1 text-base">
                <ImLocation />
                <p> US Office: 10126 ADOBE DRIVE Houston TX 77095</p>
              </div>

              <div className="flex justify-start items-center gap-1 text-base">
                <ImLocation />
                <p>BD Office: Bicon more collage road, Rangpur</p>
              </div>
            </div>
          </div>

          <div className=" mt-20 md:mt-0 md:w-[58%]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex text-[#091d33]">
                <div className="mr-2 w-1/2">
                  <label htmlFor="name" className="block   font-bold text-xl">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 block w-full border rounded-md focus:outline-indigo"
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name?.message}</p>
                  )}
                </div>
                <div className="ml-2 w-1/2">
                  <label htmlFor="email" className="block text-xl font-bold ">
                    Email *
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 block w-full border rounded-md focus:outline-indigo"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-4 ">
                <label
                  htmlFor="subject"
                  className="block text-xl font-bold text-[#091d33]"
                >
                  Subject *
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-indigo"
                />
                {errors.subject && (
                  <p className="text-red-600">{errors.subject?.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-xl font-bold text-[#091d33]"
                >
                  Message *
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 block w-full border rounded-md focus:outline-indigo"
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message?.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#ff8a00] text-white font-bold px-10 py-2 rounded-full"
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
