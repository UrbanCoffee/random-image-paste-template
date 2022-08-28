const Img = ({ data }) => {

    const Style = {
        maxHeight: '100px',
        position: 'absolute',
        top: `${data.top}%`,
        left: `${data.left}%`,
        transform: `rotate(${data.rotat}deg)`,
        userSelect: 'none',
    }

    return (
        <img style={Style} 
            onContextMenu={(e)=>e.preventDefault()}
            draggable={false}
            src={`images/${data.image}`} 
            alt={data.image} />
    )
}

export default Img;