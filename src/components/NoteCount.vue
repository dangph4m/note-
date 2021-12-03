<template>
    <div class="note-count">
       <strong> Note count: </strong>{{ noteCount }}
    </div>
</template>

<script>
export default {
    name: "NoteCount",
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        },
    },
};
</script>
<style>
p{
    color:white;
}
</style>