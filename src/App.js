import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom'
import router from './Pages/Routes'
import './App.css';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
