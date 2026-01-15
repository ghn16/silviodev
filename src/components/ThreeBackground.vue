<template>
  <div ref="canvasContainer" class="three-background"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)
let scene, camera, renderer, particles, animationId

const initThree = () => {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasContainer.value.appendChild(renderer.domElement)

  // Créer les particules
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 3000
  const posArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 12
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3)
  )

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: '#22D3EE',
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  })

  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  window.addEventListener('resize', onWindowResize)
  document.addEventListener('mousemove', onMouseMove)
}

let mouseX = 0
let mouseY = 0

const onMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  particles.rotation.x += 0.0003
  particles.rotation.y += 0.0005

  // Interaction souris
  particles.rotation.x += mouseY * 0.00003
  particles.rotation.y += mouseX * 0.00003

  renderer.render(scene, camera)
}

onMounted(() => {
  initThree()
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  document.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', onWindowResize)
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped>
.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>