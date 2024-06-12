import React, { useState, useRef, useEffect } from 'react';
import { InmuebleMini } from "./InmuebleMini";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import 'swiper/css';
import { ErrorLogComponent } from '../../ErrorLogComponent/ErrorLogComponent';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Loader } from './Loader';

SwiperCore.use([EffectCoverflow, Pagination]);

export const InmueblesDestacados = ({ titulo, propiedades }) => {
  const isLoadingPropiedades = useSelector((state) => state.data.isLoadingRequest);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
        setSpaceBetween(0);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
        setSpaceBetween(1);
      } else {
        setSlidesPerView(3);
        setSpaceBetween(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mapPropiedades = (propiedades) => {
    return (
      propiedades.results !== undefined ? (
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={500}
          loop={true}
          touchRatio={1.5}
          navigation={false}
          effect={"flip"}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {
            propiedades.results.map((propiedad, index) => (
              <SwiperSlide key={index}>
                <div className="wow slideInUp" data-wow-delay="0.3s">
                  <InmuebleMini inmueble={propiedad}></InmuebleMini>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      ) : (
        <ErrorLogComponent></ErrorLogComponent>
      )
    );
  };

  return (
    <>
      {/* Inicio Blog */}
      {propiedades?.results && propiedades.results?.length > 0 ? (
        <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              <h1 className="mb-0">{titulo}</h1>
            </div>
            {isLoadingPropiedades ? (
              <Loader></Loader>
            ) : (
              <div className="row g-5">
                <div className="col">
                    {
                        mapPropiedades(propiedades)
                    }
                </div>
              </div>
            )}
          </div>
        </div>
      ): <h3>Aun no existen inmuebles para esta seccion</h3>
    }
      {/* Fin Blog */}
    </>
  );
};
