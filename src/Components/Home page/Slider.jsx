// import sliderImage from '../../public/image/img1'

const Slider = () => {
  return (
    <div className="">
      <div className="carousel min-h-screen">
        {/* slider 01 */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* hero 1 */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(https://i.ibb.co/mqr0VHp/background-2.jpg)`,
            }}
          >
            <div className="hero-content ml-20 text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-6xl font-bold text-white">
                  Reliable <span className="text-warning">Engineering</span>{" "}
                  <br />
                  Takes Many Forms
                </h1>
                <div className="divider divider-warning w-24"></div>
                <p className="mb-5 pr-96 text-lg font-semibold text-white">
                  Capitalise on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs.
                </p>
                <button className="btn btn-warning">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 02 https://i.ibb.co/pzzrjPS/background-wind-green.jpg*/}
        <div id="slide2" className="carousel-item relative w-full">
          {/* hero 2*/}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/pzzrjPS/background-wind-green.jpg)",
            }}
          >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  Reliable <span className="text-green-600">engineering</span> <br /> 
                  takes many forms
                </h1>
               
                <button className="btn bg-green-600 border-none mt-10">Get Started</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slider 03 */}
        <div id="slide3" className="carousel-item relative w-full">
          {/* hero 3 */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/tLsvLX6/background-3.jpg)",
            }}
          >
            <div className=""></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="">
                <h1 className="mb-5 text-7xl font-bold">Think Big.
                <span className="text-red-700">We do.</span> </h1>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
