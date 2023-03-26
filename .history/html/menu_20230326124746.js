//  This menu is created using three.js

//  DO NOT TOUCH THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING..
// ANY CHANGES WILL BREAK IT AND RENDER IT USELESS

//  Set up basic three.js scene | camera, renderer, and container for the menu

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a container for your menu
const menuContainer = new THREE.Object3D();
scene.add(menuContainer);
