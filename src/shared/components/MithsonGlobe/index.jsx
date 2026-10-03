import { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import worldData from './world.json';
import './MithsonGlobe.css';

// Using actual imported assets from our newly created folder
import OilGasImg from '../../../assets/industries/Oil & Gas.png';
import AutomotiveImg from '../../../assets/industries/Automotive.png';
import MiningImg from '../../../assets/industries/Mining.png';
import LifeScienceImg from '../../../assets/industries/Life Science.png';
import SemiconductorImg from '../../../assets/industries/Semiconductor.png';
import RoboticsImg from '../../../assets/industries/Robotics.png';
import AerospaceImg from '../../../assets/industries/Aerospace.png';

// Chennai coordinates
const INDIA_COORDS = { lat: 13.0827, lng: 80.2707 };

const INDUSTRIES = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    lat: 24.0, // Middle East (UAE/Saudi)
    lng: 45.0,
    image: OilGasImg,
    description: 'High-pressure seals for extreme offshore and onshore environments.',
  },
  {
    id: 'automotive',
    name: 'Automotive',
    lat: 51.0, // Germany
    lng: 10.0,
    image: AutomotiveImg,
    description: 'Precision sealing for demanding automotive and transmission systems.',
  },
  {
    id: 'mining',
    name: 'Mining',
    lat: -25.0, // Australia
    lng: 133.0,
    image: MiningImg,
    description: 'Durable components engineered for heavy-duty mining machinery.',
  },
  {
    id: 'life-science',
    name: 'Life Science',
    lat: 47.0, // Switzerland
    lng: 8.0,
    image: LifeScienceImg,
    description: 'Ultra-pure polymer components for critical laboratory applications.',
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor',
    lat: 23.5, // Taiwan
    lng: 121.0,
    image: SemiconductorImg,
    description: 'Contamination-free seals for precision wafer fabrication.',
  },
  {
    id: 'robotics',
    name: 'Robotics',
    lat: 36.0, // Japan
    lng: 138.0,
    image: RoboticsImg,
    description: 'Low-friction rotational components for automated manufacturing.',
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    lat: 38.0, // USA
    lng: -97.0,
    image: AerospaceImg,
    description: 'High-performance polymers withstanding extreme atmospheric stress.',
  }
];

export default function MithsonGlobe() {
  const globeEl = useRef();
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  
  // Create arc data connecting India to all industries
  const arcsData = useMemo(() => {
    return INDUSTRIES.map((ind, idx) => ({
      startLat: INDIA_COORDS.lat,
      startLng: INDIA_COORDS.lng,
      endLat: ind.lat,
      endLng: ind.lng,
      color: ['#42A4FF', '#8B5CF6'], // India (Blue) -> Destination (Purple)
      // We can use the index to stagger the animation slightly
      order: idx
    }));
  }, []);

  // HTML Markers Data
  const markersData = useMemo(() => {
    return [
      { isOrigin: true, ...INDIA_COORDS },
      ...INDUSTRIES.map(ind => ({ isOrigin: false, ...ind }))
    ];
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      // Configure auto-rotation
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false; // Disable zoom to keep it stable
      
      // Setup initial camera position to look roughly between India and Europe/Africa
      globeEl.current.pointOfView({ lat: 25, lng: 55, altitude: 2.2 }, 0);
    }
  }, []);

  // Custom invisible globe material (since we use hex polygons for landmass)
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: '#f0f4fa',
    emissive: '#ffffff',
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.95
  });

  return (
    <div className="mithson-globe-wrapper">
      <Globe
        ref={globeEl}
        width={800}
        height={800}
        backgroundColor="rgba(0,0,0,0)"
        globeMaterial={globeMaterial}
        
        // Atmosphere
        showAtmosphere={true}
        atmosphereColor="#42A4FF"
        atmosphereAltitude={0.15}
        
        // Landmass rendering (Premium dotted look)
        hexPolygonsData={worldData.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonColor={() => 'rgba(66, 164, 255, 0.4)'} // Light blue dots
        
        // Arcs
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={1.5}
        arcDashInitialGap={d => d.order * 0.3} // Staggered start
        arcDashAnimateTime={3000} // 3 seconds to travel
        arcStroke={0.7}
        arcAltitudeAutoScale={0.4}

        // HTML Markers
        htmlElementsData={markersData}
        htmlElement={d => {
          const el = document.createElement('div');
          if (d.isOrigin) {
            el.innerHTML = `
              <div class="globe-marker-origin">
                <div class="origin-pulse"></div>
                <div class="origin-core"></div>
                <div class="origin-label">INDIA</div>
              </div>
            `;
          } else {
            // Destination
            const isHovered = hoveredIndustry === d.id;
            el.className = 'globe-marker-dest-wrapper';
            
            // Add interaction events to the marker wrapper
            el.onmouseenter = () => setHoveredIndustry(d.id);
            el.onmouseleave = () => setHoveredIndustry(null);
            
            el.innerHTML = `
              <div class="globe-marker-dest ${isHovered ? 'hovered' : ''}">
                <div class="dest-image-wrapper">
                  <img src="${d.image}" alt="${d.name}" class="dest-marker-img" />
                </div>
                <div class="dest-pulse"></div>
              </div>
            `;
          }
          return el;
        }}
      />

      {/* Floating UI overlay for hovered industry */}
      <div className={`globe-info-card ${hoveredIndustry ? 'visible' : ''}`}>
        {hoveredIndustry && (
          <div className="info-card-inner">
            <h4 className="info-card-title">{INDUSTRIES.find(i => i.id === hoveredIndustry).name}</h4>
            <div className="info-card-img-wrapper">
              <img 
                src={INDUSTRIES.find(i => i.id === hoveredIndustry).image} 
                alt={INDUSTRIES.find(i => i.id === hoveredIndustry).name}
                className="info-card-img"
              />
            </div>
            <p className="info-card-desc">{INDUSTRIES.find(i => i.id === hoveredIndustry).description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
