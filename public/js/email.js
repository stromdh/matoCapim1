// var nodemailer = require('nodemailer');
//
// //var app = express();
//
// //app.use(express.static(__dirname + '/client'));
//
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
//
// // Sendmail route
// app.post('/sendmail', function(req, res){
//
//     var options = {
//         service: 'gmail',
//         auth: {
//             user: 'sbeckerassessoria@gmail.com',
//             pass: 'futebol11'
//         }
//     }
//     var mailer = nodemailer.createTransport(sgTransport(options));
//     mailer.sendMail(req.body, function(error, info){
//         if(error){
//             res.status('401').json({err: info});
//         }else{
//             res.status('200').json({success: true});
//         }
//     });
// });
//
// var mailOptions = {
//   from: 'Sbecker Assessoria <sbeckerassessoria@gmail.com>',
//   to: 'Rafael <stromdh@gmail.com>',
//   subject: 'Sending Email using Node.js',
//   nome: req.body.nome,
//   email: req.body.email,
//   telefone: req.body.telefone,
//   assunto: req.body.assunto
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });



var nodemailer = require('nodemailer.js');

var transportador = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sbeckerassessoria@gmail.com',
        pass: 'futebol11'
	    }
	});

exports.send = function(){

	var configuracoes = {
	    from: 'Seu Nome <sbeckerassessoria@gmail.com>',
	    to: 'Nome do Destinatário <emaildodestinatario@gmail.com>, Outra Pessoa <stromdh@gmail.com>',
	    subject: 'Assunto do Email',
	    text: 'Conteúdo do email em texto',
	    html: '<h1>Conteúdo do email em HTML</h1>'
	};

	transportador.sendMail(configuracoes, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Email enviado ' + info.response);
	    }
	});
}
