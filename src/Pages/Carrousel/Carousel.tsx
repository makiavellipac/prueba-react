import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// @ts-ignore */
import 'swiper/css';
// @ts-ignore */
import 'swiper/css/navigation';
// @ts-ignore */
import 'swiper/css/pagination';
// @ts-ignore */
import 'swiper/css/effect-coverflow';
import './Carousel.scss';

const carouselItems = [
  {
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*7VyEZgzwUhQMeBqb',
    title: 'Programación',
    description: 'Me gusta mucho programar y aprender sobre nuevas tecnologías'
  },
  {
    image: 'https://m.media-amazon.com/images/I/91+5a2Dr+5L.jpg',
    title: 'Series',
    description: 'Me encanta ver series y películas, sobre todo si es un maratón de star wars'
  },
  {
    image: 'https://www.motociclismo.es/uploads/s1/93/27/98/7/cambio-moto-carretera-2.jpeg',
    title: 'Manejar Moto',
    description: 'Me encanta salir en manejar mi motocicleta y conocer nuevos lugares en mis tiempos libres'
  },
  {
    image: 'https://www.laizquierdadiario.mx/IMG/arton20199.jpg?1436845006',
    title: 'Escuchar Música',
    description: 'Me encanta escuchar música en todo momento sobre todo si se escucha un buen ska'
  },
  {
    image: 'https://sf-static.sixflags.com/wp-content/uploads/Superman-1.jpg',
    title: 'Emociones extremas',
    description: 'Realizar actividades extremas de vez en cuando me divierte mucho'
  }
];

const Carousel = () => {
  return (
    <div className="carousel-page">
      <h1 className="carousel-page__title">Mis Pasiones en la Galaxia</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.title} />
            <div className="swiper-slide__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
