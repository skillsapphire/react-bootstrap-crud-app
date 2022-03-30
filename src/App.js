import './App.css';
import AllPosts from './components/AllPosts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/posts' element={<AllPosts />}></Route>
          <Route exact path='/posts/:postId' element={<PostDetail />}></Route>
          <Route exact path='/create' element={<CreatePost />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
