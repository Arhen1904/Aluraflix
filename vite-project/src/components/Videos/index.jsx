import { useEffect, useState } from 'react';
import styled from "styled-components";
import VideoCard from "../VideoCard";
import { getVideos, deleteVideo } from '../../services/api'; // Importamos deleteVideo

const StyledMain = styled.main`
  background-image: linear-gradient(#4fa0c8f3, #2c334f);
  padding: 20px 0;
`;

const SectionCategory = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 2%;
  padding: 20px 0;
  border-top: 3px solid #11143c;
  &:first-of-type {
    border-top: none;
  }
`;

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosData = await getVideos();
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVideo(id);
      const updatedVideos = videos.filter(video => video.id !== id);
      setVideos(updatedVideos);
      alert('El video se eliminó correctamente.');
    } catch (error) {
      console.error('Error al eliminar el video:', error);
      alert('Hubo un error al eliminar el video. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  // Agrupar videos por categoría
  const categorizedVideos = {
    'Front-End': [],
    'Back-End': [],
    'Innovación y gestión': []
  };

  videos.forEach(video => {
    if (categorizedVideos[video.categoria]) {
      categorizedVideos[video.categoria].push(video);
    }
  });

  return (
    <StyledMain>
      {Object.keys(categorizedVideos).map(category => (
        <SectionCategory key={category}>
          {categorizedVideos[category].map(video => (
            <VideoCard
              key={video.id}
              video={video}
              onDelete={() => handleDelete(video.id)} // Pasamos el id del video a handleDelete
            />
          ))}
        </SectionCategory>
      ))}
    </StyledMain>
  );
};

export default Videos;
