const current = [
    [
        ['', ''],
        ['', '']
    ], 0
];


export default function stateReducer(state = current, action) {
    if (action.type === 'clickOnSquare') {
        const curColor = state[0][action.x][action.y];
        if (curColor === 'black') {
            state[0][action.x][action.y] = 'white';
            state[1]--;
        } else {
            state[0][action.x][action.y] = 'black';
            state[1]++;
        }
        return [...state];
    }
    return state;
}