import AosCard from "./AosCard";

const Gallery = () => {
  return (
    <div className="my-10 md:my-24">
      <div className="mb-4 md:mb-10 md:w-6/12 md:mx-auto md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          Perfect for imaginative play
        </h2>
        <p className="md:text-lg text-gray-700 mt-4">
          Discover a world of creativity and excitement with our diverse range
          of Kid Robot Toys. From interactive companions to buildable kits,
          there&apos;s something for every young robot enthusiast.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <AosCard animation="zoom-in-down" picture="https://rb.gy/sjoyl" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/7w315" />
        <AosCard animation="zoom-in-down" picture="https://rb.gy/svday" />
        <AosCard animation="zoom-in-up" picture="https://rb.gy/u07e3" />
      </div>
    </div>
  );
};

export default Gallery;
