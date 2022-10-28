function logger(reducer) {
    return (prevState, action) =>{
        console.group(action.type)
        console.log('action', action)
        console.log('prev state', prevState)
        const nextState = reducer(prevState, action)
        console.log('next state', nextState)
        console.groupEnd()
        return nextState
    }
}

export default logger