function addNote() {
    console.log("Add Note");
}



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