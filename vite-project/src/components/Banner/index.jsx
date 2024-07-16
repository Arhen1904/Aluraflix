import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StyledContainer = styled.section`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  transition: background-image 1s ease-in-out;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  gap: 5%;
`;

const Categories = styled.h1`
  font-size: 3vw;
  color: #d5d5d5;
`;

const TextImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5%;
`;

const ImageSlide = styled.img`
  width: 50%;
  height: 20vw;
`;

const Text = styled.h1`
  color: #ebebeb;
  font-family: sans-serif;
  font-size: 2vw;
`;

const Banner = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const intervalId = setInterval(changeSlide, interval);
    return () => clearInterval(intervalId);
  }, [slides, interval]);

  const currentSlide = slides[currentIndex];

  return (
    <StyledContainer backgroundImage={currentSlide.backgroundImage}>
      <Content>
        <Categories>{currentSlide.category}</Categories>
        <TextImageContainer>
          <Text>{currentSlide.text}</Text>
          <ImageSlide src={currentSlide.image} alt="Slide content" />
        </TextImageContainer>
      </Content>
    </StyledContainer>
  );
};

export default Banner;
