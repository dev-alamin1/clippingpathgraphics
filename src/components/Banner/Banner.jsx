import bannerImg from "../../assets/images/how-it-work.png";
import bannerBg from "../../assets/images/how-it-work-bg.png";

const Banner = () => {

  const bannerStyle = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <div className="flex justify-between items-center px-11 py-28 gap-10" style={bannerStyle}>
      {/* banner left*/}
      <div className="w-1/2">
        {/* breadcumb */}
        <div className="mb-14">
          <span>
            <a href="#">Home</a>
          </span>{" "}
          {">"}
          <span> How it Work</span>
        </div>

        <h1 className="text-4xl font-bold mb-5">How it Work</h1>
        <h3 className="text-2xl text-orange-600 font-semibold mb-5">
          Our Strategy and Project plan
        </h3>
        <p>
          We always allow our prospects with all the freedom to put their own
          ideas and creative thinking to the specific work orders and make them
          wise by getting them space by selecting samples.Lets check our working
          process.
        </p>
      </div>

      {/* banner right */}
      <div className="w-2/5">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
