function addNote() {
    console.log("Add Note");
}


// 1. add new js code based on (create note)

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


// 2. added new js file based on (search-notes)

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


//  3. added new js code based on (delete note)


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



// 4. adeed new js code based on (local-storage)

let notes = [];

function addNote() {

    const noteText =
        document.getElementById("noteInput").value;

    notes.push(noteText);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );
}








