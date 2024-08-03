import styles from './style.module.css'
import CardProvider from './card-provider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Provider = ({data}:{data:Array<any>}) =>{
    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:any) {
          return '<span class="' + className + '"></span>';
        },
      };

      const renderProvider = () =>{

            return data.map((provider, index)=>{
                  return(
                        <SwiperSlide key={index}>
                              <CardProvider
                                    name={`${provider.name.first} ${provider.name.last}`}
                                    avatar={provider.picture.medium}
                               />
                         </SwiperSlide>
                  )
            })
      }
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>Prestadores</h1>
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
                 {renderProvider()}
            </Swiper>
                </div>
        </section>
    )
}

export default Provider