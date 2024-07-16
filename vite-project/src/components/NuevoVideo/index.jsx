import { useState } from "react";
import styled from "styled-components";
import { addVideo } from '../../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  background-color: #ededed;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 20px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-top: 5px;
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const NuevoVideo = () => {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Front-End");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleGuardar = async () => {
    const nuevoVideo = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion,
    };

    try {
      await addVideo(nuevoVideo);
      limpiarCampos();
      alert("El video se agregó correctamente.");
    } catch (error) {
      console.error("Error al agregar el video:", error);
      alert("Hubo un error al agregar el video. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const limpiarCampos = () => {
    setTitulo("");
    setCategoria("Front-End");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };

  return (
    <Container>
      <Title>Nuevo Video</Title>
      <Subtitle>Completa el formulario para crear una nueva card de video</Subtitle>
      <Form>
        <Row>
          <Column>
            <Label>
              Título:
              <Input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ingresa un título para el video"
              />
            </Label>
            <Label>
              Imagen:
              <Input
                type="text"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                placeholder="Ingresa el enlace de la imagen"
              />
            </Label>
          </Column>
          <Column>
            <Label>
              Categoría:
              <Select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Innovación y gestión">Innovación y gestión</option>
              </Select>
            </Label>
            <Label>
              Video:
              <Input
                type="text"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                placeholder="Ingresa el enlace del video"
              />
            </Label>
          </Column>
        </Row>
        <Label>
          Descripción:
          <TextArea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ingresa una descripción del video"
          />
        </Label>
        <ButtonContainer>
          <Button type="button" onClick={handleGuardar}>Guardar</Button>
          <Button type="button" onClick={limpiarCampos}>Limpiar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default NuevoVideo;
