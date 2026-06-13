function addNote() {
    console.log("Add Note");
}




// added new js code based on (delete note)


    function addNote() {

    const noteText =
        document.getElementById("noteInput").value;

    const note =
        document.createElement("div");

    note.className = "note";

    note.innerHTML =
        `${noteText}
         <button onclick="this.parentElement.remove()">
            Delete
         </button>`;

    note.innerText = noteText;


    document
        .getElementById("notesContainer")
        .appendChild(note);


}