import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div><strong>{name}</strong> is an invalid route. 🚫</div>
      <p>Did you mistype?</p>
    </div>
  );
};

export default ExploreContainer;
