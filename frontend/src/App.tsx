import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, PrivateWrapper, LoadingWrapper } from "components";
import { AuthCotnextProvider, ArticleContextProvider } from "context";
import { Home, NoPage, Register, Login, Settings, Article } from "pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthCotnextProvider>
      <ArticleContextProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route element={<LoadingWrapper />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="article/:id" element={<Article />} />
                <Route element={<PrivateWrapper />}>
                  <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="*" element={<NoPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ArticleContextProvider>
    </AuthCotnextProvider>
  );
}

export default App;
