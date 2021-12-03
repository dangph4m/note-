import { createStore } from "vuex";

const state = {
    notes: [],
    timestamps: [],
};

const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    },
};

const actions = {
    addNote(context, payload) {
        context.commit("ADD_NOTE", payload);
    },
    addTimestamp(context, payload) {
        context.commit("ADD_TIMESTAMP", payload);
    },
};

const getters = {
    getNotes: (state) => state.notes,
    getTimestamps: (state) => state.timestamps,
    getNoteCount: (state) => state.notes.length,
};

export default createStore({
    state,
    mutations,
    actions,
    getters,
});
