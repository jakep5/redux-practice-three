export default (state = { currentItems: ['bananas', 'cereal', 'bread', 'milk' ]}, action) => {
    switch (action.type) {
        case "ALLITEMS":
            return { currentItems: state.currentItems }
        default:
            return state;
    }
}