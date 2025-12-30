import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Hero = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 7);


      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.physicallyCorrectLights = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);

      // Lights
      scene.add(new THREE.HemisphereLight(0x00D5F1FF
  , 0x00D5F1FF
  , 0.15));
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 5, 5);
      scene.add(pointLight);

      const spotLight = new THREE.SpotLight(0x00D5F1FF, 1);
      spotLight.position.set(-20, 50, 10);
      spotLight.angle = 0.12;
      spotLight.penumbra = 1;
      spotLight.castShadow = true;
      spotLight.shadow.mapSize.set(1024, 1024);
      scene.add(spotLight);

      const topLight = new THREE.DirectionalLight(0x00D5F1FF
  , 1);
      topLight.position.set(0, 20, 0);
      topLight.castShadow = true;
      scene.add(topLight);
      
  // Right light
  const rightLight = new THREE.DirectionalLight(0xffffff, 1.5);
  rightLight.position.set(20, 0, 10); // from the right
  rightLight.castShadow = true;
  scene.add(rightLight);

      // Model
      const loader = new GLTFLoader();
    loader.load(
      "/desktop_pc/scene.gltf",
      (gltf) => {
        gltf.scene.scale.set(0.6, 0.6, 0.6);
        gltf.scene.rotation.y = 4.7;
        gltf.scene.position.set(1, -0.5, 1);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error("Model error:", error)
    );

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.01;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-250 mt-6 h-180 -translate-y-[520px] translate-x-[220px] "
    />
  );
};

export default Hero;
