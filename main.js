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
		fullscreen: false,
		width: 1280,
		height: 768,
		backgroundColor: '#121212',
		contextIsolation: true,
		frame: false,
		transparent: true,
		icon: __dirname + 'public/favicon.ico',
		webPreferences: {
			nodeIntegration: true
		}
	})
	const contents = win.webContents
	contents.openDevTools()

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------	
	
	ipcMain.on('api', async (event, arg) => {
		const showResults = argument => {
			const api = require(`./api/${argument.tabela}`)
			api.get().then(response => {
				event.sender.send('api-response', response)
			}).catch(err => {
				console.error(err)
			})
		}
		const showResult = argument => {
			const api = require(`./api/${argument.tabela}`)
			api.show(argument.id).then(response => {
				console.log('Objeto enviado do main.js', response)
				event.sender.send('api-response', response)
			}).catch(err => {
				console.error(err)
			})
		}
		const searchLike = argument => {
			const api = require(`./api/${argument.tabela}`)
			api.search(argument.like).then(response => {
				event.sender.send('api-response', response)
			}).catch(err => {
				console.error(err)
			})
		}
		const deleteApi = argument => {
			const api = require(`./api/${argument.tabela}`)
			api.delete(argument.id).then(response => {
				event.sender.send('api-response', response)
			}).catch(err => {
				console.error(err)
			})
		}
		switch (arg.tabela) {
			case 'products':
				if(arg.like) {
					searchLike({ tabela: arg.tabela, like: arg.like })
				} else if(arg.id) {
					showResult({ tabela: arg.tabela, id: arg.id })
				} else {
					showResults({ tabela: arg.tabela })
				}
			break
			// -----------------------------------------------------------------
			case 'marcas':
				if (arg.like) {
					searchLike({ tabela: arg.tabela, like: arg.like })
				} else if (arg.id) {
					showResult({ tabela: arg.tabela, id: arg.id })
				} else {
					showResults({ tabela: arg.tabela })
				}
			break
			// -----------------------------------------------------------------
			case 'categorias':
				if (arg.like) {
					searchLike({ tabela: arg.tabela, like: arg.like })
				} else if (arg.id) {
					showResult({ tabela: arg.tabela, id: arg.id })
				} else {
					showResults({ tabela: arg.tabela })
				}
				break
			// -----------------------------------------------------------------
			case 'fornecedores':
				if (arg.like) {
					searchLike({ tabela: arg.tabela, like: arg.like })
				} else if (arg.id) {
					showResult({ tabela: arg.tabela, id: arg.id })
				} else {
					showResults({ tabela: arg.tabela })
				}
				break
		}
	}).on('sair', () => app.quit())

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

	Menu.setApplicationMenu(null)
	// win.loadURL('http://localhost:3000/')
	win.loadFile('./build/index.html')
	// win.loadFile('./ui/index.html')
}

app.whenReady().then(createWindow)