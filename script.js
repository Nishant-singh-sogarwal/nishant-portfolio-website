let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    const p = document.createElement("p");
    p.textContent = note;

    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.textContent = "Delete";
    btn.onclick = () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotes();
    };

    div.appendChild(p);
    div.appendChild(btn);
    container.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value.trim();
  if (text) {
    notes.push(text);
    saveNotes();
    renderNotes();
    input.value = "";
  }
}

renderNotes();
