import styles from './style.module.css'
import CardProvider from './card-provider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Provider = () =>{
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:any) {
          return '<span class="' + className + '"></span>';
        },
      };
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Provedores de Serviços</h1>
                <div className={styles.box_description}>
                    <p>Mais de 20 Provedores compententes, registados na plataforma</p>
                </div>

                <div className={styles.providers}>
                <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className='hightlight-swiper'
                spaceBetween={24}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 5000,
                  }}
            >
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
                  <SwiperSlide>
                        <CardProvider />
                  </SwiperSlide>
            </Swiper>
                </div>
        </section>
    )
}

export default Provider