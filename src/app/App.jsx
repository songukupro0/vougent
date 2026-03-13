import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes/App.routes';

export default function App() {
  return (
    <BrowserRouter>
      {/* AppRoutes sẽ tự động nhận diện trang chủ (/) và load Home */}
      <AppRoutes />
    </BrowserRouter>
  );
}