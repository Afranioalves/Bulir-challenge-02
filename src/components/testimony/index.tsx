import styles from './style.module.css'
import CardTestimony from './card-testimony'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimony = ({data}:{data:Array<any>}) =>{

    const pagination = {
        clickable: true,
        renderBullet: function (index:any, className:any) {
          return '<span class="' + className + '"></span>';
        },
      };

      const renderFakeTestimony = () =>{

            return data.map((user, index)=>{
                  return(
                        <SwiperSlide key={index}>
                              <CardTestimony 
                                    name={`${user.name.first} ${user.name.last}`}
                                    address={user.location.city}
                                    avatar={user.picture.medium}
                              />
                         </SwiperSlide>
                  )
            })
      }
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>O que as pessoas dizem</h1>
            <p className={styles.description}>Não acredite apenas na nossa palavra, acredite na deles também</p>

            <div className={styles.testimonies}>
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
                  
                  {renderFakeTestimony()}
            </Swiper>
                </div>
        </section>
    )
}

export default Testimony