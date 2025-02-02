import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <ConfigProvider>
      <Router>
        <Navbar />
      </Router>
    </ConfigProvider>
  );
};

export default App;
