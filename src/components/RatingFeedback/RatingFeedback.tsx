import { Container, Circle, Image } from './styles';
import RatingForm from '../RatingForm/RatingForm';

const RatingFeedback = () => {
  return (
    <Container>
      <Circle>
        <Image src="/images/icon-star.svg" alt="icon-start" />
      </Circle>
      <RatingForm maxScore={5} />
    </Container>
  );
};

export default RatingFeedback;
