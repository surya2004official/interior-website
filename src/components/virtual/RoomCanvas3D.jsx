import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const RoomCanvas3D = ({ theme = 'marble' }) => {
  const mountRef = useRef(null);
  const [activeElement, setActiveElement] = useState(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === 'noir' ? 0x121212 : 0x1f1d1b);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(5, 4, 7);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Architectural Lighting
    const ambientLight = new THREE.AmbientLight(0xfff3e0, 0.9);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffe8c2, 4);
    spotLight.position.set(4, 7, 3);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.8;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const goldAccentLight = new THREE.PointLight(0xc5a47e, 2, 8);
    goldAccentLight.position.set(-2, 2.5, 0);
    scene.add(goldAccentLight);

    // Materials based on theme
    const floorColor = theme === 'noir' ? 0x222222 : 0xdcd3c7;
    const wallColor = theme === 'noir' ? 0x1c1a18 : 0xede6dc;
    const marbleColor = theme === 'noir' ? 0x2b2b2b : 0xf4f1ea;

    // Floor
    const floorGeo = new THREE.PlaneGeometry(10, 10);
    const floorMat = new THREE.MeshStandardMaterial({ 
      color: floorColor, 
      roughness: 0.35, 
      metalness: 0.1 
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Back Wall
    const wallGeo = new THREE.PlaneGeometry(10, 6);
    const wallMat = new THREE.MeshStandardMaterial({ 
      color: wallColor, 
      roughness: 0.8 
    });
    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, 3, -5);
    backWall.receiveShadow = true;
    scene.add(backWall);

    // Left Wall
    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.position.set(-5, 3, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    // Architectural Feature: Calacatta Coffee Monolith
    const monolithGeo = new THREE.BoxGeometry(2.4, 0.45, 1.4);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: marbleColor,
      roughness: 0.15,
      metalness: 0.05
    });
    const monolith = new THREE.Mesh(monolithGeo, monolithMat);
    monolith.position.set(0, 0.225, 0);
    monolith.castShadow = true;
    monolith.receiveShadow = true;
    scene.add(monolith);

    // Bronze Trim on Table Base
    const trimGeo = new THREE.BoxGeometry(2.42, 0.08, 1.42);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xc5a47e,
      metalness: 0.85,
      roughness: 0.2
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.set(0, 0.04, 0);
    scene.add(trim);

    // Curved Bouclé Sofa Element
    const sofaGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.6, 32, 1, false, 0, Math.PI);
    const sofaMat = new THREE.MeshStandardMaterial({
      color: 0xfaf8f5,
      roughness: 0.9,
      metalness: 0.0
    });
    const sofa = new THREE.Mesh(sofaGeo, sofaMat);
    sofa.position.set(0, 0.3, -1.8);
    sofa.rotation.x = -Math.PI / 2;
    sofa.rotation.z = Math.PI;
    sofa.castShadow = true;
    scene.add(sofa);

    // Architectural Column with Gold Accent
    const colGeo = new THREE.CylinderGeometry(0.35, 0.35, 6, 32);
    const colMat = new THREE.MeshStandardMaterial({ color: 0xc5a47e, metalness: 0.7, roughness: 0.3 });
    const column = new THREE.Mesh(colGeo, colMat);
    column.position.set(-4, 3, -4);
    column.castShadow = true;
    scene.add(column);

    // Simple interaction: orbit rotation on drag
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0.3;

    const onMouseDown = (e) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      targetRotationY += deltaX * 0.006;
      targetRotationX = Math.max(0.1, Math.min(0.8, targetRotationX + deltaY * 0.004));
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animationFrameId;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera orbit
      if (!isMouseDown) {
        targetRotationY += 0.0015; // subtle autonomous architectural rotation
      }

      const radius = 8;
      camera.position.x = Math.sin(targetRotationY) * radius * Math.cos(targetRotationX);
      camera.position.z = Math.cos(targetRotationY) * radius * Math.cos(targetRotationX);
      camera.position.y = Math.sin(targetRotationX) * radius + 1.5;
      camera.lookAt(0, 1.2, 0);

      // Subtle light oscillation
      angle += 0.02;
      spotLight.position.x = 4 + Math.sin(angle) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-full min-h-[460px] bg-charcoal-950 cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full min-h-[460px]" />
      <div className="absolute bottom-4 left-4 bg-charcoal-900/80 backdrop-blur-md px-3 py-1.5 border border-gold/30 text-[10px] uppercase tracking-wider text-stone-300">
        3D Architectural Perspective &bull; Click &amp; Drag to Orbit
      </div>
    </div>
  );
};
