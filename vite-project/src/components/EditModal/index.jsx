import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

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
  background-color: #fff;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  position: relative;
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

const EditModal = ({ isOpen, onClose, tituloActual }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Editar Card</ModalTitle>
              <CloseButton onClick={onClose}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <InputGroup>
                <Label>Título</Label>
                <Input type="text" defaultValue={tituloActual} />
              </InputGroup>
              <InputGroup>
                <Label>Categoría</Label>
                <Select>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Innovación y gestión">Innovación y gestión</option>
                </Select>
              </InputGroup>
              <InputGroup>
                <Label>Imagen URL</Label>
                <Input type="text" placeholder="Ingresa la URL de la imagen" />
              </InputGroup>
              <InputGroup>
                <Label>Video URL</Label>
                <Input type="text" placeholder="Ingresa la URL del video de YouTube" />
              </InputGroup>
              <InputGroup>
                <Label>Descripción</Label>
                <TextArea placeholder="Ingresa una descripción del video" />
              </InputGroup>
              <ButtonGroup>
                <Button>Guardar</Button>
                <Button>Limpiar</Button>
              </ButtonGroup>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default EditModal;