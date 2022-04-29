import React from 'react';
import "./styles/App.css"
// import PostItem from "./components/Postitem";
import Home from "./components/Home";
function App() {
    // const [post,setPosts] = useState([
    //     {id:1, title: 'js', body: 'description'},
    //     {id:2, title: 'js', body: 'description'},
    //     {id:3, title: 'js', body: 'description'},
    // ])

  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
