// Or JS will go here
let scene, camera, renderer, cube;

function init() {
	// Setting up the scene
	scene = new THREE.Scene();

	// Setting up the camera & perspective
	camrea = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	// Setting up the renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	// Setting the render size
	renderer.setSize(window.innerWidth, window.innerHeight);
	// Adding the renderer to the DOM
	document.body.appendChild(renderer.domElement);

	// Setting up the box geometry
	const geometry = new THREE.BoxGeometry(2, 2, 2);
	// Setting up texture and applying it to the geometry
	const texture = new THREE.TextureLoader().load('../textures/water.jpg');
	const material = new THREE.MeshBasicMaterial({ map: texture });
	// Setting up the cube
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	// Position the camera
	camrea.position.z = 5;
}

// Animation function
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camrea);
}

// Window resize function
function onWindowResize() {
	camrea.aspect = window.innerWidth / window.innerHeight;
	camrea.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
