import { BrowserRouter, Routes, Route } from "react-router";
import Layouts from "./src/layouts/mainLayouts/index.tsx";
import HomePage from "./src/pages/home/index.tsx";
import AboutPage from "./src/pages/about/index.tsx";
import VansPage from "./src/pages/vans/index.tsx";
import VanDetailsPage from "./src/pages/vanDetails/index.tsx";
import HostLayout from "./src/layouts/hostLayouts/index.tsx";
import Dashboard from "./src/pages/host/dashboard/index.tsx";
import Reviews from "./src/pages/host/reviews/index.tsx";
import Income from "./src/pages/host/income/index.tsx";
import HostVans from "./src/pages/host/hostVans.tsx/index.tsx";
import HostVanDetails from "./src/pages/host/hostVanDetails/index.tsx";
import NotFoundPage from "./src/pages/notFound/index.tsx";
import "./styles/main.scss";
import "./src/server.ts";

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
