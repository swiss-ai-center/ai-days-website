import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from 'utils/reducers/colorModeSlice';
import yearReducer from 'utils/reducers/yearSlice';

export default configureStore({
    reducer: {
        colorMode: colorModeReducer,
        year: yearReducer,
    },
})
