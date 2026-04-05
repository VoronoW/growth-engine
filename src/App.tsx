import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OnboardingForm from './pages/OnboardingForm';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/onboarding" element={<OnboardingForm />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
