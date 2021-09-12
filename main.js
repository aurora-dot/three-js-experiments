import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);
renderer.setClearColor(0x282a36);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({
  color: 0xbd93f9,
  wireframe: true,
});
const torusKnot = new THREE.Mesh(geometry, material);

// let xPos = THREE.MathUtils.randFloat(-40, 40);
// let zPos = THREE.MathUtils.randFloat(-40, 0);
// let yPos = THREE.MathUtils.randFloat(-40, 40);
// torusKnot.position.set(xPos, yPos, zPos);

scene.add(torusKnot);

/**
 * The main animate loop
 */
function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.02;
  torusKnot.rotation.z += 0.03;

  renderer.render(scene, camera);
}

animate();
