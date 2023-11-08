import React from 'react';
import { useParams } from 'react-router-dom';

import { cardata } from '../../Components/CarData';

function CarPost (){
    const { slug } = useParams();
    const carpost = cardata.find(post => post.slug === slug);

    return(
      <div>
      {/* Sección 1 con imagen de fondo */}
      <section
        className="h-screen bg-cover relative"
        style={{
          backgroundImage: `url(${carpost.img})`,
        }}
      >
        <div
          className="absolute inset-0 bg-azul-medianoche-950 bg-opacity-50 flex flex-col items-center justify-center text-white transition duration-500"
        >
          <h1 className="text-4xl font-bold mb-4">{carpost.title}</h1>
          <p className="text-xl mb-2">
            Year: {carpost.year} - Brand: {carpost.brand}
          </p>
          <p className="text-2xl">Price: ${carpost.price}</p>
        </div>
      </section>

      {/* Sección 2 con información adicional */}
      <section className="h-screen bg-azul-medianoche-950 flex flex-col items-center justify-center transition duration-500">
        <div className="text-white text-2xl p-4">
          {/* Agrega la información adicional aquí */}
          {carpost.details.history}
        </div>
        {/* Agrega más contenido aquí */}
      </section>
    </div>

    //   <div>
    //   {/* Sección 1 con imagen de fondo */}
    //   <section
    //     className="h-screen bg-opacity-25 bg-cover bg-center flex flex-col items-center justify-center text-white transition duration-500"
    //     style={section1Style}
    //   >
    //     <h1 className="text-4xl font-bold mb-4">{carpost.title}</h1>
    //     <p className="text-xl mb-2">
    //       Year: {carpost.year} - Brand: {carpost.brand}
    //     </p>
    //     <p className="text-2xl">Price: ${carpost.price}</p>
    //   </section>

    //   {/* Sección 2 con información adicional */}
    //   <section className="h-screen bg-azul-medianoche-950 flex flex-col items-center justify-center transition duration-500">
    //     <div className="text-white text-2xl p-4">
    //       {/* Aquí puedes agregar la información adicional */}
    //       {carpost.details.history}
    //     </div>
    //     {/* Agrega más contenido aquí */}
    //   </section>
    // </div>
    );
}


export { CarPost };