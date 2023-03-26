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


// Create a box geometry for the menu item
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material for the menu item
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Create a mesh for the menu item using the geometry and material
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

// Position the menu item relative to the menu container
boxMesh.position.set(0, 0, -5);

// Add the menu item to the menu container
menuContainer.add(boxMesh);


// Position the menu container at the top of the browser window
menuContainer.position.set(0, window.innerHeight / 2 - 50, 0);

// Style the menu container using CSS
menuContainer.element = document.createElement('div');
menuContainer.element.style.position = 'absolute';
menuContainer.element.style.top = '0';
menuContainer.element.style.left = '0';
menuContainer.element.style.width = '100%';
menuContainer.element.style.height = '100px';
menuContainer.element.style.display = 'flex';
menuContainer.element.style.justifyContent = 'space-around';
document.body.appendChild(menuContainer.element);


// Add a click listener to the box menu item
boxMesh.element = document.createElement('div');
boxMesh.element.style.cursor = 'pointer';
boxMesh.element.addEventListener('click', () => {
  console.log('Box menu item clicked!');
});
menuContainer.element.appendChild(boxMesh.element);
