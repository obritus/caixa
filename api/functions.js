const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')

const FuncaoTeste = argument => {
	if(argument != null) {
		console.log(argument.texto1)
		console.log(argument.texto2)
		console.log(argument.texto3)	
	}
	else {
		return "Conjunto Vazio"
	}
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const slugfy = (str) => {
	str = str.replace(/^\s+|\s+$/g, '')
	str = str.toLowerCase()

	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:"
	var to   = "aaaaeeeeiiiioooouuuunc------"

	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
	}

	str = str.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')

	return str
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const obterData = args => {
	data = new Date(args)

	const meses = [
		'janeiro',
		'fevereiro',
		'março',
		'abril',
		'maio',
		'junho',
		'julho',
		'agosto',
		'setembro',
		'outubro',
		'novembro',
		'dezembro'
	]

	const dias = [
		'segunda-feira',
		'terça-feira',
		'quarta-feira',
		'quita-feira',
		'sexta-feira',
		'sábado',
		'domingo',
	]

	zero = (arg) => {
		return ((arg < 10) ? '0' + arg : arg)
	}

	const diaNome = dias[data.getDay()]
	const dia = data.getDate()
	const mes = meses[data.getMonth()]
	const ano = data.getFullYear()
	const horas = zero(data.getHours()) + 'h' + zero(data.getMinutes())

	return `${diaNome}, ${dia} de ${mes} de ${ano}, às ${horas}.`
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']
const TOKEN_PATH = './token.json'
fs.readFile('./credentials.json', (err, content) => {
	if (err) return console.log('Error loading client secret file:', err)
})

const authorize = (credentials, callback) => {
	const {client_secret, client_id, redirect_uris} = credentials.installed
	const oAuth2Client = new google.auth.OAuth2(
	client_id, client_secret, redirect_uris[0])
	fs.readFile(TOKEN_PATH, (err, token) => {
	if (err) return getAccessToken(oAuth2Client, callback)
	oAuth2Client.setCredentials(JSON.parse(token))
	callback(oAuth2Client)
  })
}

const getAccessToken = (oAuth2Client, callback) => {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	})
	console.log('Authorize this app by visiting this url:', authUrl)
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	rl.question('Enter the code from that page here: ', (code) => {
		rl.close()
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error('Error retrieving access token', err)
				oAuth2Client.setCredentials(token)
				// Store the token to disk for later program executions
				fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
			if (err) return console.error(err)
				console.log('Token stored to', TOKEN_PATH)
			})
			callback(oAuth2Client)
		})
	})
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

module.exports = {obterData, FuncaoTeste, slugfy}