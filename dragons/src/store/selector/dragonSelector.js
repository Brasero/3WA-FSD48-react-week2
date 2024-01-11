export const selectDragon = (state) => state.dragon.dragon
export const selectDragons = (state) => state.dragon.dragons

export const selectDragonMessage = (state) => state.dragon.message

export const getSelectedDragon = (name) => {
    return (state) => {
        return state.dragon.dragons.find((drag) => drag.name === name)
    }
}