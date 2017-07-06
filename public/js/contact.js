// var nodemailer = require('nodemailer');
// var mandaemail = function(){
//   var transporte = nodemailer.createTransport({
//     service: 'Gmail',
//       auth:{
//         user: 'sbeckerassessoria@gmail.com',
//         pass: 'futebol11'
//       }
//   });
//
//   var email = {
//     from: 'Sbecker Gmail <sbeckerassessoria@gmail.com>',
//     to: '<stromdh@gmail.com>',
//     telefone: 'req.body.telefone',
//     subject: 'Email enviado pelo formuláro do site Sbecker',
//     text: req.body.assunto
//   };
//
//   transportador.sendMail(email, function(error, info){
//     if(error){
//       console.log(error);
//     }else{
//       console.log('Email enviado' + info.response);
//     }
//   })
// }
var express = require('express');
var sender = require('./sender');

var app = express();

app.listen(3000, function() {
    console.log('Aplicação rodando!');
});

app.get('/enviaremail', function(req, res) {
	sender.send();
  	res.send('OK');
});
