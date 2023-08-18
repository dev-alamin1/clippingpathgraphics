import "./App.css";
import Banner from "./components/banner/Banner";
import vetorStep1 from './assets/images/step-vector-1.png'
import vetorStep2 from './assets/images/step-vector-2.png'

import step1Img from './assets/images/step-1.png'
import step2Img from './assets/images/step-2.png'

function App() {
  return (
    <div>
      <Banner />

      <section className="p-20">
    
          {/* step 1 */}

           <div className="p-[200] relative">
            {/* step1 vector */}
            <div className="absolute left-[34%] bottom-[93%]">
                <img src={vetorStep1} alt="" />
            </div>

            {/* step1 content */}
            <div className="flex justify-between items-center gap-4">
              {/* step1 left content */}
              <div className="w-[41%]">
                <img src={step1Img} className="w-full relative z-10" alt="" />
              </div>

              {/* step1  right content  */}
              <div className="w-[58%]">
                  <h3>Step 01:</h3>
                  <h1>Free trial and Quote</h1>
                  <p>We simply put our efforts to make you satisfied. We are not ending here with some sort of samples but more wonders are awaiting for you to make you impressed! Our professional hands can draw your imagination with a bit of help by your instructions. Put your dream into our hand and the rest of the part goes to our designers. Free trial is not only an option but also can keep your faith and trust to place you in a comfort zone.</p>
              </div>
            </div>

       
        </div>


        <div className="pt-[235px] relative">
            {/* step2 vector */}
            <div className="absolute right-[29%] top-[-10px]">
                <img src={vetorStep2} alt="" />
            </div>

            {/* step1 content */}
            <div className="flex justify-between items-center gap-4">
              {/* step1 left content */}
              
              <div className="w-[58%]">
                  <h3>Step 01:</h3>
                  <h1>Free trial and Quote</h1>
                  <p>We simply put our efforts to make you satisfied. We are not ending here with some sort of samples but more wonders are awaiting for you to make you impressed! Our professional hands can draw your imagination with a bit of help by your instructions. Put your dream into our hand and the rest of the part goes to our designers. Free trial is not only an option but also can keep your faith and trust to place you in a comfort zone.</p>
              </div>


              {/* step1  right content  */}

              <div className="w-[41%]">
                <img src={step2Img} className="w-full relative z-10" alt="" />
              </div>

              
            </div>

       
        </div>
      </section>
    </div>
  );
}

export default App;
