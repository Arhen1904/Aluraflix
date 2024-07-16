import { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import EditModal from '../EditModal';
import { updateVideo } from '../../services/api';

const VideoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const VideoItem = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  div {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-color: #ccc; /* Puedes ajustar el color de fondo aquí si lo deseas */
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 550px) {
    .icon-text {
      display: none;
    }
  }
`;

const VideoCard = ({ video, onDelete }) => {
  if (!video) {
    return null; // Manejar el caso cuando el video es undefined
  }

  const { id, titulo, categoria, imagen, descripcion } = video;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedVideo, setEditedVideo] = useState({
    id,
    titulo,
    categoria,
    imagen,
    descripcion,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = async () => {
    try {
      await updateVideo(id, editedVideo);
      closeModal();
      alert('El video se actualizó correctamente.');
    } catch (error) {
      console.error('Error al actualizar el video:', error);
      alert('Hubo un error al actualizar el video. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>{categoria}</h1> {/* Mostramos la categoría en lugar del título */}
      <VideoContainer>
        <VideoItem>
          <img src={imagen} alt={`${titulo}`} />
          <div>
            <Button>
              <FaTrashAlt onClick={() => onDelete(id)} />
              <span className="icon-text">Borrar</span>
            </Button>
            <Button onClick={openModal}>
              <FaEdit />
              <span className="icon-text">Editar</span>
            </Button>
          </div>
        </VideoItem>
      </VideoContainer>
      <EditModal isOpen={isModalOpen} onClose={closeModal} video={editedVideo} onChange={handleChange} onSave={handleEdit} />
    </>
  );
};

export default VideoCard;
