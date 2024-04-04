import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Behavior_Custom_Interface } from './types';
import Home from './pages/Home';
import Layout from './components/Layout';
import MyLipo from './pages/MyLipo';
import Info from './pages/Info';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Error from './pages/Error';

function App() {
  const DEV_ELEMENT = useSelector((state: { behavior: Behavior_Custom_Interface }) => state.behavior.DEV);
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            {DEV_ELEMENT && (
              <>
                <Route
                  path="/my-lipo"
                  element={<MyLipo />}
                />
                <Route
                  path="/info"
                  element={<Info />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/help"
                  element={<Help />}
                />
                <Route
                  path="*"
                  element={<Error />}
                />
              </>
            )}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
