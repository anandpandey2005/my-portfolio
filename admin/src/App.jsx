import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Overview } from './handler';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Overview title="Projects" />} />
          <Route path="blog" element={<Overview title="Blog Posts" />} />
          <Route path="messages" element={<Overview title="Messages" />} />
          <Route path="resume" element={<Overview title="Resume" />} />
          <Route path="settings" element={<Overview title="Settings" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
