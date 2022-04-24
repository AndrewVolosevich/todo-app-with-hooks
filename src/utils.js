export const createItem = (label) => {

  return {
    id: new Date().toString() + Math.random(),
    label,
    done: false,
    important: false
  }
}