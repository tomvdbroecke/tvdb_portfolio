'use client'

// Imports
import { useEffect, useState } from "react"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// TODO: Make background skybox seamless?
// TODO: Save X amount of geometry array points on galaxyScene
// TODO: Somehow lock camera to chosen state star

// Galaxy component
export default function Galaxy() {
    // States
    const [initialized, setInitialized] = useState(false)
    const [targetCameraPosition, setTargetCameraPosition] = useState({ x: 8, y: 4, z: 8})
    const [targetCameraTargetPosition, setTargetCameraTargetPosition] = useState({ x: 0, y: 0, z: 0 })
    const [galaxyScene, setGalaxyScene] = useState(null)

    // Animation
    const [ticker, setTicker] = useState(0)
    const animationParams = {
        animationSpeed: 33, // In ms
        cameraSpeed: 2,
        galaxyRotationSpeed: 500 // Lower is faster
    }

    // Initialize when component is mounted
    useEffect(() => {
        // Initialize galaxy, and initialize animation
        // TODO:    Make 2 more states for start distance between target camera and target camera target
        //          Then when starting animation, calculate the starting distance, and use this as "max distance" in the anim step calculation
        // CAMERA ZOOM MODE: { 3, 3, 3 }
        if (!initialized) {
            initializeGalaxyScene(setInitialized, setGalaxyScene, setTicker)
            setTargetCameraPosition({
                x: 8,
                y: 7,
                z: 8
            })
            setTargetCameraTargetPosition({
                x: 0,
                y: 3,
                z: 0
            })
            /*
            setTimeout(() => {
                setTargetCameraPosition({
                    x: 3,
                    y: 3,
                    z: 3
                })
                setTargetCameraTargetPosition({
                    x: 0,
                    y: 0,
                    z: 0
                })
            }, 3000)
            */
        }
        // On every tick, animate
        if (galaxyScene) animate(
            galaxyScene,
            ticker,
            setTicker,
            animationParams,
            targetCameraPosition,
            targetCameraTargetPosition,
            setTargetCameraTargetPosition
        )
    }, [ticker])

    // Return the canvas
    return (<canvas className="absolute top-0 z-0" id="GalaxyCanvas" />)
}

// Animation ease function
const easeFunction = t => (--t) * t * t + 1

// Move function
const move = (pos, target, step) => {
    const margin = 0.01

    // X axis
    if (pos.x > target.x + margin) {
        pos.x -= step
        if (pos.x < target.x) pos.x = target.x
    } else if (pos.x < target.x - margin) {
        pos.x += step
        if (pos.x > target.x) pos.x = target.x
    }

    // Y axis
    if (pos.y > target.y + margin) {
        pos.y -= step
        if (pos.y < target.y) pos.y = target.y
    } else if (pos.y < target.y - margin) {
        pos.y += step
        if (pos.y > target.y) pos.y = target.y
    }

    // Z axis
    if (pos.z > target.z + margin) {
        pos.z -= step
        if (pos.z < target.z) pos.z = target.z
    } else if (pos.z < target.z - margin) {
        pos.z += step
        if (pos.z > target.z) pos.z = target.z
    }
}

// Follow target camera position function
const followTargetCameraPosition = (params, galaxyScene, targetCameraPosition) => {
    const pos = galaxyScene.camera.position
    const targetPosition = new THREE.Vector3(targetCameraPosition.x, targetCameraPosition.y, targetCameraPosition.z)

    const maxDistance = 10
    const distance = targetPosition.distanceTo(pos)
    const t = Math.min(1, distance / maxDistance)

    const ease = easeFunction(t)
    const step = (params.cameraSpeed * 0.01) * params.animationSpeed * ease

    move(pos, targetCameraPosition, step)
}

// Follow target camera target position function
const followTargetCameraTargetPosition = (params, galaxyScene, targetCameraTargetPosition) => {
    const pos = galaxyScene.controls.target
    const targetPosition = new THREE.Vector3(targetCameraTargetPosition.x, targetCameraTargetPosition.y, targetCameraTargetPosition.z)

    const maxDistance = 10
    const distance = targetPosition.distanceTo(pos)
    const t = Math.min(1, distance / maxDistance)

    const ease = easeFunction(t)
    const step = (params.cameraSpeed * 0.01) * params.animationSpeed * ease

    move(pos, targetCameraTargetPosition, step)
}

// Animation function
const animate = (galaxyScene, ticker, setTicker, params, targetCameraPosition, targetCameraTargetPosition, setTargetCameraTargetPosition) => {
    // Render
    galaxyScene.renderer.render(galaxyScene.scene, galaxyScene.camera)

    // Follow target camera position and target camera target position
    followTargetCameraPosition(params, galaxyScene, targetCameraPosition)
    followTargetCameraTargetPosition(params, galaxyScene, targetCameraTargetPosition)

    // Slowly rotate geometry
    galaxyScene.geometry.rotateY((ticker / params.galaxyRotationSpeed) - ((ticker - 1) / params.galaxyRotationSpeed))

    // Update controls
    galaxyScene.controls.update()

    // Test something
    /*
    const testPos = galaxyScene.geometry.attributes.position.array
    setTargetCameraTargetPosition({ x: testPos[0], y: testPos[1], z: testPos[2] })
    */

    // Tick for next animation frame
    setTimeout(() => {
        setTicker(ticker + 1)
    }, params.animationSpeed)
}

// Galaxy Scene Setup
const initializeGalaxyScene = (setInitialized, setGalaxyScene, setTicker) => {
    // Set initialized
    setInitialized(true)

    // Star material and params
    var star = new THREE.TextureLoader().load('star.png') // make blended?
    const params = {
        count: 150000, // was 300k
        size: 0.01,
        radius: 10,
        branches: 2,
        spin: 1,
        randomness: 1,
        randomnessPower: 1,
        backgroundColor: "#000712",
        mainColor: "#72ab92", // for 300k: #588571
        insideColor: "#ff6030",
        outsideColor: "#1b3984"
    }

    // Setup canvas and scene
    const canvas = document.getElementById("GalaxyCanvas")
    const scene = new THREE.Scene()
    //const backgroundTexture = new THREE.TextureLoader().load('background_static.jpg')
    //backgroundTexture.colorSpace = THREE.SRGBColorSpace
    //scene.background = backgroundTexture
    scene.background = new THREE.Color(params.backgroundColor)

    // Setup galaxy geometry
    let geometry = null
    let material = null
    let points = null
    const generateGalaxy = () => {
        if (points) {
            scene.remove(points)
            material.dispose()
            geometry.dispose()
        }

        // Points
        geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(params.count * 3)
        const colors = new Float32Array(params.count * 3)

        const colorInside = new THREE.Color(params.insideColor)
        const colorOutside = new THREE.Color(params.outsideColor)

        for (let i = 0; i < params.count; i++) {
            const i3 = i * 3

            const r = Math.random() * params.radius

            const mixedColor = colorInside.clone()
            mixedColor.lerp(colorOutside, r / params.radius)
            colors[i3] = mixedColor.r
            colors[i3 + 1] = mixedColor.g
            colors[i3 + 2] = mixedColor.b

            const branchIndex = i % params.branches
            const branchAngle = branchIndex / params.branches
            const rotation = branchAngle * Math.PI * 2
            const spinAngle = r * params.spin

            const randomX =
                Math.pow(Math.random(), params.randomnessPower) *
                (Math.random() - 0.5) *
                params.randomness *
                r
            const randomY =
                Math.pow(Math.random(), params.randomnessPower) *
                (Math.random() - 0.5) *
                params.randomness *
                r
            const randomZ =
                Math.pow(Math.random(), params.randomnessPower) *
                (Math.random() - 0.5) *
                params.randomness *
                r

            positions[i3] = Math.cos(rotation + spinAngle) * r + randomX
            positions[i3 + 1] = randomY
            positions[i3 + 2] = Math.sin(rotation + spinAngle) * r + randomZ
        }

        // Branches
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

        // Materials
        material = new THREE.PointsMaterial({
            color: params.mainColor, // #6359ee | #ffffff?
            size: params.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            map: star,
            transparent: true, // If skybox, set this to true || otherwise false
            //renderOrder: 999 // Render on top of skybox
        })
        points = new THREE.Points(geometry, material)
        scene.add(points)
    }
    generateGalaxy()

    // View sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // On resize
    window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
    )
    camera.position.x = 8
    camera.position.y = 4
    camera.position.z = 8
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    //controls.autoRotate = true
    controls.enabled = false
    controls.target = new THREE.Vector3(0, 0, 0)
    //controls.enableDamping = true

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Skybox [KIND OF A PERFORMANCE HIT]
    const loadSkybox = async () => {
        const skyboxGeometry = new THREE.SphereGeometry(50, 60, 40)
        skyboxGeometry.scale(-1, 1, 1)
        const skyboxTexture = new THREE.TextureLoader().load('background.jpg')
        skyboxTexture.colorSpace = THREE.SRGBColorSpace
        const skyboxMaterial = new THREE.MeshBasicMaterial({ map: skyboxTexture })
        const skyboxMesh = new THREE.Mesh(skyboxGeometry, skyboxMaterial)
        scene.add(skyboxMesh)
    }
    //loadSkybox()

    setGalaxyScene({
        scene: scene,
        camera: camera,
        renderer: renderer,
        controls: controls,
        geometry: geometry
    })
    console.log(geometry)
    setTicker(1)
}