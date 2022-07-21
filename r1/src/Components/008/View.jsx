function  View({view, activView}) {

    if (view !== activView) {
        return null;
    }

    return (
    <div>----------{activView}</div>
    );


}

export default View;