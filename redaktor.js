const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const mode = document.getElementById("mode");
const themeBtn = document.getElementById("themeBtn");
const fileList = document.getElementById("fileList");
const saveBtn = document.getElementById("saveBtn");
const addFileBtn = document.getElementById("addFileBtn");

let files = {"Buni o'chiring va yangi fayl qo'ying!":"Welcome!"};
let htmlCode = "";
let cssCode = "";
let jsCode = "";

function updatePreview(){
  preview.srcdoc = `<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}<\/script></body></html>`;
}

function renderFiles(){
  fileList.innerHTML = "";
  for(let name in files){
    let btn = document.createElement("div");
    btn.className = "file-btn";
    btn.dataset.name = name;
    btn.innerHTML = `<span class="file-name">${name}</span><span class="delete-btn">X</span>`;

    btn.querySelector(".file-name").onclick = ()=>{
      currentFile = name;
      editor.value = files[name];
      mode.value = name.endsWith(".html") ? "html" : name.endsWith(".css") ? "css" : "js";
      document.querySelectorAll(".file-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      updateCurrentCode();
      updatePreview();
    };

    btn.querySelector(".delete-btn").onclick = e=>{
      e.stopPropagation();
      delete files[name];
      currentFile = Object.keys(files)[0] || "";
      editor.value = files[currentFile] || "";
      renderFiles();
    };
    fileList.appendChild(btn);
  }
  updatePreview();
}

editor.addEventListener("input",()=>{
  if(currentFile){
    files[currentFile] = editor.value;
    updateCurrentCode();
    updatePreview();
  }
});

themeBtn.addEventListener("click",()=>{
  editor.classList.toggle("dark");
  themeBtn.textContent = editor.classList.contains("dark") ? "☀️" : "🌙";
});

addFileBtn.addEventListener("click",()=>{
  let name = prompt("Fayl nomi kiriting (masalan index.html)");
  if(!name) return;
  files[name] = "";
  currentFile = name;
  editor.value = "";
  renderFiles();
});

saveBtn.addEventListener("click",()=>{
  for(let name in files){
    let blob = new Blob([files[name]], {type:"text/plain"});
    let link = document.createElement("a");
    link.download = name;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }
  alert("Barcha fayllar saqlandi!");
});

// --- MANA SHU QISIM TO'G'IRLANDI ---
const tags = ["h1","h2","h3","p","div","span","a","ul","li","ol","section","header","footer","nav","article","button","form","label"];

editor.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let start = editor.selectionStart;
    let value = editor.value;
    let before = value.substring(0, start);
    let after = value.substring(start);
    
    // Oxirgi so'zni to'g'ri olish (massiv emas, string qilib)
    let match = before.match(/(\S+)$/);
    let word = match ? match[0] : ""; 

    // 1. ! + Enter -> 11 qatorli HTML shabloni
    if (word === "!") {
      e.preventDefault();
      let template = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

</body>
</html>`;
      editor.value = before.slice(0, -1) + template + after;
      let pos = before.length - 1 + template.indexOf("<body>") + 8;
      editor.setSelectionRange(pos, pos);
      files[currentFile] = editor.value;
      updateCurrentCode();
      updatePreview();
      return;
    }

    // 2. HTML tag auto-close (h1 -> <h1></h1>)
    if (tags.includes(word)) {
      e.preventDefault();
      let openTag = "<" + word + ">";
      let closeTag = "</" + word + ">";
      editor.value = before.slice(0, -word.length) + openTag + closeTag + after;
      let cursorPos = start - word.length + openTag.length;
      editor.setSelectionRange(cursorPos, cursorPos);
      files[currentFile] = editor.value;
      updateCurrentCode();
      updatePreview();
      return;
    }
  }
});

function updateCurrentCode(){
  if(currentFile.endsWith(".html")) htmlCode = files[currentFile];
  else if(currentFile.endsWith(".css")) cssCode = files[currentFile];
  else if(currentFile.endsWith(".js")) jsCode = files[currentFile];
}

renderFiles();
editor.value = files[currentFile];
