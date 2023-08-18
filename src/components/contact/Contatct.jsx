const Contact = () => {
  return (
    <div className="pt-32 border border-t-slate-500">
      <div className="w-5/6 mx-auto flex justify-between items-start">
        <div className="w-2/5">
          <h1>Get in Touch</h1>
          <p>
            Clipping Path Graphics is one of the trusted Clipping Path Service
            Provider in 2022. We have the experience of working in this field.
            Almost 5 years and working with hundred clients from all over the
            world.
          </p>

          <div>
            <h2>Call us</h2>
            <span>-</span>
            <span>+1 (304) 574-8370 Skype</span>
          </div>

          <div>
            <h2>Skype</h2>
            <span>-</span>{" "}
            <span>
              <a href="skype:rahim.minu1"></a>
            </span>
          </div>

          <div>
            <h2>Mail us</h2>
            <p>
              <a href="mailto:info@clippingpathgraphics.com">
                <i></i>info@clippingpathgraphics.com
              </a>
            </p>

            <p>
              <a href="mailto:mailto:clippingpathgraphics@gmail.com">
                <i></i>mailto:clippingpathgraphics@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2>Visit us</h2>
            <p> US Office: 10126 ADOBE DRIVE Houston TX 77095</p>

            <p> BD Office: Bicon more collage road, Rangpur</p>
          </div>
        </div>

        <div className="w-[58%]">
       

        <form>
      <div className="mb-4 flex">
        <div className="mr-2 w-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="ml-2 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Send
      </button>
    </form>


        </div>
      </div>
    </div>
  );
};

export default Contact;
