
const useCreateDate = () => {
    const dateObj = new Date()
    const month = dateObj.getMonth()
    const date = `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`

    return date
}

export default useCreateDate