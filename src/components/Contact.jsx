import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Contact() {
  const containerRef = useRef();
  const formRef = useRef(); // ADD THIS
  const [status, setStatus] = useState({ type: "", message: "" }); // ADD THIS
  const [isSubmitting, setIsSubmitting] = useState(false); // ADD THIS

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3, 3, 5);

    // Renderer (transparent)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load Model
    const loader = new GLTFLoader();
    let model;

    loader.load(
      "/globemodel/scene.gltf",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(2, 2, 2);
        model.position.y = -0.005;
        model.position.x = 1;
        scene.add(model);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      if (model) model.rotation.y += 0.004;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  // UPDATED EmailJS form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm("service_8ahe879", "template_vrokuo6", formRef.current, "loHGR1K2UNBFBXbdr")
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus({
            type: "success",
            message: "✅ Message sent successfully! I'll get back to you soon."
          });
          formRef.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus({
            type: "error",
            message: "❌ Failed to send message. Please try again or email me directly."
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 gap-8">
      {/* Contact Form Left */}
      <form
        ref={formRef} // ADD THIS
        onSubmit={handleSubmit}
        className="shadow-[0_8px_0_0_#06b6d4] hover:shadow-[0_12px_0_0_#06b6d4] transition-transform transform hover:-translate-y-2 duration-300 w-full md:w-[420px] rounded-2xl p-6"
      >
        <h2 className="text-3xl font-semibold text-gray-300 bits mb-4 text-center">
          CONTACT ME
        </h2>

        {/* ADD STATUS MESSAGE */}
        {status.message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* First Name & Last Name */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            name="first_name"
            placeholder="ARYAN"
            required
            className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="last_name"
            placeholder="PAOU"
            required
            className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="user_email"
            placeholder="ENTER YOUR EMAIL PLEASE  :)"
            required
            className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Subject Dropdown */}
        <div className="mb-4">
          <select
            name="subject"
            required
            defaultValue="" // CHANGE THIS from 'selected' attribute
            className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-600"
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="project_inquiry">Project Inquiry</option>
            <option value="job_opportunity">Job Opportunity</option>
            <option value="collaboration">Collaboration</option>
            <option value="general_message">General Message</option>
          </select>
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here...."
            required
            className="w-full h-32 p-3 border border-gray-400 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        {/* Submit Button - UPDATED */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-cyan-500 font-semibold tracking-wider transition-all duration-300 ${
            isSubmitting 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-gradient-to-r hover:from-white hover:to-green-400 hover:bg-clip-text hover:text-transparent"
          }`}
        >
          {isSubmitting ? "[SENDING...]" : "[SUBMIT]"}
        </button>

        {/* Tip line */}
        <p className="text-center text-sm text-gray-500 mt-3 italic">
           If you felt the pulse behind the pixels, reach out.
        </p>
        <p className="text-center text-sm text-gray-500 -mt-1 italic">
  💡Tip: Most active on{' '}
  <a 
    href="https://www.instagram.com/aryan.paou/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all"
  >
    Instagram
  </a>
  
</p>
      </form>

      {/* 3D Globe Right */}
      <div ref={containerRef} className="w-full md:w-1/2 h-[320px] sm:h-[420px] md:h-[500px]"></div>
      {/* Resume Card - Bottom Left */}
<div className="static md:absolute md:bottom-4 md:left-4 scale-[0.80] origin-bottom-left mt-8 md:mt-0">
  <a href="/RESUME_ARYAN_CV.pdf" download>
    <div className="duration-300 hover:-rotate-0 -rotate-12 group border border-cyan-400 border-4 overflow-hidden rounded-2xl h-52 w-72 bg-cyan-400/10 p-5 flex flex-col items-start gap-4">

      <div className="text-cyan-400">
        <span className="font-bold text-3xl">{"Developer {}"}</span>
        <p className="text-s">& much more</p>
      </div>

      <button className="duration-300 hover:bg-cyan-400 bg-white border border-cyan-400 text-cyan-400 hover:text-black font-semibold px-3 py-2 flex flex-row items-center gap-3">
        RESUME
        <svg className="w-6 h-6 fill-current" viewBox="0 0 100 100">
          <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"/>
        </svg>
      </button>

      {/* Decorative SVGs */}
      <svg className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 fill-cyan-400 stroke-cyan-400/30 z-10" viewBox="0 0 64 64">
        <path strokeWidth="5" d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 005.7-8.8h.1c3 0 3.8-6.3 3.8-7.3S49.6 22 46.5 22C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 .5 5-9.5 6.8S2 62 2 62h60A14.6 14.6 0 0050.4 51z"/>
      </svg>

      <svg className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 fill-cyan-400/60 stroke-cyan-400/20 z-0" viewBox="0 0 64 64">
        <path strokeWidth="2" d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 005.7-8.8h.1c3 0 3.8-6.3 3.8-7.3S49.6 22 46.5 22C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 .5 5-9.5 6.8S2 62 2 62h60A14.6 14.6 0 0050.4 51z"/>
      </svg>
    </div>
  </a>
</div>

    </div>
  );
}

export default Contact;
