import { Routes, Route } from 'react-router-dom';

// Import 3 trang vừa tạo
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      
      {/* Trang lỗi 404 nếu nhập sai đường dẫn */}
      <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px' }}>404 - Không tìm thấy trang này!</div>} />
    </Routes>
  );
}