function SQ100({w, h}) {


    return (
        <div className="sq100" style= {
            {
                width: Math.min(w, 100) + 'px',
                height: Math.min(h, 100) + 'px'
            }
        }></div>
    )
}

export default SQ100;