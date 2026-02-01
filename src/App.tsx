import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from "./layouts/mainLayouts";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import VansPage from "./pages/vans";
import VanDetailsPage from "./pages/vanDetails";
import HostLayout from "./layouts/hostLayouts";
import Dashboard from "./pages/host/dashboard";
import Reviews from "./pages/host/reviews";
import Income from "./pages/host/income";
import HostVans from "./pages/host/hostVans.tsx";
import HostVanDetails from "./pages/host/hostVanDetails";
import NotFoundPage from "./pages/notFound";
import "./styles/main.scss";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vans" element={<VansPage />} />
          <Route path="/vans/:id" element={<VanDetailsPage />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
