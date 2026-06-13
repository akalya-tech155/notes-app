function addNote() {
    console.log("Add Note");
}
//added new js file based on (search-notes)

function searchNotes() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const notes =
        document.querySelectorAll(".note");

    notes.forEach(note => {

        if (
            note.innerText
            .toLowerCase()
            .includes(search)
        ) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }

    });


// add new js code based on (create note)

function addNote() {

    const noteText =
        document.getElementById("noteInput").value;

    const note =
        document.createElement("div");

    note.className = "note";

    note.innerText = noteText;

    document
        .getElementById("notesContainer")
        .appendChild(note);

}