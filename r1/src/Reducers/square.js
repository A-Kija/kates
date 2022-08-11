function square(state, action) {
    let stateCopy = [...state];
    switch (action.type) {
        case 'add':
            stateCopy.push('');
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