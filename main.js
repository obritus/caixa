const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const knex = require('./db')

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
		fullscreen: false,
		width: 1280,
		height: 768,
		backgroundColor: '#121212',
		contextIsolation: true,
		frame: false,
		transparent: true,
		icon: __dirname + 'public/favicon.ico',
		webPreferences: {
			nodeIntegration: true,
			preload: __dirname + '/src/preload.js'
		}
	})
	const contents = win.webContents
	contents.openDevTools()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------	

	ipcMain.on('api', async (event, arg) => {
		const marcas = require('./api/marcas')
		marcas.get().then(response => {
			event.sender.send('api-response', response)
		}).catch(err => {
			console.error(err)
		})
	})

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	Menu.setApplicationMenu(null)
	win.loadURL('http://localhost:3000/')
	// win.loadFile('./build/index.html')
	// win.loadFile('./ui/index.html')
}

app.whenReady().then(createWindow)