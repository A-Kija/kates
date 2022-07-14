function SC1({form}) {

    if (form === 'square') {
        return (
            <div className="sc"></div>
        )
    } else if (form === 'circle') {
        return (
            <div className="sc"style={{borderRadius: '50%'}}></div>
        )
    }
    else {
        return null;
    }

}

export default SC1;