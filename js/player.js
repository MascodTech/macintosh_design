$('#modal').on('shown.bs.modal', () => {
    $('#modal video')[0].play();
})
$('#modal').on('hidden.bs.modal', () => {
    $('#modal video').attr("src", $("#modal video").attr("src"));
});