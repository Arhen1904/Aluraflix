import Banner from '../Banner';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image7.png';
import image3 from '../../assets/image4.png';
import image4 from '../../assets/image10.png';
import Videos from '../Videos';

const Home = () => {
  const slides = [
    {
      backgroundImage: image1,
      category: 'Front-End',
      text: 'Aprende los diferentes tipos de variables y cuando utilizarlos para un mejor manejo en tus proyectos',
      image: image1,
    },
    {
      backgroundImage: image2,
      category: 'Innovación y gestión',
      text: 'Descubre las habilidades mas importantes para tu desarrollo personal',
      image: image2,
    },
    {
      backgroundImage: image3,
      category: 'Back-End',
      text: 'Conoce las utilidades de Spring, un framework de Java para desarrollo de aplicaciones',
      image: image3,
    },
    {
      backgroundImage: image4,
      category: 'Innovación y gestión',
      text: 'Entra en la mente de un programador profesional para aprender como resolver problemas en programación',
      image: image4,
    }
  ];

  return (
    <div>
      <Banner slides={slides} interval={5000} /> {/* Cambia cada 5 segundos */}
      <Videos/>
    </div>
  );
};

export default Home;