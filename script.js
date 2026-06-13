function addNote() {
    console.log("Add Note");
}



// adeed new js code based on (local-storage)

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