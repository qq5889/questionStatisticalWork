const {app, BrowserWindow} =require('electron');  
const path=require("path");
let mainWindow;
function createWindow () {  //创建一个新窗口
    mainWindow = new BrowserWindow({
            width: "700px",  //窗口长度
            height: "700px",	//窗口款度
    });
    mainWindow.maximize();	//窗口最大化
    mainWindow.on('closed', function () {	//窗口关闭方法
        mainWindow = null
    });
    //mainWindow.loadURL('http://localhost:8000')
    //mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
    mainWindow.loadURL(`file://${__dirname}/index.html`);	//窗口主文件地址
}
 
 
//以下就是类似于app的生命周期的方法
 
app.on('ready', () => {
    createWindow();
});
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
 
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});