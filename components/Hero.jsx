const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video autoPlay loop className="absolute w-full h-full object-cover z-0">
        <source src="../src/assets/bgVideo.mp4" type="video/mp4" />
      </video>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="absolute bg-black/80 z-10"></div>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Create your own movie diary
          </h1>
          <p className="mb-5">
            Don' know what to watch? Add your favorite movies and add note to
            it.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
