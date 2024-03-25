import Carousel from 'react-bootstrap/Carousel';

function Herocroser() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://demo.bagisto.com/bagisto-common/cache/large/theme/1/4MR094BrW5hB2FkJzQLO5BYEP4oeYwwpQN1WPQTO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://demo.bagisto.com/bagisto-common/cache/large/theme/1/j1hXES2WUs2AUuU0IxxewfJO6lyrbcvC20AetFGq.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://demo.bagisto.com/bagisto-common/cache/large/theme/1/TVGzGJ2i5SlTNHwpiVyl5TEDRV0JUoonkIv3pwu0.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://demo.bagisto.com/bagisto-common/cache/large/theme/1/IUx9OG2piuYcgdf51U7nh73RU3gbw6CaC5EOYR9H.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Herocroser;