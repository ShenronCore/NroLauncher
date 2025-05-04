const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');

let win;
let tray = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1290,
    height: 720,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    show: false,
    frame: false,
  });

  win.once('ready-to-show', () => {
    win.show(); // show the window only after it's ready
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  tray = new Tray(path.join(__dirname, 'assets', 'logo.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click: () => win.show() },
    { label: 'Close', click: () => app.quit() },
  ]);
  tray.setToolTip('NRO Launcher');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (win.isMinimized()) {
      win.restore();
    }
    win.show();
  });

}

ipcMain.on('window-control', (event, arg) => {
  if (arg === 'close') {
    win.close();
  } else if (arg === 'minimize') {
    win.minimize();
  }
});

app.whenReady().then(createWindow);
