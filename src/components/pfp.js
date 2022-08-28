const Pfp = ({ data }) => {
    //console.log('Img:', position);

    const Style = {
        height: '100px',
        width: '100px',
        borderRadius: `100%`,
        position: 'absolute',
        top: `${data.top}%`,
        left: `${data.left}%`,
        transform: `rotate(${data.rotat}deg)`,
        userSelect: 'none',
    }

    return(
        <img style={Style} 
            onContextMenu={(e)=>e.preventDefault()}
            draggable={false}
            src={`images/${data.image}`}
            alt='User PFP' />
    )
}

export default Pfp;