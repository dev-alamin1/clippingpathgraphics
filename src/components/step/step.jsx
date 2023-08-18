import vetorStep1 from "../../assets/images/step-vector-1.png";
import vetorStep2 from "../../assets/images/step-vector-2.png";
import vetorStep3 from "../../assets/images/step-vector-3.png";
import vetorStep4 from "../../assets/images/step-vector-4.png";

import step1Img from "../../assets/images/step-1.png";
import step2Img from "../../assets/images/step-2.png";
import step3Img from "../../assets/images/step-3.png";
import step4Img from "../../assets/images/step-4.png";

const Step = () => {
  return (
    <section className="py-32">
      <div className="w-11/12 mx-auto px-10 md:px-0">
        {/* step 1 */}
        <div className="md:p-5 relative">
          {/* step1 vector */}
          <div className="absolute left-[34%] bottom-[93%] hidden lg:block">
            <img src={vetorStep1} alt="" />
          </div>

          {/* step1 content */}
          <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
            {/* step1 left content */}
            <div className="w-[100%] md:w-[41%]">
              <img src={step1Img} className="w-full relative z-10" alt="" />
            </div>

            {/* step1  right content  */}
            <div className="w-[100%] md:w-[58%] ">
              <h3 className="text-blue-700 font-bold mb-3">Step 01:</h3>
              <h1 className="font-bold text-4xl text-black mb-3">
                Free trial and Quote
              </h1>
              <p className="mt-5">
                We simply put our efforts to make you satisfied. We are not
                ending here with some sort of samples but more wonders are
                awaiting for you to make you impressed! Our professional hands
                can draw your imagination with a bit of help by your
                instructions. Put your dream into our hand and the rest of the
                part goes to our designers.{" "}
                <span className="text-blue-700">Free trial</span> is not only an
                option but also can keep your faith and trust to place you in a
                comfort zone.
              </p>
            </div>
          </div>
        </div>

        {/* step 2 */}
        <div className=" pt-20 md:pt-[235px] relative" >
          {/* step2 vector */}
          <div className="absolute right-[29%] top-[-10px] hidden lg:block" >
            <img src={vetorStep2} alt="" data-aos="fade-up"/>
          </div>

          {/* step2 content */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            {/* step2 left content */}

            <div className="md:w-[58%]">
              <h3 className="text-blue-700 font-bold mb-3">Step 02:</h3>
              <h1 className="font-bold text-4xl text-black mb-3">
                Pricing and Upload
              </h1>
              <p>
                <span className="text-blue-700">Price</span> could be negotiated
                depending on your need and expectations and never settled
                without knowing your need. We help you to catch a friendly price
                point. After we make a fair deal, we go ahead to upload. We use
                FTP, Server, Wetransfer, Dropbox, and google drive for files
                sharing. Let us know what suits you then we proceed. Confirm
                your payment gateway and we sort out the most convenient for
                both of us.
              </p>
            </div>

            {/* step2  right content  */}

            <div className="md:w-[41%]">
              <img src={step2Img} className="w-full relative z-10" alt="" data-aos="fade-up" />
            </div>
          </div>
        </div>

        {/* step 3 */}

        <div className="pt-20 md:pt-[220px] relative" data-aos="fade-up">
          {/* step3 vector */}
          <div className="absolute left-[34%] top-[-7px] hidden lg:block">
            <img src={vetorStep3} alt="" data-aos="fade-up" />
          </div>

          {/* step3 content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* step3 left content */}
            <div className="md:w-[41%]">
              <img src={step3Img} className="w-full relative z-10" alt="" data-aos="fade-up" />
            </div>

            {/* step3 right content  */}
            <div className="md:w-[58%]">
              <h3 className="text-blue-700 font-bold mb-3">Step 03:</h3>
              <h1 className="font-bold text-4xl text-black mb-3">
                Work Note & Instructions
              </h1>
              <p>
                A habit of us to always get you in the right direction. We want
                you to click on our{" "}
                <span className="text-blue-700">free trial</span> button and
                place your photos along with all the instructions. filling out
                our form is important so we keep our eye to know who we are
                going to start with as we want to meet all your needs.
              </p>
            </div>
          </div>
        </div>

        {/* step 4 */}

        <div className="pt-20 md:pt-[235px] relative" data-aos="fade-up">
          {/* step2 vector */}
          <div className="absolute right-[34%] top-[-10px] hidden lg:block">
            <img src={vetorStep4} alt="" data-aos="fade-up" />
          </div>

          {/* step2 content */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            {/* step2 left content */}

            <div className="md:w-[58%]">
              <h3 className="text-blue-700 font-bold mb-3">Step 04:</h3>
              <h1 className="font-bold text-4xl text-black mb-3">
                Work Done & Download Files
              </h1>
              <p className="mt-5">
                Download your professionally edited images. 
              </p>
              <p className="mt-5">Once your photos are
                ready, we’ll email you a link to download or you can <span className="text-blue-700 ">login your
                dashboard</span> see your files, all ready to go.</p>
            </div>

            {/* step2  right content  */}

            <div className="md:w-[41%]">
              <img src={step4Img} className="w-full relative z-10" alt="" data-aos="fade-up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
