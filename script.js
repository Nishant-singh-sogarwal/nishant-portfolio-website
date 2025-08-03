let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const noteText = document.createElement("p");
    noteText.innerText = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "×";
    deleteBtn.onclick = () => deleteNote(index);

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(deleteBtn);
    container.appendChild(noteDiv);
  });
}

function addNote() {
  const noteText = document.getElementById("noteText").value.trim();
  if (noteText === "") return;

  notes.push(noteText);
  saveNotes();
  renderNotes();
  document.getElementById("noteText").value = "";
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

renderNotes();
