import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import PageTransition from './shared/components/PageTransition';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/WhoWeAre/AboutUs'));
const QualityAndCertification = lazy(() => import('./pages/WhoWeAre/QualityAndCertification'));

// Products
const Products = lazy(() => import('./pages/Products'));
const MithPlate = lazy(() => import('./pages/Products/MITH-PLATE'));
const MUniSeal = lazy(() => import('./pages/Products/M-UNI-Seal'));
const HammerUnionSeal = lazy(() => import('./pages/Products/Hammer-Union-Seal'));
const SealsXMasTree = lazy(() => import('./pages/Products/Seals-X-Mas-Tree'));
const SealsValve = lazy(() => import('./pages/Products/Seals-Valve'));
const PlugLinedValve = lazy(() => import('./pages/Products/Plug-Lined-Valve'));
const UniLubeBearing = lazy(() => import('./pages/Products/UNI-LUBE-Bearing'));
const SealsHydraulic = lazy(() => import('./pages/Products/Seals-Hydraulic'));
const DiaphragmAODD = lazy(() => import('./pages/Products/Diaphragm-AODD'));
const WashersTransmission = lazy(() => import('./pages/Products/Washers-Transmission'));
const NozzlesPowerGrid = lazy(() => import('./pages/Products/Nozzles-Power-Grid'));
const EncapsulatedORing = lazy(() => import('./pages/Products/Encapsulated-O-Ring'));

// Industries
const Industries = lazy(() => import('./pages/Industries'));
const EnergyOilGas = lazy(() => import('./pages/Industries/EnergyOilGas'));

// Oil & Gas Seals
const OilGasSeal = lazy(() => import('./pages/OilGasSeal'));
const API6A = lazy(() => import('./pages/OilGasSeal/API6A'));
const WellService = lazy(() => import('./pages/OilGasSeal/WellService'));
const Downhole = lazy(() => import('./pages/OilGasSeal/Downhole'));
const API6D = lazy(() => import('./pages/OilGasSeal/API6D'));

// Gallery
const ProductGallery = lazy(() => import('./pages/ProductGallery'));

// More
const ConnectWithUs = lazy(() => import('./pages/More/ConnectWithUs'));
const Events = lazy(() => import('./pages/More/Events'));
const Expo2025 = lazy(() => import('./pages/More/Events/ExpoPages'));
const Expo2024Page = lazy(() => import('./pages/More/Events/ExpoPages').then(module => ({ default: module.Expo2024Page })));
const Expo2023Page = lazy(() => import('./pages/More/Events/ExpoPages').then(module => ({ default: module.Expo2023Page })));


function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Suspense fallback={<div className="page-loader" />}>
          <PageTransition>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              
              {/* Who We Are */}
              <Route path="/who-we-are" element={<Navigate to="/who-we-are/about-us" replace />} />
              <Route path="/who-we-are/about-us" element={<AboutUs />} />
              <Route path="/who-we-are/quality-and-certification" element={<QualityAndCertification />} />

              {/* Products */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/mith-plate" element={<MithPlate />} />
              <Route path="/products/m-uni-seal" element={<MUniSeal />} />
              <Route path="/products/hammer-union-seal" element={<HammerUnionSeal />} />
              <Route path="/products/seals-x-mas-tree" element={<SealsXMasTree />} />
              <Route path="/products/seals-valve" element={<SealsValve />} />
              <Route path="/products/plug-lined-valve" element={<PlugLinedValve />} />
              <Route path="/products/uni-lube-bearing" element={<UniLubeBearing />} />
              <Route path="/products/seals-hydraulic" element={<SealsHydraulic />} />
              <Route path="/products/diaphragm-aodd" element={<DiaphragmAODD />} />
              <Route path="/products/washers-transmission" element={<WashersTransmission />} />
              <Route path="/products/nozzles-power-grid" element={<NozzlesPowerGrid />} />
              <Route path="/products/encapsulated-o-ring" element={<EncapsulatedORing />} />

              {/* Industries */}
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/energy-oil-gas" element={<EnergyOilGas />} />

              {/* Oil & Gas Seal */}
              <Route path="/oil-gas-seal" element={<OilGasSeal />} />
              <Route path="/oil-gas-seal/api-6a-wellhead-equipment-seal" element={<API6A />} />
              <Route path="/oil-gas-seal/well-service-equipment-seal" element={<WellService />} />
              <Route path="/oil-gas-seal/downhole-tool-seal" element={<Downhole />} />
              <Route path="/oil-gas-seal/api-6d-ball-valve-lng-seal" element={<API6D />} />

              {/* Product Gallery */}
              <Route path="/product-gallery" element={<ProductGallery />} />

              {/* More / Connect */}
              <Route path="/more" element={<Navigate to="/connect-with-us" replace />} />
              <Route path="/connect-with-us" element={<ConnectWithUs />} />

              {/* Events */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/oil-and-gas-expo-2025" element={<Expo2025 />} />
              <Route path="/events/expo-2024" element={<Expo2024Page />} />
              <Route path="/events/expo-2023" element={<Expo2023Page />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
