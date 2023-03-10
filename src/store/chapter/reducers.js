import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { newChapter, getChapterDetails, getChapters } = chapterActions;

const initialState = { chapters: [], message: "", chapter: [] };

const chapterReducers = createReducer(initialState, (builder) =>  {
    builder
    .addCase(newChapter.fulfilled, (state, action) => {
        let newState = {
            chapters: action.payload.response.chapter,
            message: action.payload.message,
        }
        return newState
    })
    .addCase(newChapter.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
    .addCase(getChapterDetails.fulfilled, (state, action) => {
        let newState = {
            chapter: action.payload.response.chapter,
            chapters : state.chapters,
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapterDetails.rejected, (state, action) => {
        let newState = {
            message: "Error Loading Chapter"
        }
        return newState
    })

    //----------------
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapters,
                chapter: state.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
})

export default chapterReducers 