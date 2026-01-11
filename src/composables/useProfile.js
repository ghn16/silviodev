import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const STORAGE_KEY = 'userProfile'

export function useProfile() {
  const router = useRouter()
  const profile = ref(localStorage.getItem(STORAGE_KEY) || null)

  // Sauvegarder automatiquement dans localStorage
  watch(profile, (newProfile) => {
    if (newProfile) {
      localStorage.setItem(STORAGE_KEY, newProfile)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  })

  const setProfile = (newProfile) => {
    profile.value = newProfile
    router.push(`/dashboard/${newProfile}`)
  }

  const resetProfile = () => {
    profile.value = null
    router.push('/')
  }

  return {
    profile,
    setProfile,
    resetProfile
  }
}