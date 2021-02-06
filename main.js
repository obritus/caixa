const { app, BrowserWindow, Menu, ipcMain } = require('electron')

const set_configs = () => {
	const fs = require('fs')
	const configs = require('./conf.json')
	console.log(configs)
	configs.foo = 'parametro'
	fs.writeFileSync('./conf.json', JSON.stringify(configs))
	console.log(configs)
}

const createWindow = () => {
	const win = new BrowserWindow({
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true,
		}
	})
	const contents = win.webContents
	contents.openDevTools()
	const isMac = process.platform === 'darwin'
	const template = [
		{
			label: 'Arquivo',
			submenu: [
				{
					label: 'Configurações',
					click: () => {
						win.send('open_config')
					}
				},
				isMac ? { role: 'close', label: 'Sair' } : { role: 'quit', label: 'Sair' },
			]
		},
		{
			label: 'Ajuda',
			submenu: [
				{
					label: 'Teste',
					click: async () => {
						const { shell } = require('electron')
						await shell.beep()
					}
				}
			]
		}
	]
	
	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)

	win.loadURL('http://localhost:3000/')	
}

app.whenReady().then(createWindow)