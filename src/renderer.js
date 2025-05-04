
const accountBtn = document.getElementById("accountBtn");
const sidebarLogin = document.getElementById("sidebarLogin");

const menuBtn = document.getElementById('menuBtn');
const menuPopup = document.getElementById('menuPopup');
const settingsBtn = document.getElementById('settingsBtn');
const feedbackBtn = document.getElementById('feedbackBtn');


const { ipcRenderer } = require('electron');

document.getElementById('close').onclick = () => {
  ipcRenderer.send('window-control', 'close');
};

document.getElementById('minimize').onclick = () => {
  ipcRenderer.send('window-control', 'minimize');
};

menuBtn.addEventListener('click', () => {
  menuPopup.style.display = menuPopup.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (e) => {
  if (!menuPopup.contains(e.target) && e.target !== menuBtn) {
    menuPopup.style.display = 'none';
  }
});

settingsBtn.addEventListener('click', () => {
  document.getElementById('settingsPanel').style.display = 'block';
});

feedbackBtn.addEventListener('click', () => {
  alert('Hiển thị form báo lỗi hoặc mở URL gửi phản hồi.');
});

accountBtn.onclick = () => {
  sidebarLogin.classList.toggle("expanded");
};