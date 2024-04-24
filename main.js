console.log("Electron JS Running");
const { app, BrowserWindow } = require("electron");
function createWindow()
{
const window1 = new BrowserWindow({
 width : 1200,
 height: 800,
 webPreferences: {
 nodeIntegration: true
 }
 });

 window1.loadFile("index.html");
}
app.whenReady().then(createWindow);