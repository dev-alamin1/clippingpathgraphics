import bannerImg from "../../assets/images/how-it-work.png";
import bannerBg from "../../assets/images/how-it-work-bg.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bannerStyle}>
      <div className="w-11/12 mx-auto">
        <div className="px-5 md:px-0 flex flex-col md:flex-row justify-between items-center py-28 gap-10">
          {/* banner left*/}
          <div className="md:w-1/2">
            {/* breadcumb */}
            <div className="mb-14">
              <span>
                <a href="#">Home</a>
              </span>{" "}
              {">"}
              <span> How it Work</span>
            </div>

            <h1 className="text-4xl font-extrabold mb-5 text-[#091d33]">How it Work</h1>
            <h3 className="text-2xl text-orange-600 font-semibold mb-5">
              Our Strategy and Project plan
            </h3>
            <p className="w-full tracking-wider text-base leading-7	">
              We always allow our prospects with all the freedom to put their
              own ideas and creative thinking to the specific work orders and
              make them wise by getting them space by selecting samples.Lets
              check our working process.
            </p>
          </div>

          {/* banner right */}
          <div className="md:w-2/5">
            <img src={bannerImg} className="w-full relative z-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
