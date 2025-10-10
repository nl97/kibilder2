import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/components/HomePage';
import { PrivacyPage } from '@/components/PrivacyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



