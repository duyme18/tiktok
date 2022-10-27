function logger(reducer) {
    return (prevState, action) => {

        console.group(action.type)
        
        console.log('action: ', action);

        console.log('prev state: ', prevState);

        const newState = reducer(prevState, action)

        console.log('next state: ', newState);

        console.groupEnd()

        return newState
    }
}

export default logger

