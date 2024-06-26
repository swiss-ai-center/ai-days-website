import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "2025"
}

const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('yearState', serializedState);
    } catch (e) {
        console.error(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('yearState');
        if (serializedState === null) return initialState;
        return JSON.parse(serializedState);
    } catch (e) {
        return initialState;
    }
}

export const yearSlice = createSlice({
    name: 'year',
    initialState: loadFromLocalStorage(),
    reducers: {
        changeYear: (state, action) => {
            state.value = action.payload;
            saveToLocalStorage(state);
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeYear } = yearSlice.actions

export default yearSlice.reducer
