export const isHoliday = () => {
  const date = new Date()
  const day = date.getDay()
  return day === 4 || day === 5
}