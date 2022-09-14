import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from "./components/Navbar";
import { useState } from "react";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  const [progress, setProgress] = useState(0)

  return(
  <BrowserRouter>
    <Box sx={{ backgroundColor: "white" }}>
    <LoadingBar
        color="red"
        progress={progress}    
/>
<Navbar/>
<hr/>
      <Routes>
        <Route exact path='/' element={<Feed setProgress={setProgress}   />} />
        <Route path='/video/:id' element={<VideoDetail setProgress={setProgress} />} />
        <Route path='/channel/:id' element={<ChannelDetail setProgress={setProgress} />} />
        <Route path='/search/:searchTerm' element={<SearchFeed setProgress={setProgress} />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
  }
export default App;
