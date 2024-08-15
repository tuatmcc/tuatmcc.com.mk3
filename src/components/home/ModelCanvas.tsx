import { type FC, useEffect, useRef } from "react";
import * as THREE from "three";
import {
	BloomPass,
	GLTFLoader,
	OrbitControls,
	OutputPass,
	RGBELoader,
	RenderPass,
	UnrealBloomPass,
} from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

export const ModelCanvas: FC = () => {
	const canvasRef = useRef(null);
	useEffect(() => {
		async function init() {
			const scene = new THREE.Scene();
			scene.background = new THREE.Color(0xffffff);
			// const floor = new THREE.Mesh(
			// 	new THREE.PlaneGeometry(100, 100),
			// 	new THREE.MeshBasicMaterial({ color: 0x999999 }),
			// );
			// floor.position.y = -1;
			// floor.receiveShadow = true;
			// floor.lookAt(0, 1, 0);
			// scene.add(floor);

			const loader = new GLTFLoader();
			let mcc: THREE.Group;
			let m: THREE.Group;
			let ct: THREE.Group;
			let cr: THREE.Group;
			let distance = 2;
			loader.load("/models/mcc.glb", (gltf) => {
				mcc = gltf.scene;
				scene.add(mcc);
			});
			loader.load("/models/m.glb", (gltf) => {
				m = gltf.scene;
				m.position.z = distance;
				scene.add(m);
			});
			loader.load("/models/c.top.glb", (gltf) => {
				ct = gltf.scene;
				ct.position.y = distance;
				scene.add(ct);
			});
			loader.load("/models/c.right.glb", (gltf) => {
				cr = gltf.scene;
				cr.position.x = distance;
				scene.add(cr);
			});

			const sizes = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
			const camera = new THREE.PerspectiveCamera(
				75,
				sizes.width / sizes.height,
			);
			camera.position.x = 4;
			camera.position.y = 4;
			camera.position.z = 4;
			camera.far = 500;
			camera.near = 0.01;
			scene.add(camera);

			const lightStrength = 1;
			const ambientLight = new THREE.AmbientLight(0xffffff, lightStrength);
			scene.add(ambientLight);

			const directionalLight = new THREE.DirectionalLight(
				0xffffff,
				lightStrength,
			);
			directionalLight.position.set(3, 3, 3);
			scene.add(directionalLight);

			const canvas = canvasRef.current ?? undefined;
			const renderer = new THREE.WebGLRenderer({
				canvas: canvas,
				alpha: true,
			});
			renderer.setSize(sizes.width, sizes.height);
			renderer.render(scene, camera);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
			controls.enableZoom = true;
			controls.enablePan = true;
			controls.dampingFactor = 0.25;
			controls.screenSpacePanning = false;
			controls.maxPolarAngle = Math.PI / 2;
			controls.minDistance = 0.1;
			controls.maxDistance = 5;

			const renderPass = new RenderPass(scene, camera);
			const bloomPass = new UnrealBloomPass(
				new THREE.Vector2(window.innerWidth, window.innerHeight),
				1,
				0.4,
				2,
			);
			const outputPass = new OutputPass();

			const composer = new EffectComposer(renderer);
			composer.addPass(renderPass);
			composer.addPass(bloomPass);
			composer.addPass(outputPass);

			function animate() {
				requestAnimationFrame(animate);
				if (distance > 0) {
					distance -= 0.01;
					m.position.z = distance;
					ct.position.y = distance;
					cr.position.x = distance;
				}

				renderer.render(scene, camera);
				composer.render();
			}
			animate();

			window.addEventListener("resize", () => {
				sizes.width = window.innerWidth;
				sizes.height = window.innerHeight;

				camera.aspect = sizes.width / sizes.height;
				camera.updateProjectionMatrix();

				renderer.setSize(sizes.width, sizes.height);
				composer.setSize(sizes.width, sizes.height);
			});
		}

		init();
	}, []);

	return (
		<>
			<canvas ref={canvasRef} />
		</>
	);
};
