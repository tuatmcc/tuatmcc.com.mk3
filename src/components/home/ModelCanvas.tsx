import { type FC, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const ModelCanvas: FC = () => {
	const canvasRef = useRef(null);
	useEffect(() => {
		async function init() {
			const scene = new THREE.Scene();
			scene.background = new THREE.Color(0xffffff);
			const geometry = new THREE.PlaneGeometry(100, 100);
			const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
			const floor = new THREE.Mesh(geometry, material);
			floor.lookAt(0, 1, 0);
			scene.add(floor);

			const loader = new GLTFLoader();
			let mesh: THREE.Object3D;
			loader.load("/models/mcc.glb", (gltf) => {
				mesh = gltf.scene;
				mesh.position.y = -1;
				mesh.castShadow = true;
				scene.add(mesh);
			});

			const sizes = {
				width: window.innerWidth,
				height: window.innerHeight,
			};
			const camera = new THREE.PerspectiveCamera(
				75,
				sizes.width / sizes.height,
			);
			camera.position.x = 2;
			camera.position.y = 103;
			camera.position.z = 2;
			camera.lookAt(0, 0, 0);
			camera.fov = 40;
			scene.add(camera);

			const ambientLight = new THREE.AmbientLight(0xffffff, 10);
			scene.add(ambientLight);
			// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
			// directionalLight.position.set(5, 5, 5);
			// scene.add(directionalLight);

			const canvas = canvasRef.current ?? undefined;
			const renderer = new THREE.WebGLRenderer({
				canvas: canvas,
			});
			renderer.setSize(sizes.width, sizes.height);
			renderer.render(scene, camera);

			function animate() {
				requestAnimationFrame(animate);
				if (mesh.position.y <= 0) {
					mesh.position.y += 0.01;
					camera.position.y -= 1;
				}

				renderer.render(scene, camera);
			}
			animate();
		}

		init();
	}, []);

	return (
		<>
			<canvas ref={canvasRef} />
		</>
	);
};
