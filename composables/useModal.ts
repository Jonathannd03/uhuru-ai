import { ref } from 'vue'

export const useModal = () => {
  const isOpen = ref(false)
  
  const open = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  
  const close = () => {
    isOpen.value = false
    document.body.style.overflow = 'auto'
  }
  
  const toggle = () => {
    isOpen.value ? close() : open()
  }
  
  return {
    isOpen,
    open,
    close,
    toggle
  }
}