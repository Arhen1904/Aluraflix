import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Card = styled.div`
  background-color: #abdae2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 1.2rem;
`;

const VideoCard = ({ video, onDelete, onEdit }) => {
  return (
    <Card>
      <Thumbnail src={video.imagen} alt={video.titulo} />
      <Content>
        <Title>{video.titulo}</Title>
        <Description>{video.descripcion}</Description>
      </Content>
      <Actions>
        <Button onClick={onEdit}>
          <FaEdit />
        </Button>
        <Button onClick={onDelete}>
          <FaTrashAlt />
        </Button>
      </Actions>
    </Card>
  );
};

export default VideoCard;
