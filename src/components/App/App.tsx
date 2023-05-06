import './App.scss';
import { Routes, Route } from 'react-router-dom';
import RatingFeedback from '../RatingFeedback/RatingFeedback';
import ThankYou from '../ThankYou/ThankYou';

const App = () => {
  return (
    <Routes>
      <Route index element={<RatingFeedback />} />
      <Route path="/thank-you" element={<ThankYou />}></Route>
    </Routes>
  );
};

export default App;
