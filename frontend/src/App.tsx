import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, PrivateWrapper } from "components";
import { AuthCotnextProvider } from "context/AuthContext";
import { Home, NoPage, Register, Login, Settings } from "pages";

function App() {
  return (
    <AuthCotnextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateWrapper />}>
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthCotnextProvider>
  );
}

export default App;
