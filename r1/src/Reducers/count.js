function count(state, action) {

    let stateCopy = state;

    switch (action.type) {
        case 'plus_one':
            stateCopy++;
            break;
        case 'minus_one':
            stateCopy--;
            break;
        case 'reset':
            stateCopy = 0;
            break;
        default:
    }

    return stateCopy;
}

export default count;