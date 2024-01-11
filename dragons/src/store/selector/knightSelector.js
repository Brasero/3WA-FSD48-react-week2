export const selectKnight = (state) => state.knight.knight;
export const selectKnights = (state) => state.knight.knights;
export const selectKnightMessage = (state) => state.knight.message;

export const getSelectedKnight = (name) => {
    return (state) => {
        return state.knight.knights.find((knight) => knight.name === name)
    }
}