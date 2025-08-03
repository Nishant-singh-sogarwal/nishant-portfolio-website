let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText === "") return;

  notes.push(noteText);
  saveNotes();
  renderNotes();
  noteInput.value = "";
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const para = document.createElement("p");
    para.innerText = note;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerText = "Delete";
    delBtn.onclick = () => deleteNote(index);

    noteDiv.appendChild(para);
    noteDiv.appendChild(delBtn);
    container.appendChild(noteDiv);
  });
}

renderNotes();
