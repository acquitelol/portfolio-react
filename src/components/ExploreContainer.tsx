import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div>The route "<strong>{name}</strong>" is invalid. 🚫</div>
      <p>Did you mistype?</p>
    </div>
  );
};

export default ExploreContainer;
