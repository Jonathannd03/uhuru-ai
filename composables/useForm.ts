import { ref } from 'vue'

export const useForm = (initialValues = {}) => {
  const values = ref({ ...initialValues })
  const errors = ref({})
  const isSubmitting = ref(false)
  
  const setFieldValue = (name, value) => {
    values.value[name] = value
    
    // Clear error when field is updated
    if (errors.value[name]) {
      delete errors.value[name]
    }
  }
  
  const validate = (rules) => {
    errors.value = {}
    let isValid = true
    
    Object.keys(rules).forEach(field => {
      const rule = rules[field]
      const value = values.value[field]
      
      if (rule.required && !value) {
        errors.value[field] = rule.required
        isValid = false
        return
      }
      
      if (rule.pattern && value && !rule.pattern.value.test(value)) {
        errors.value[field] = rule.pattern.message
        isValid = false
        return
      }
    })
    
    return isValid
  }
  
  const handleSubmit = async (callback) => {
    isSubmitting.value = true
    
    try {
      await callback(values.value)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      isSubmitting.value = false
    }
  }
  
  return {
    values,
    errors,
    isSubmitting,
    setFieldValue,
    validate,
    handleSubmit
  }
}