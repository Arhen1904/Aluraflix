import { useEffect, useState } from 'react';
import styled from "styled-components";
import VideoCard from "../VideoCard";
import EditModal from "../EditModal";
import { getVideos, deleteVideo } from '../../services/api';

const StyledMain = styled.main`
  background-image: linear-gradient(#4fa0c8f3, #2c334f);
  padding: 20px 0;
`;

const SectionCategory = styled.section`
  margin: 0 2%;
  padding: 20px 0;
  border-top: 3px solid #11143c;
  &:first-of-type {
    border-top: none;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: #000000;
  margin-top: 10px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [categorizedVideos, setCategorizedVideos] = useState({
    'Front-End': [],
    'Back-End': [],
    'Innovación y gestión': []
  });
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  useEffect(() => {
    const categorized = {
      'Front-End': [],
      'Back-End': [],
      'Innovación y gestión': []
    };

    videos.forEach(video => {
      if (categorized[video.categoria]) {
        categorized[video.categoria].push(video);
      }
    });

    setCategorizedVideos(categorized);
  }, [videos]);

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

  return (
    <StyledMain>
      {Object.keys(categorizedVideos).map(category => (
        <SectionCategory key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <VideoContainer>
            {categorizedVideos[category].map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onDelete={() => handleDelete(video.id)}
                onEdit={() => setSelectedVideo(video)} 
              />
            ))}
          </VideoContainer>
        </SectionCategory>
      ))}
      {selectedVideo && (
        <EditModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          video={selectedVideo}
          onSave={() => {}}
        />
      )}
    </StyledMain>
  );
};

export default Videos;
