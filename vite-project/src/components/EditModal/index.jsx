import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { updateVideo } from "../../services/api";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #bfd4d5;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EditModal = ({ isOpen, onClose, video, onSave }) => {
  const [editedVideo, setEditedVideo] = useState({ ...video });

  useEffect(() => {
    setEditedVideo({ ...video });
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const updatedVideo = await updateVideo(editedVideo.id, editedVideo);
      onSave(updatedVideo);
      onClose();
      alert('El video se actualizó correctamente.');
    } catch (error) {
      console.error('Error al actualizar el video:', error);
      alert('Hubo un error al actualizar el video. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Editar Video</ModalTitle>
              <CloseButton onClick={onClose}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <InputGroup>
                <Label>Título</Label>
                <Input
                  type="text"
                  name="titulo"
                  value={editedVideo.titulo}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup>
                <Label>Categoría</Label>
                <Select
                  name="categoria"
                  value={editedVideo.categoria}
                  onChange={handleChange}
                >
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Innovación y gestión">Innovación y gestión</option>
                </Select>
              </InputGroup>
              <InputGroup>
                <Label>Imagen URL</Label>
                <Input
                  type="text"
                  name="imagen"
                  value={editedVideo.imagen}
                  onChange={handleChange}
                  placeholder="Ingresa la URL de la imagen"
                />
              </InputGroup>
              <InputGroup>
                <Label>Video URL</Label>
                <Input
                  type="text"
                  name="videoUrl"
                  value={editedVideo.videoUrl}
                  onChange={handleChange}
                  placeholder="Ingresa la URL del video de YouTube"
                />
              </InputGroup>
              <InputGroup>
                <Label>Descripción</Label>
                <TextArea
                  name="descripcion"
                  value={editedVideo.descripcion}
                  onChange={handleChange}
                  placeholder="Ingresa una descripción del video"
                />
              </InputGroup>
              <ButtonGroup>
                <Button onClick={handleSave}>Guardar</Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ButtonGroup>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default EditModal;
