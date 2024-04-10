const getRandomColor = () => {
    const colors = [
        'bg-pink-400',
        'bg-cyan-200',
        'bg-emerald-300',
        'bg-yellow-300'
    ]
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}

export default getRandomColor