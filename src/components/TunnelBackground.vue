<template>
  <div ref="container" class="tunnel-bg"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  sectionIndex: {
    type: Number,
    default: 0
  },
  scrollIntensity: {
    type: Number,
    default: 0
  }
})

const container = ref(null)

let scene, camera, renderer, clock
let tunnel, particles, rings
let animId

// Shader du tunnel (identique à l'original)
const vortexVertex = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float dist = distance(uv, vec2(0.5));
    pos.z += sin(dist * 10.0 - uTime * 2.0) * (uScroll * 2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const vortexFragment = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor;

  void main() {
    vec2 uv = vUv;
    float d = distance(uv, vec2(0.5));
    float ring = sin(d * 40.0 - uTime * 3.0);
    ring = step(0.9, ring);
    vec3 color = mix(vec3(0.0), uColor, ring * (1.0 - d));
    gl_FragColor = vec4(color, color.r * 0.5);
  }
`

// Couleurs par section - adaptées au portfolio
const sectionColors = [
  new THREE.Color(0x22d3ee), // Home → cyan
  new THREE.Color(0xa855f7), // About → purple
  new THREE.Color(0x6366f1), // Projects → indigo
  new THREE.Color(0x8b5cf6), // Contact → violet
]

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  clock = new THREE.Clock()

  // Tunnel
  const tunnelGeom = new THREE.CylinderGeometry(5, 5, 100, 64, 100, true)
  tunnelGeom.rotateX(Math.PI / 2)

  const tunnelMat = new THREE.ShaderMaterial({
    vertexShader: vortexVertex,
    fragmentShader: vortexFragment,
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uColor: { value: sectionColors[0].clone() }
    },
    transparent: true,
    side: THREE.BackSide
  })

  tunnel = new THREE.Mesh(tunnelGeom, tunnelMat)
  scene.add(tunnel)

  // Particules starfield
  const pGeom = new THREE.BufferGeometry()
  const pCount = 3000
  const posArray = new Float32Array(pCount * 3)
  for (let i = 0; i < pCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50
  }
  pGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  const pMat = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xffffff,
    transparent: true,
    opacity: 0.3
  })
  particles = new THREE.Points(pGeom, pMat)
  scene.add(particles)

  // Anneaux lumineux additionnels
  rings = []
  for (let i = 0; i < 5; i++) {
    const ringGeom = new THREE.TorusGeometry(2 + i * 0.5, 0.01, 8, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: sectionColors[0],
      transparent: true,
      opacity: 0.15 - i * 0.02
    })
    const ring = new THREE.Mesh(ringGeom, ringMat)
    ring.position.z = -i * 5
    scene.add(ring)
    rings.push(ring)
  }

  window.addEventListener('resize', onResize)
  animate()
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  animId = requestAnimationFrame(animate)
  const t = clock.getElapsedTime()

  tunnel.material.uniforms.uTime.value = t
  tunnel.material.uniforms.uScroll.value = props.scrollIntensity
  tunnel.rotation.z = t * 0.05
  particles.rotation.z = t * 0.02

  // Anneaux qui se rapprochent
  rings.forEach((ring, i) => {
    ring.position.z = ((t * 2 + i * 5) % 25) - 5
    ring.rotation.z = t * 0.1 * (i % 2 === 0 ? 1 : -1)
  })

  // Flottement caméra
  camera.position.x = Math.sin(t) * 0.005
  camera.position.y = Math.cos(t) * 0.005

  renderer.render(scene, camera)
}

// Réagir au changement de section
watch(() => props.sectionIndex, (newIdx) => {
  if (!tunnel) return
  const targetColor = sectionColors[newIdx] || sectionColors[0]
  const current = tunnel.material.uniforms.uColor.value

  // Animation GSAP-like manuelle vers la nouvelle couleur
  const startR = current.r, startG = current.g, startB = current.b
  const endR = targetColor.r, endG = targetColor.g, endB = targetColor.b
  const duration = 60 // frames
  let frame = 0

  const lerp = (a, b, t) => a + (b - a) * t

  const colorAnim = setInterval(() => {
    frame++
    const progress = frame / duration
    const ease = 1 - Math.pow(1 - progress, 3) // ease out cubic
    current.r = lerp(startR, endR, ease)
    current.g = lerp(startG, endG, ease)
    current.b = lerp(startB, endB, ease)
    rings.forEach(ring => ring.material.color.copy(current))
    if (frame >= duration) clearInterval(colorAnim)
  }, 16)

  // Boost tunnel
  let boostFrame = 0
  const boost = setInterval(() => {
    boostFrame++
    const t = boostFrame / 30
    tunnel.material.uniforms.uScroll.value = Math.sin(t * Math.PI) * 5
    if (boostFrame >= 30) {
      tunnel.material.uniforms.uScroll.value = 0
      clearInterval(boost)
    }
  }, 16)

  // Avancer la caméra
  const targetZ = 5 - newIdx * 2
  const startZ = camera.position.z
  let camFrame = 0
  const camAnim = setInterval(() => {
    camFrame++
    const progress = camFrame / 90
    const ease = 1 - Math.pow(1 - progress, 4)
    camera.position.z = lerp(startZ, targetZ, ease)
    if (camFrame >= 90) clearInterval(camAnim)
  }, 16)
})

onMounted(init)
onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})
</script>

<style scoped>
.tunnel-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
</style>