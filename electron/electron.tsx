const { app, BrowserWindow } = require('node_modules/electron')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    // width: 800,
    // height: 600,
    width: 1000,
    height: 800,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
  })

  win.loadURL('http://localhost:5173')
//   win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})