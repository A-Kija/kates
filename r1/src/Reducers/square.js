function square(state, action) {
    let stateCopy = [...state];
    switch (action.type) {
        case 'add':
            action.payload = action.payload === '' ? stateCopy.length : parseInt(action.payload);
            action.payload = isNaN(action.payload) ? stateCopy.length : action.payload;
            stateCopy.push(action.payload);
            break;
        case 'rem':
            stateCopy.shift();
            break;
        case 'clear':
            stateCopy = [];
            break;
        default:
    }
    return stateCopy;
}
export default square;