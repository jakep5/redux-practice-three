export default (state = { currentItems: ['bananas', 'cereal', 'bread', 'milk' ]}, action) => {
    switch (action.type) {
        case 'ALLITEMS':
            return { currentItems: state.currentItems }
        case 'ADDITEM':
            return {
                currentItems: [...state.currentItems, action.payload]
            }
        default:
            return state;
    }
}