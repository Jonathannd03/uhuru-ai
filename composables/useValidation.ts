export const useValidation = () => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
    
    const validateRequired = (value) => {
      return value !== null && value !== undefined && value.toString().trim() !== ''
    }
    
    const validateMinLength = (value, minLength) => {
      return value && value.length >= minLength
    }
    
    const validatePhone = (phone) => {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
      return phoneRegex.test(phone)
    }
    
    return {
      validateEmail,
      validateRequired,
      validateMinLength,
      validatePhone
    }
  }