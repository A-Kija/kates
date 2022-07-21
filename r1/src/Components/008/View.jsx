function  View({view, activView, element}) {
    if (view !== activView) {
        return null;
    }
    return element;
}
export default View;