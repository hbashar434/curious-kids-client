import AosCard from "./AosCard";

const Gallery = () => {
  return (
    <div className="my-10 md:my-24 px-4 md:px-24">
      <div className="mb-4 md:mb-10 md:w-6/12 md:mx-auto md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          Step into the Future with these Robots
        </h2>
        <p className="md:text-lg text-gray-700 mt-4">
          Discover a world of creativity and excitement with our diverse range
          of Kid Robot Toys. From interactive companions to buildable kits,
          there&apos;s something for every young robot enthusiast.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <AosCard animation="zoom-in-up" picture="https://rb.gy/sjoyl" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/zpd1e" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/svday" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/u07e3" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/n3gbj" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/7w315" />
      </div>
    </div>
  );
};

export default Gallery;
