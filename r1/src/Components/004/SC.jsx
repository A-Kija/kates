function SC({form}) {


    return (
        <div className="sc" style={ {
            borderRadius: form === 'square' ? '0' : form === 'circle' ? '50%' : null
        }}></div>
    )

}

export default SC;