import * as THREE from "three";

// Canvas
// here we are targeting the webGl class in the canvas here
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
// We will create mesh which is a combinaiton of geometry (the shape) and a material

// for geometry we have to send multiple values
const geometry = new THREE.BoxGeometry(1, 1, 1);
// In material we will use object inside it and write the color
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
// PerspectiveCamera
// two essential parameters which are field of view
// 1. parameter is fov
// 2. the aspect ratio

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// high field of view is not recommended but that is totally up to your project
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// we can transform objects using position, rotation and scale
// we are going to use the position property to move the camera backward
// position is an object with three relevant properties x,y,z
camera.position.z = 3;
scene.add(camera);

// Renderer
// we will create canvas in the html  file
// in script we will get at with selecting querySelector
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
