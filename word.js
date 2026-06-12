let currentEditor = document.querySelector('.page');

// 1. Effektlar (Toggle ko'k rang)
document.querySelectorAll('.tool-btn[data-command]').forEach(btn => {
    btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-command');
        document.execCommand(cmd, false, null);
        btn.classList.toggle('active');
        currentEditor.focus();
    });
});

// 2. Shriftni qo'llash
document.getElementById('fontName').onchange = function() {
    document.execCommand('fontName', false, this.value);
};

// 3. Text rangi va Orqa fon rangi (Tuzatildi!)
document.getElementById('foreColor').oninput = function() {
    document.execCommand('foreColor', false, this.value);
};
document.getElementById('hiliteColor').oninput = function() {
    // Ba'zi brauzerlar uchun backColor ishlatiladi
    document.execCommand('hiliteColor', false, this.value);
};

// 4. Jadval Modali
const modal = document.getElementById('tableModal');
document.getElementById('openTableModal').onclick = () => modal.style.display = "block";
document.getElementById('closeModal').onclick = () => modal.style.display = "none";

document.getElementById('confirmTable').onclick = () => {
    const r = document.getElementById('rowCount').value;
    const c = document.getElementById('colCount').value;
    let tbl = `<table style="width:100%; border:1px solid black; border-collapse:collapse;">`;
    for(let i=0; i<r; i++){
        tbl += "<tr>";
        for(let j=0; j<c; j++) tbl += "<td>&nbsp;</td>";
        tbl += "</tr>";
    }
    tbl += "</table><p></p>";
    document.execCommand('insertHTML', false, tbl);
    modal.style.display = "none";
};

// 5. Yangi list qo'shish
document.getElementById('addNewPage').onclick = () => {
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.contentEditable = 'true';
    newPage.setAttribute('placeholder', 'Yangi sahifa...');
    document.getElementById('pages-container').appendChild(newPage);
    newPage.focus();
    currentEditor = newPage; // Fokusni yangi listga o'tkazish
};

// Fokus o'zgarganda joriy editor qaysiligini bilish
document.addEventListener('focusin', (e) => {
    if(e.target.classList.contains('page')) currentEditor = e.target;
});

// Tungi rejim va Saqlash
document.getElementById('themeBtn').onclick = function() {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
};

function exportDoc() {
    let allContent = "";
    document.querySelectorAll('.page').forEach(p => allContent += p.innerHTML + "<hr>");
    const source = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org'><head><meta charset='utf-8'></head><body>${allContent}</body></html>`;
    const blob = new Blob(['\ufeff', source], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'hujjat.doc';
    link.click();
}
