import {createSlice, type PayloadAction} from '@reduxjs/toolkit';


export interface FilterState {
    keywords: string,
    selectedSpecialization: number | null,
    selectedSkills: number[],
    selectedComplexity: number[],
    selectedRate: number[]
}

const initialState: FilterState = {
    keywords: '',
    selectedSpecialization: null,
    selectedSkills: [],
    selectedComplexity: [],
    selectedRate: []
}


const filterSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setKeywords: (state, action) => {
            state.keywords = action.payload
        },
        setSpecialization: (state, action) => {
            state.selectedSpecialization = action.payload
        },
        setSkill: (state, action: PayloadAction<number>) => {
            state.selectedSkills.push(action.payload)
        },
        removeSkill: (state, action: PayloadAction<number>) => {
            state.selectedSkills = state.selectedSkills.filter(item => item != action.payload)
        },
        setComplexity: (state, action: PayloadAction<number>) => {
            state.selectedComplexity.push(action.payload)
        },
        removeComplexity: (state, action: PayloadAction<number>) => {
            state.selectedComplexity = state.selectedComplexity.filter(item => item != action.payload)
        },
        setRate: (state, action: PayloadAction<number>) => {
            state.selectedRate.push(action.payload)
        },
        removeRate: (state, action: PayloadAction<number>) => {
            state.selectedRate = state.selectedRate.filter(item => item != action.payload)
        }
    },
});

export const {
    setKeywords,
    setSpecialization,
    setSkill,
    removeSkill,
    setRate,
    removeRate,
    setComplexity,
    removeComplexity,
} = filterSlice.actions;

export default filterSlice.reducer;
