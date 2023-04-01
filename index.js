const util = require('util');

global.mysql  = require('mysql');
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const multer = require("multer");
const jwt = require("jsonwebtoken")
var async = require('async');

var rp = require('request-promise');
var schedule = require('node-schedule');
var Request = require("request");
const axios = require('axios');
var cors = require('cors')
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");



var app = express();

const http = require("http").Server(app)

// require the socket.io module
const io = require("socket.io");

const port = 8081;

const socket = io(http);



//app.set('trust proxy', 1);

//const limiter = rateLimit({
//	windowMs: 60 * 1000, // 30 seconds
//	max: 100 // limit each IP to 100 requests per windowMs
//  });
  
  //  apply to all requests
//app.use(limiter);


//const speedLimiter = slowDown({
//	windowMs: 30 * 1000, // 30 seconds
//	delayAfter: 50, // allow 100 requests per 15 minutes, then...
//	delayMs: 1000 // begin adding 500ms of delay per request above 100:
	// request # 101 is delayed by  500ms
	// request # 102 is delayed by 1000ms
	// request # 103 is delayed by 1500ms
	// etc.
 // });
  
  //  apply to all requests
  //app.use(speedLimiter);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  //CORS Middleware
  app.use(cors());
 
 
  
global.conticash = mysql.createPool({
	connectionLimit : 5000,
	multipleStatements: "true",
	host: "localhost",
	user: "root",
	password: "JesusChrist@@11",
	database: "quantum_bdc",
	port: 3306
  });
   
  conticash.getConnection(err => {
	if (!err) {
	  console.log("Quantum 1.0.0 connection Successful.");
	} else {
	  console.log(
		"ContiCash connection failed  \n Error :" + JSON.stringify(err, undefined, 2)
	  );
	}
  });
  
  app.listen(port,()=>{
	console.log('Listening on port ' + port);
  
  })




async function executeQueryCreateTran(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		},
		three: function(callback){
            conticash.query(query[2], callback);
        }
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		var mainData3 = results.three[0]
		
		resp.json({data:{
			one:{recordset:mainData},
			two:{recordset:mainData2},
			three:{recordset:mainData3}
			
			
		}})
		

    });
	
}



async function executeQueryCreateTran4(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		},
		three: function(callback){
            conticash.query(query[2], callback);
        },
		four: function(callback){
		    conticash.query(query[3], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		var mainData3 = results.three[0]
		var mainData4 = results.four[0]
		
		resp.json({data:{
			one:{recordset:mainData},
			two:{recordset:mainData2},
			three:{recordset:mainData3},
			four:{recordset:mainData4}
			
		}})
		

    });
	
}




async function executeQueryCreateTran5(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		},
		three: function(callback){
            conticash.query(query[2], callback);
        },
		four: function(callback){
		    conticash.query(query[3], callback);
					
		},
		five: function(callback){
		    conticash.query(query[4], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		var mainData3 = results.three[0]
		var mainData4 = results.four[0]
		var mainData5 = results.five[0]
		resp.json({data:{
			one:{recordset:mainData},
			two:{recordset:mainData2},
			three:{recordset:mainData3},
			four:{recordset:mainData4},
			five:{recordset:mainData5}
			
		}})
		

    });

	
}



async function executeQueryCreateTranApprove(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		resp.json({data:{
			one:{recordset:mainData},
			two:{recordset:mainData2}
		}})
		

    });
	
	
}


async function executeQueryCreateRates(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		 
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		resp.json({data:{
			one:{recordset:mainData},
			two:{recordset:mainData2}
		}})
		

    });
	
	
}


async function executeQueryContiSend(resp,query,data){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		resp.json({message:{
			one:{recordset:mainData},
			two:{recordset:mainData2}
		}})
		

    });

	
}



async function executeQueryCreateUser(resp,query,data){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        },
		two: function(callback){
		    conticash.query(query[1], callback);
					
		}
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		// createUser(data)
		var mainData = results.one[0]
		var mainData2 = results.two[0]
		resp.json({message:{
			one:{recordset:mainData},
			two:{recordset:mainData2}
		}})
		

    });
	


	
}


async function executeQueryCreateUserPass(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query[0], callback);
        }
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		var mainData = results.one[0]
		resp.json({message:{one:{recordset:mainData}}})
    });

	
}






//Function to connect to database and execute query
async function executeQueryCreate(resp,query){
	async.series({
        one: function(callback){
            conticash.query(query, callback);
        }
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		var mainData = results.one[0]
		resp.json({data:{one:{recordset:mainData}}})
    });

	

}

function verifyToken(req,res,next) {
	const bearerHeader = req.headers['authorization'];

	if(typeof bearerHeader !== 'undefined'){
		const bearer = bearerHeader.split(' ');
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	}else{
		res.json({
			message: 'Authorization Failed'
		})
	}
}

function executeQueryLogin(resp,query,email){
	conticash.query(query, [email], (error, results, fields) => {
		if (!error) {
		 
		  if(results.length == 0){
			  
			resp.json({message:'Failed Login, invalid username and password'})
		  }else{
			var pass = results[0].password
			var strpass = pass.replace(/\s/g, '');
			var rows = results
			let hashedpass = bcrypt.compareSync(email,strpass);
			  //console.log(strpass)
			  if(hashedpass){
				  
				  let userdetails = {
					  id:rows[0].id,
					  branch_name:rows[0].name.replace(/\s/g, ''), 
					  first_name:rows[0].first_name.replace(/\s/g, ''),
					  last_name:rows[0].last_name.replace(/\s/g, ''),
					  username:rows[0].username.replace(/\s/g, ''),
					  email:rows[0].email.replace(/\s/g, ''),
					  branch_id:rows[0].branch_id,
					  user_type:rows[0].user_type,
					  status:rows[0].status,
					  rbz_username:rows[0].rbz_username,
					  rbz_password:rows[0].rbz_password,
					  created_by:rows[0].created_by
				  }
				  jwt.sign({userdetails},'JesusChrist@@11',{expiresIn:'8h'},(err,token) =>{
											resp.json({
												token,
												userdetails
											})
										})
				  // resp.status(200).send(userdetails)	
			  }else{
				resp.json({message:'Failed Login, invalid username and password.'}) 
			  }			 
		  }
		   
		  } else {
			resp.status(500).send(error);
		  }
	  });
	
	
   }
  

function executeQueryLoginCheck(resp,query,email){
	conticash.query(query, [email], (error, results, fields) => {
		if (!error) {
		 
		  if(results.length == 0){
			  
			resp.json({message:'Failed Login, no such user'})  
		  }else{
			var pass = results[0].password
			var strpass = pass.replace(/\s/g, '');
			var rows = results
			let hashedpass = bcrypt.compareSync(email,strpass);
			  //console.log(rows[0])
			  if(hashedpass){
				  
				  let userdetails = {
					id:rows[0].id,
					first_name:rows[0].first_name.replace(/\s/g, ''),
					last_name:rows[0].last_name.replace(/\s/g, ''),
					username:rows[0].username.replace(/\s/g, ''),
					email:rows[0].email.replace(/\s/g, ''),
					branch_id:rows[0].branch_id,
					user_type:rows[0].user_type,
					status:rows[0].status,
					created_by:rows[0].created_by
				  }
				  jwt.sign({userdetails},'JesusChrist@@11',{expiresIn:'8h'},(err,token) =>{
					resp.json({message:'Success'}) 
					
				})
			  }else{
				resp.json({message:'Failed Login, invalid username and password.'}) 
			  }			 
		  }
		   
		  } else {
			resp.status(500).send(error);
		  }
	  });
	
	
   }


async function executeQuery(resp,query){
	  
	
    async.series({
        one: function(callback){
            conticash.query(query, callback);
        }
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			console.log(err)
			resp.json({message:err.sqlMessage})
        }
		//console.log(results)
		var mainData = results.one[0]
		resp.json({data:{one:{recordset:mainData}}})
    });
 
    
	
   }
  
  
  
async function executeQueryInsert(resp,query){
	
	async.series({
        one: function(callback){
            conticash.query(query, callback);
        }
    },
    function(err, results) {
        // results is now equal to: {one: [{a: 1}], two: [{b: 2}]}
        if (err) {
			resp.json({message:err})
        }
		//console.log(results)
		var mainData = results.one[0]
		resp.json({data:{one:{recordset:mainData}}})
    });
 
	
   }
  

app.get('/downloadTemp', function(req, res){
	var file = __dirname + '/Storage/DisburseTemp.csv';
	res.download(file); // Set disposition and send it.
  });
  
  
  app.get('/uploadedFile/:id', function(req, res){
	var file = __dirname + '/Storage/'+req.params.id;
	res.download(file); // Set disposition and send it.
  });
  
  //Upload Images
  //Set Storage Engine
  const storage = multer.diskStorage({
	destination: "./Storage",
	filename: function(req, file, callback) {
	  callback(
		null,
		file.fieldname + "-" + Date.now() + path.extname(file.originalname)
	  );
	}
  });
  
  //init Upload
  const upload = multer({
	storage: storage,
	limits: { fileSize: 300000 },
	fileFilter: function(req, file, cb) {
	  checkFileType(file, cb);
	}
  }).single("conticashFile");
  
  //Check file type
  function checkFileType(file, cb) {
	//Allowed ext
	const filetypes = /.*\.(gif|jpe?g|tiff|png)/;
	//check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	//Check mime
	const mimetype = filetypes.test(file.mimetype);
	if (extname) {
	  return cb(null, true);
	} else {
	  cb("Error: " + file.mimetype + " not allowed!");
	}
  }
  
  app.post("/upload", (req, res) => {
	upload(req, res, err => {
	  if (err) {
		res.status(500).json({
		  msg: err
		});
	  } else {
		if (req.file == undefined) {
		  res.status(500).json({
			msg: "Error : No file has been selected"
		  });
		} else {
		  res.status(200).json({
			msg: req.file
		  });
		}
	  }
	});
  });
  
 
async function mainhandover(email,output){
	let transporter = nodemailer.createTransport({
		host: "mail.contitouch.co.zw",
		port: 25,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'admin@conticash.co.zw', // generated ethereal user
		  pass: 'Cont1' // generated ethereal password
		}
	  });
		//console.log(email);
	  // send mail with defined transport object
	  let info = await transporter.sendMail({
		from: '"ContiCash" <admin@conticash.co.zw>', // sender address
		to: email, // list of receivers
		subject: "Hand Over Pin✔", // Subject line
		html: output, // html body
		attachments: [{
			filename: 'logo.png',
			path: __dirname + '/Storage/logo.png',
			cid: 'conticashlogo' //same cid value as in the html img src
    }]
	  });

	 // console.log("Message sent: %s", info.messageId);
	  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	  // Preview only available when sending through an Ethereal account
	  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
  

async function mainoverride(email,output){
	let transporter = nodemailer.createTransport({
		host: "mail.contitouch.co.zw",
		port: 25,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'admin@conticash.co.zw', // generated ethereal user
		  pass: 'Cont1' // generated ethereal password
		}
	  });
		//console.log(email);
	  // send mail with defined transport object
	  let info = await transporter.sendMail({
		from: '"ContiCash" <admin@conticash.co.zw>', // sender address
		to: email, // list of receivers
		subject: "Rates Over-Ride Pin ✔", // Subject line
		html: output, // html body
		attachments: [{
			filename: 'logo.png',
			path: __dirname + '/Storage/logo.png',
			cid: 'conticashlogo' //same cid value as in the html img src
    }]
	  });

	 // console.log("Message sent: %s", info.messageId);
	  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	  // Preview only available when sending through an Ethereal account
	  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



async function main(email,output){
	let transporter = nodemailer.createTransport({
		host: "mail.contitouch.co.zw",
		port: 25,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'admin@conticash.co.zw', // generated ethereal user
		  pass: 'Cont1' // generated ethereal password
		}
	  });
		//console.log(email);
	  // send mail with defined transport object
	  let info = await transporter.sendMail({
		from: '"ContiCash" <admin@conticash.co.zw>', // sender address
		to: email, // list of receivers
		subject: "Temp Password ✔", // Subject line
		html: output, // html body
		attachments: [{
			filename: 'logo.png',
			path: __dirname + '/Storage/logo.png',
			cid: 'conticashlogo' //same cid value as in the html img src
    }]
	  });

	 // console.log("Message sent: %s", info.messageId);
	  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	  // Preview only available when sending through an Ethereal account
	  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

async function hashUpdatePassword(rawPassword,sendEmail){
	//console.log(rawPassword)
	let hash = bcrypt.hashSync(rawPassword, 10);
	let res =  '';
	var query = `UPDATE Users SET password = '${hash}' WHERE email = '${sendEmail}'`;
    executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
}
 
async function createUser(data){
  
  let resetpass = 123456789//Math.random().toString(36).substr(2, 8);//Math.random().toString(36).slice(-8);
  let output = `
	<p>Hello : ${data.first_name}</p>
	<h3>You Temparary password is : ${resetpass}</h3>
	<p>Please login with it and change it when you have the time for your security</p>
	<p>Block 3, Tendeseka Office Park, Eastlea, Samora Machel, Harare <br>
	TELEPHONE: + 263 (4) 790148/9, 791926, 705671-4, 748118/20 <br>
	EMAIL: helpdesk@conticash.co.zw  WEBSITE: www.conticash.co.zw/
	<br>
	<img src="cid:conticashlogo">
	</p>
    <p style="color:gray;font-size:12px;">This email is confidential and may also be privileged. If you are not the intended recipient, please notify us immediately. You should not copy or use it for any purpose nor disclose its contents to any other person. Please be aware that there is a risk that information requested via email can be intercepted by hackers while enroute to your mailbox or seen by unauthenticated individuals if your mailbox security is inadequate. Save trees, protect the environment, do not print this mail</p>	
  `;
  //console.log(data.email)
//hashUpdatePassword(resetpass,data.email)
main(data.email,output).catch(console.error);
  
 // res.send('Temp Password Generated');
}


async function resetPassword(data){
  
  let resetpass = Math.random().toString(36).substr(2, 8);//Math.random().toString(36).slice(-8);
  let output = `
	<p>Hello : ${data.first_name}</p>
	<h3>You Temparary password is : ${resetpass}</h3>
	<p>Please login with it and change it when you have the time for your security</p>
	<p>Block 3, Tendeseka Office Park, Eastlea, Samora Machel, Harare <br>
	TELEPHONE: + 263 (4) 790148/9, 791926, 705671-4, 748118/20 <br>
	EMAIL: helpdesk@conticash.co.zw  WEBSITE: www.conticash.co.zw/
	<br>
	<img src="cid:conticashlogo">
	</p>
    <p style="color:gray;font-size:12px;">This email is confidential and may also be privileged. If you are not the intended recipient, please notify us immediately. You should not copy or use it for any purpose nor disclose its contents to any other person. Please be aware that there is a risk that information requested via email can be intercepted by hackers while enroute to your mailbox or seen by unauthenticated individuals if your mailbox security is inadequate. Save trees, protect the environment, do not print this mail</p>	
  `;
  //console.log(data.email)
hashUpdatePassword(resetpass,data.email)
main(data.email,output).catch(console.error);
  
 // res.send('Temp Password Generated');
}


//email response end point
app.post("/restPassword", (req, res) => {
  let pst = req.body;
  resetPassword(pst);
});


//email response end point
//email response end point
app.get("/createReference", (req, res) => {
   
	var request = require('request');
	var options = {
	  'method': 'PUT',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		
	  }
	};
	request(options, function (error, response) { 
	  if (error) res.json({message:error});
	  //console.log(response.body);
	  res.json({message:response.body});
	});
		
});

//email response end point
app.post("/checkReference", (req, res) => {
    let pst = req.body.reference;
	
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut?reference='+pst,
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		
	  }
	};
	request(options, function (error, response) { 
	  if (error) res.json({message:error});
	  //console.log(response.body);
	  res.json({message:response.body});
	});
		
});

app.post("/unlockReference", (req, res) => {
    
	let pst = req.body.data.reference;
	let index = req.body.data.transactionIndex;
	let message = req.body.data.message;
	let oid = req.body.data.oid;
	//let pst = '200319055946001';
	//console.log(pst);
	var request = require('request');
	var options = {
	  'method': 'UNLINK',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic Y29udGljYXNoOmI5ZmEwOGNmLTY4MTctNDE5ZS04NjA3LWI3N2Q2ZGE2N2E2ZQ==',
		'Content-Type': 'application/json',
		
	  },
	  body: JSON.stringify({"reference":pst,"transactionIndex":index,"message":message,"oid":oid})

	};
	request(options, function (error, response) { 
	  if (error) res.json({message:error});
	  //console.log(response.body);
	  res.json({message:response.body});
	});
	  
		
});


app.post("/lockReference", (req, res) => {    
	
	let pst = req.body.reference;
	let index = req.body.transactionIndex;
	//let pst = '200319055946001';
	let oid = req.body.oid;
	
	var request = require('request');
	var options = {
	  'method': 'LINK',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic Y29udGljYXNoOmI5ZmEwOGNmLTY4MTctNDE5ZS04NjA3LWI3N2Q2ZGE2N2E2ZQ==',
		'Content-Type': 'application/json',
		
	  },
	  body: JSON.stringify({"reference":pst,"transactionIndex":index,"message":"unlock reason","oid":oid})

	};
	request(options, function (error, response) { 
	  if (error) res.json({message:error});
	  //console.log(response.body);
	  res.json({message:response.body});
	});
		
});



app.post("/checkReferenceAP", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from worldRemitTransactions where reference = ${req.body.reference}`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/getWorldRemitCurrency", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.id,T1.amount,T1.worldremit FROM Currencies T0
						inner join User_Float T1 on T0.id = T1.currency_id
						WHERE T0.symbol = '${req.body.currency}' and T1.user_id = ${req.body.user_id}`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		} 
	 })
	
	
});


app.post("/postErrorWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET worldremit = worldremit + 1 WHERE currency_id = ${req.body.currency} and user_id = ${req.body.user_id}`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/restErrorWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET worldremit = 0 WHERE id = ${req.body.id}`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/completeWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			//console.log(req.body.data.branchID)
			var query1 = `UPDATE User_Float SET amount = amount - '${req.body.data.payOut}' WHERE user_id = '${req.body.data.createdBy}' and currency_id = '${req.body.data.payOutCurrency}'`;
			var query2 = `INSERT worldRemitTransactions (recipiantData,senderData,transactionData,payOut,payOutCurrency,createdBy,reference,branchID,sentBy,sentDate,sentAmount,sentCurrency,clientName,clientPhone,clientCurrency,fxRate,transactionType,commission,apiRespone,additionalInfo) VALUES ('${req.body.data.recipiantData}','${req.body.data.senderData}','${req.body.data.transactionData}','${req.body.data.payOut}','${req.body.data.payOutCurrency}','${req.body.data.createdBy}','${req.body.data.reference}','${req.body.data.branchID}','${req.body.data.sentBy}','${req.body.data.sentDate}','${req.body.data.sentAmount}','${req.body.data.sentCurrency}','${req.body.data.clientName}','${req.body.data.clientPhone}','${req.body.data.clientCurrency}','${req.body.data.fxRate}','${req.body.data.transactionType}','${req.body.data.commission}','${req.body.data.apiRespone}','${req.body.data.additionalInfo}');`;
			
			var query3 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by,worldremit_id) VALUES ('0','6','0','${req.body.data.payOut}','0','${req.body.data.payOutCurrency}','${req.body.data.payOutCurrency}','${req.body.data.branchID}','4','${req.body.data.createdBy}','${req.body.data.reference}')`;
			
			
			
			var queries = []
			queries.push(query1)
			queries.push(query2) 
			queries.push(query3)
			//console.log(queries);
			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
	
	
});


app.post("/completeWorldRemitApprove", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			//console.log(req.body.data.branchID)
			
			var query = `INSERT worldRemitApproval (recipiantData,senderData,transactionData,payOut,payOutCurrency,createdBy,reference,branchID,sentBy,sentDate,sentAmount,sentCurrency,clientName,clientPhone,clientCurrency,fxRate,transactionType,commission,apiRespone,additionalInfo) VALUES ('${req.body.data.recipiantData}','${req.body.data.senderData}','${req.body.data.transactionData}','${req.body.data.payOut}','${req.body.data.payOutCurrency}','${req.body.data.createdBy}','${req.body.data.reference}','${req.body.data.branchID}','${req.body.data.sentBy}','${req.body.data.sentDate}','${req.body.data.sentAmount}','${req.body.data.sentCurrency}','${req.body.data.clientName}','${req.body.data.clientPhone}','${req.body.data.clientCurrency}','${req.body.data.fxRate}','${req.body.data.transactionType}','${req.body.data.commission}','${req.body.data.apiRespone}','${req.body.data.additionalInfo}');`;
			
			 
	        executeQueryCreate(res, query).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
	
	
});


app.post("/completeWorldRemitError", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			var query1 = `INSERT worldRemitErrors (recipiantData,senderData,transactionData,payOut,payOutCurrency,createdBy,reference,branchID,sentBy,sentDate,sentAmount,sentCurrency,clientName,clientPhone,clientCurrency,fxRate,transactionType,commission,apiRespone,additionalInfo) VALUES ('${req.body.data.recipiantData}','${req.body.data.senderData}','${req.body.data.transactionData}','${req.body.data.payOut}','${req.body.data.payOutCurrency}','${req.body.data.createdBy}','${req.body.data.reference}','${req.body.data.branchID}','${req.body.data.sentBy}','${req.body.data.sentDate}','${req.body.data.sentAmount}','${req.body.data.sentCurrency}','${req.body.data.clientName}','${req.body.data.clientPhone}','${req.body.data.clientCurrency}','${req.body.data.fxRate}','${req.body.data.transactionType}','${req.body.data.commission}','${req.body.data.apiRespone}','${req.body.data.additionalInfo}');`;
			
			var queries = []
			queries.push(query1)			
			
			//res.send(queries)  
	        executeQuery(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
	
	
});

//email response end point
app.post("/ProcessReference", (req, res) => {
    
	
	let headers = {
			'Accept': 'application/json',
			'Authorization': 'Basic Y29udGljYXNoOmI5ZmEwOGNmLTY4MTctNDE5ZS04NjA3LWI3N2Q2ZGE2N2E2ZQ==',
			'Content-Type': 'application/json'
		  }
	axios.post('https://wrt-api.contitouch.co.zw/request/cashPayOut',req.body.data,{headers: headers})
	  .then(response => {
		//console.log(response.data);
		res.json({message:response.data});
	  })
	  .catch(error => {
		  res.json({message:error.response.data});
		//console.log(error);
	  });	  
		
});


//email response end point
app.post("/updatePassword", (req, res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			  let pst = req.body;  
			  let output = `
				<p>Congratulation</p>
				<h3>Your password has been reset successfully </h3>
				<p>You can now login with that new password</p>
				<p>Block 3, Tendeseka Office Park, Eastlea, Samora Machel, Harare <br>
				TELEPHONE: + 263 (4) 790148/9, 791926, 705671-4, 748118/20 <br>
				EMAIL: helpdesk@conticash.co.zw  WEBSITE: www.conticash.co.zw/
				<br>
				<img src="cid:conticashlogo">
				</p>
				<p style="color:gray;font-size:12px;">This email is confidential and may also be privileged. If you are not the intended recipient, please notify us immediately. You should not copy or use it for any purpose nor disclose its contents to any other person. Please be aware that there is a risk that information requested via email can be intercepted by hackers while enroute to your mailbox or seen by unauthenticated individuals if your mailbox security is inadequate. Save trees, protect the environment, do not print this mail</p>	
			  `;
			  hashUpdatePassword(pst.password,pst.email)
			  main(pst.email,output).catch(console.error);
		}
		 })	
  //res.json({message: 'Success'});
});

 
//email response end point
app.post("/overridePinEmail",verifyToken, (req, res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			  let pst = req.body;  
			  let output = `
				<p>Good day, the over-ride pin for <span style="font-weight: bold;">${pst.branch}</span> Teller : <span style="font-weight: bold;">${pst.username}</span></p>				
				<p>is : <span style="font-weight: bold;">${pst.pin}</span> for <span style="font-weight: bold;">${pst.rate} ${pst.currency}</span> rate.</p>
				
				<p>Block 3, Tendeseka Office Park, Eastlea, Samora Machel, Harare <br>
				TELEPHONE: + 263 (4) 790148/9, 791926, 705671-4, 748118/20 <br>
				EMAIL: helpdesk@conticash.co.zw  WEBSITE: www.conticash.co.zw/
				<br><br>
				<img src="cid:conticashlogo">
				</p>
				<p style="color:gray;font-size:12px;">This email is confidential and may also be privileged. If you are not the intended recipient, please notify us immediately. You should not copy or use it for any purpose nor disclose its contents to any other person. Please be aware that there is a risk that information requested via email can be intercepted by hackers while enroute to your mailbox or seen by unauthenticated individuals if your mailbox security is inadequate. Save trees, protect the environment, do not print this mail</p>	
			  `;
			 // console.log(pst);
			  mainoverride(pst.email,output).catch(console.error);
			  res.json({message: 'Success'});
		}
		 })	
  //
});

 
 
 app.post("/addTreasuryToTeller",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT floatMoveApprove (amount,currency_id,from_branch_id,to_branch_id,from_user_id,to_user_id,approvalStatus,createdBy) VALUES ('${req.body.amount}','${req.body.currency_id}','${req.body.from_branch_id}','${req.body.to_branch_id}','${req.body.from_user_id}','${req.body.to_user_id}','${req.body.approvalStatus}',${req.body.created_by})`;
			
			//console.log(query);
	 executeQuery(res, query).catch(err =>{
		console.log(err) 
	})
		}
	 })
	
	    
 });
 
//email response end point
app.post("/handoverPinEmail",verifyToken, (req, res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			  let pst = req.body;  
			  let output = `
				<p>Good day, the hand-over pin for <span style="font-weight: bold;">${pst.branch}</span> Teller : <span style="font-weight: bold;">${pst.username}</span></p>				
				<p>is : <span style="font-weight: bold;">${pst.pin}</span>.</p>
				
				<p>Block 3, Tendeseka Office Park, Eastlea, Samora Machel, Harare <br>
				TELEPHONE: + 263 (4) 790148/9, 791926, 705671-4, 748118/20 <br>
				EMAIL: helpdesk@conticash.co.zw  WEBSITE: www.conticash.co.zw/
				<br><br>
				<img src="cid:conticashlogo">
				</p>
				<p style="color:gray;font-size:12px;">This email is confidential and may also be privileged. If you are not the intended recipient, please notify us immediately. You should not copy or use it for any purpose nor disclose its contents to any other person. Please be aware that there is a risk that information requested via email can be intercepted by hackers while enroute to your mailbox or seen by unauthenticated individuals if your mailbox security is inadequate. Save trees, protect the environment, do not print this mail</p>	
			  `;
			 // console.log(pst);
			  mainhandover(pst.email,output).catch(console.error);
			  res.json({message: 'Success'});
		}
		 })	
  //
});

 
 
app.post("/updateUserPassword",verifyToken, (req,res) => {
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var pass = req.body.password.toString();
			let hashpass = bcrypt.hashSync(pass, 10);

			var query2 = `UPDATE Users SET password = '${hashpass}' WHERE email = '${req.body.email}'`;
			
			var queries = []
			
			queries.push(query2)
			
			
			executeQueryCreateUserPass(res, queries,req.body).catch(err =>{
			 	console.log(err)
			})
			//console.log(pass)
			
		  }
	 })	    
 });
 
 
app.post("/createUser",verifyToken, (req,res) => {
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var pass = "123456789";
			let hashpass = bcrypt.hashSync(pass, 10);

			var query1 = `INSERT Users (first_name,last_name,username,email,branch_id,user_type,created_by,cell) VALUES ('${req.body.first_name}','${req.body.last_name}','${req.body.username}','${req.body.email}','1020','${req.body.user_type}','${req.body.created_by}', '${req.body.cell}')`;
			var query2 = `UPDATE Users SET password = '${hashpass}' WHERE email = '${req.body.email}'`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			
			queries.push(pass)
			executeQueryCreateUser(res, queries,req.body).catch(err =>{
			 	console.log(err)
			})
			//console.log(pass)
			
		  }
	 })	    
 });


app.post("/checkPin",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){ 
			res.json(err)
		}else{
			var query = `select username from Users where id = ${req.body.id} and pin = '${req.body.pin}'`;
			

			//res.send(queries)  
	        executeQuery(res, query).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
 
app.post("/checkShopOpen",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){ 
			res.json(err)
		}else{
			var query = `SELECT * FROM Companies WHERE id = 1`;
			

			//res.send(queries)  
	        executeQuery(res, query).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
 app.get("/getTellerFloatSummary",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){ 
			res.json(err)
		}else{
			var query = `SELECT T1.username,T2.name as branch,
							SUM(case when T3.iso_code = 'USD' then T0.amount ELSE 0 END) AS USD,
							SUM(case when T3.iso_code = 'ZAR' then T0.amount ELSE 0 END) AS ZAR,
							SUM(case when T3.iso_code = 'WR USD' then T0.amount ELSE 0 END) AS WR_USD,
							SUM(case when T3.iso_code = 'ZW Bond' then T0.amount ELSE 0 END) AS ZW_Bond,
							SUM(case when T3.iso_code = 'ZW RTGS' then T0.amount ELSE 0 END) AS ZW_RTGS,
							SUM(case when T3.iso_code = 'ZW Ecocash' then T0.amount ELSE 0 END) AS ZW_Ecocash
						FROM User_Float T0
						INNER JOIN Users T1 ON T0.user_id = T1.id
						INNER JOIN Branches T2 ON T0.branch_id = T2.id
						INNER JOIN Currencies T3 ON T0.currency_id = T3.id
						GROUP BY T1.username`;
			

			//res.send(queries)  
	        executeQuery(res, query).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
 
app.post("/adminShopOpen",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){ 
			res.json(err)
		}else{
			var query = `UPDATE Companies SET open = '${req.body.open}' WHERE id = '1'`;
			

			//res.send(queries)  
	        executeQuery(res, query).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
app.post("/addTransactionBuySell",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE User_Float SET ${req.body.floatdecrease.col} = ${req.body.floatdecrease.col} - '${req.body.floatdecrease.value}' WHERE ${req.body.floatdecrease.wcol} = '${req.body.floatdecrease.wvalue}' and ${req.body.floatdecrease.wcol2} = '${req.body.floatdecrease.wvalue2}'`;
			var query2 = `UPDATE User_Float SET ${req.body.floatincrease.col} = ${req.body.floatincrease.col} + '${req.body.floatincrease.value}' WHERE ${req.body.floatincrease.wcol} = '${req.body.floatincrease.wvalue}' and ${req.body.floatincrease.wcol2} = '${req.body.floatincrease.wvalue2}'`;
			var query3 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('${req.body.transaction.client_id}','${req.body.transaction.transaction_type_id}','${req.body.transaction.receive_amount}','${req.body.transaction.disburse_amount}','${req.body.transaction.rate}','${req.body.transaction.disburse_currency_id}','${req.body.transaction.receive_currency_id}','${req.body.transaction.branch_id}','${req.body.transaction.status}','${req.body.transaction.created_by}');`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });

 app.post("/addTransactionBuySellBot",verifyToken,async (req,res) => {
	var client_id;
	var float_balance = await getUSDBalance('2323');
	if(float_balance.amount < req.body.transaction.disburse_amount){
		res.json({message:'insufficient float to complete transaction'})
	}else{

	
			var clientData = await getClientID(req.body.transaction.client_id)
			if(!clientData){
				client_id = await addClient(req.body.transaction)
				
			}else{
				client_id = clientData.id
			}

			jwt.verify(req.token,'JesusChrist@@11', async (err,authData) =>{
				if(err){
					res.json(err)
				}else{ 
					
					// console.log(client_id)
					
					var query1 = `UPDATE User_Float SET amount = amount - '${req.body.transaction.disburse_amount}' WHERE user_id = '2323' and currency_id = '2'`;
					var query2 = `UPDATE User_Float SET amount = amount + '${req.body.transaction.receive_amount}' WHERE user_id = '2323' and currency_id = '${req.body.transaction.receive_currency_id}'`;
					var query3 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('${client_id}','2','${req.body.transaction.receive_amount}','${req.body.transaction.disburse_amount}','${req.body.transaction.rate}','2','${req.body.transaction.receive_currency_id}','1020','4','2323');`;
					
					var queries = []
					queries.push(query1)
					queries.push(query2)
					queries.push(query3)  

					//res.send(queries)  
					executeQueryCreateTran(res, queries).catch(err =>{
						console.log(err)
					})
				}
			})	
		}     
 });

 async function getClientID (client_id) {
	
	const fn = util.promisify(conticash.query).bind(conticash)
	const rows = await fn('SELECT * FROM Clients WHERE id_number = ?', [client_id])
	return rows[0];
	 
 }
 async function addClient (data) {
	
	const fn = util.promisify(conticash.query).bind(conticash)
	const rows = await fn('INSERT INTO Clients SET ?', {first_name: data.first_name,last_name: data.last_name,id_number: data.client_id,nationality:'Zimbabwe',created_by:'2323',status:'2'});
	return rows.insertId;
	 
 }

 async function getUSDBalance (bot_id) {
	
	const fn = util.promisify(conticash.query).bind(conticash)
	const rows = await fn('SELECT * FROM User_Float WHERE user_id = ? AND currency_id = 2', [bot_id])
	return rows[0];
	 
 }


app.post("/addTransactionUtilitySell",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE User_Float SET ${req.body.floatincrease.col} = ${req.body.floatincrease.col} + '${req.body.floatincrease.value}' WHERE ${req.body.floatincrease.wcol} = '${req.body.floatincrease.wvalue}' and ${req.body.floatincrease.wcol2} = '${req.body.floatincrease.wvalue2}'`;
			var query2 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by,utility_id,meter_number,product) VALUES ('${req.body.transaction.client_id}','${req.body.transaction.transaction_type_id}','${req.body.transaction.receive_amount}',0,0,0,'${req.body.transaction.receive_currency_id}','${req.body.transaction.branch_id}','${req.body.transaction.status}','${req.body.transaction.created_by}','${req.body.transaction.utility_id}','${req.body.transaction.meter_number}','${req.body.transaction.product}');`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			
			//res.send(queries)  
	        executeQueryCreateRates(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });


 
app.post("/reverseTransactionBuySell",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
		
			var query1 = `UPDATE User_Float SET ${req.body.floatdecrease.col} = ${req.body.floatdecrease.col} - '${req.body.floatdecrease.value}' WHERE ${req.body.floatdecrease.wcol} = '${req.body.floatdecrease.wvalue}' and ${req.body.floatdecrease.wcol2} = '${req.body.floatdecrease.wvalue2}'`;
			var query2 = `UPDATE User_Float SET ${req.body.floatincrease.col} = ${req.body.floatincrease.col} + '${req.body.floatincrease.value}' WHERE ${req.body.floatincrease.wcol} = '${req.body.floatincrease.wvalue}' and ${req.body.floatincrease.wcol2} = '${req.body.floatincrease.wvalue2}'`;
			var query3 = `UPDATE Transactions SET status = 10,reversed_by = ${req.body.rev_id},reversed_at = CURDATE() WHERE id = '${req.body.id}'`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });


app.post("/updateTellerToBranchFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','0','0','${req.body.branch_id}','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });

 app.post("/updateBranchToTellerFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount - '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount + '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','0','${req.body.user_id}','${req.body.branch_id}','0','${req.body.created_by}')`;
			var query4 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('1','3','${req.body.amount}','0','0','${req.body.currency_id}','${req.body.currency_id}','${req.body.branch_id}','4','${req.body.user_id}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)
			queries.push(query4)

			//res.send(queries)  
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
 app.post("/updateBranchToTellerFloatQuick",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			if(req.body.current > 0){
			var query1 = `UPDATE Branch_Float SET amount = amount - '${req.body.current}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount + '${req.body.current}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES (3,'${req.body.current}','${req.body.currency_id}','0','${req.body.user_id}','${req.body.branch_id}','0','${req.body.created_by}')`;
			var query4 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('1','3','${req.body.current}','0','0','${req.body.currency_id}','${req.body.currency_id}','${req.body.branch_id}','4','${req.body.user_id}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)
			queries.push(query4) 

			//res.send(queries)  
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
			}
			
		  }
	 })	    
 });



 app.post("/updateTreasuryToTellerFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){ 
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount - '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount + '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','0','${req.body.user_id}','${req.body.branch_id}','0','${req.body.created_by}')`;
			var query4 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('113','3','${req.body.amount}','0','0','${req.body.currency_id}','${req.body.currency_id}','${req.body.branch_id}','4','${req.body.user_id}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)
			queries.push(query4)

			//res.send(queries)  
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });

 
app.post("/updateTreasuryToBranchFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE Treasury_Float SET amount = amount - '${req.body.amount}' WHERE currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','0','0','1','${req.body.branch_id}','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });

 app.post("/updateBranchToTreasuryFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount - '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE Treasury_Float SET amount = amount + '${req.body.amount}' WHERE currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','0','0','${req.body.branch_id}','1','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });



app.post("/updateTellerToTellerFloat",verifyToken, (req,res) => {
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE User_Float SET amount = amount + '${req.body.amount}' WHERE user_id = '${req.body.to_user_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.amount}' WHERE user_id = '${req.body.from_user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.from_user_id}','${req.body.to_user_id}','0','0','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });


 app.post("/updateBranchToBranchFloat",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.to_branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE Branch_Float SET amount = amount - '${req.body.amount}' WHERE branch_id = '${req.body.from_branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','','','${req.body.from_branch_id}','${req.body.to_branch_id}','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)

			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });



//Status APIs
app.post("/addStatus",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Status (name) VALUES ('${req.body.name}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	    
 });
 app.get("/getAllStatus", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Status";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getStatusByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Status WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateStatus/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Status SET name = '${req.body.name}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


//User Type APIs
app.post("/addUserTypes", (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT User_Type (name) VALUES ('${req.body.name}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	  
 });
 app.get("/getAllUserTypes", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select id as user_type_id,name as user_type from User_Type";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});



 app.get("/getAllUserTypesAlerts", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.id,T0.first_name,T0.last_name,T0.username,T0.cell,T0.get_message,T0.user_type from Users T0 where T0.get_message = 1 ";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getAllUserTypesAlerts5", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.id,T0.first_name,T0.last_name,T0.username,T0.cell,T0.get_message,T0.user_type from Users T0 where T0.get_message2 = 1 ";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getAllUserTypesAlertsNun", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.id,T0.first_name,T0.last_name,T0.username,T0.cell,T0.get_message,T0.user_type from Users T0 where T0.get_message = 0 ";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getAllUserTypesAlertsNun5", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.id,T0.first_name,T0.last_name,T0.username,T0.cell,T0.get_message,T0.user_type from Users T0 where T0.get_message2 = 0 ";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.post("/getUserTypesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from User_Type WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.put("/updateUserTypes/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Type SET name = '${req.body.name}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.put("/updateUsersWhatsList/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Users SET get_message = '${req.body.value}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.put("/updateUsersWhatsList5/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Users SET get_message2 = '${req.body.value}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
//Hand Over Type APIs
app.post("/addHandOverTypes", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Handover_Types (name) VALUES ('${req.body.name}')`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	  
 });
 app.get("/getAllHandOverTypes", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Handover_Types";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getHandOverTypesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Handover_Types WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateHandOverTypes/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Handover_Types SET name = '${req.body.name}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

//Currencies Over Type APIs
app.post("/addCurrencies", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Currencies (name,iso_code,symbol) VALUES ('${req.body.name}','${req.body.iso_code}','${req.body.symbol}')`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	  
 });
 app.get("/getAllCurrencies", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Currencies.id as id,Currencies.name,Currencies.iso_code,Currencies.symbol,Currencies.image,Status.name as status from Currencies,Status where Currencies.status = Status.id";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.get("/getAllCurrenciesActive", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Currencies.id as id,Currencies.name,Currencies.iso_code,Currencies.symbol,Currencies.image,Status.name as status from Currencies,Status where Currencies.status = Status.id and Status.name = 'active'";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.get("/getAllCurrenciesActiveNoUtils", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Currencies.id as id,Currencies.name,Currencies.iso_code,Currencies.symbol,Currencies.image,Status.name as status from Currencies,Status where Currencies.status = Status.id and Status.name = 'active' and Currencies.class != 1";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.get("/getProductsDropDown", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.*,T1.iso_code from Products T0 inner join Currencies T1 on T0.currency = T1.id where T0.type = 0";
	         executeQuery(res, query).catch(err =>{
		     console.log(err)
	    })
		}
	 })
	
});


app.get("/getProductsCheckBox", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select T0.*,T1.iso_code from Products T0 inner join Currencies T1 on T0.currency = T1.id where T0.type = 1";
			executeQuery(res, query).catch(err =>{
			console.log(err)
	})
		}
	 })
	
});


app.post("/getAllUtils", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T1.id as id,T1.name,T1.iso_code,T1.symbol,T1.image,T2.name as status 
						from User_Float T0
						inner join Currencies T1 on T0.currency_id = T1.id
						inner join Status T2 on T0.status = T2.id
						where T2.name = 'active' and T1.class = 1 and T0.branch_id = '${req.body.branch_id}' and T0.user_id = '${req.body.user_id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getCurrenciesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Currencies WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.post("/getCurrenciesByCol2", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Currencies WHERE ${req.body.col} = '${req.body.value}' and ${req.body.col2} = '${req.body.value2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateCurrencies/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Currencies SET name = '${req.body.name}', iso_code = '${req.body.iso_code}', symbol = '${req.body.symbol}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateCurrenciesStatus/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Currencies SET status = '${req.body.status}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


//Audit_Log Over Type APIs
app.post("/addAuditLog", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Audit_Log (affected_table,details_json) VALUES ('${req.body.affected_table}','${req.body.details_json}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	    
 });
 app.get("/getAllAuditLog", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Audit_Log";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getAuditLogByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Audit_Log WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateAuditLog/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Audit_Log SET affected_table = '${req.body.affected_table}', details_json = '${req.body.details_json}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


//Client_KYC Over Type APIs
app.post("/addClientKYC", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Client_KYC (client_id,kyc_name,kyc_image,status,created_by) VALUES ('${req.body.client_id}','${req.body.kyc_name}','${req.body.kyc_image}','${req.body.status}','${req.body.created_by}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})  
		}
	 })
	//console.log(req.body)
	 
 });
 app.get("/getAllClientKYC", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Client_KYC";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getClientKYCByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Client_KYC WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateClientKYC/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Client_KYC SET client_id = '${req.body.client_id}', kyc_name = '${req.body.kyc_name}', kyc_image = '${req.body.kyc_image}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});



//Company_KYC Over Type APIs
app.post("/addCompanyKYC", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Company_KYC (company_id,kyc_name,kyc_image,status,created_by) VALUES ('${req.body.client_id}','${req.body.kyc_name}','${req.body.kyc_image}','${req.body.status}','${req.body.created_by}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	    
 });
 app.get("/getAllCompanyKYC", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Company_KYC";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getCompanyKYCByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Company_KYC WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.put("/updateCompanyKYC/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Company_KYC SET company_id = '${req.body.client_id}', kyc_name = '${req.body.kyc_name}', kyc_image = '${req.body.kyc_image}' WHERE Id = '${req.params.id}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});



//Users APIs
app.post("/addUsers",verifyToken, function(req,res){
		
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Users (first_name,last_name,username,email,branch_id,user_type,status,created_by) VALUES ('${req.body.first_name}','${req.body.last_name}','${req.body.username}','${req.body.email}','${req.body.branch_id}','${req.body.user_type}','${req.body.status}','${req.body.created_by}')`;
	
			executeQueryCreate(res,query)			
			createUser(req.body);
			
		}
	 })
	
	 
	 
 });
 
 app.post("/updateUsersRBZCredentials",verifyToken, function(req,res){
		
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Users SET rbz_username = '${req.body.rbz_username}',rbz_password = '${req.body.rbz_password}' WHERE id = ${req.body.selected_user}`;
	
			executeQueryCreate(res,query)			
			createUser(req.body);
			
		}
	 })
	
	 
	 
 });
 app.get("/getAllUsers",verifyToken, verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Users.rbz_username,Users.rbz_password, Users.id as id, Users.cell as cell, Users.branch_id,first_name,last_name,username,email,User_Type.name as user_type,User_Type.id as user_type_id,Status.name as status from Users,User_Type,Status where User_Type.id = Users.user_type and Users.status = Status.id";
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.get("/getAllFloatUsers",verifyToken, verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Users.id as id, Users.cell as cell, Users.branch_id,first_name,last_name,username,email,User_Type.name as user_type,User_Type.id as user_type_id,Status.name as status from Users,User_Type,Status where User_Type.id = Users.user_type and Users.status = Status.id";
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getAllTellerUsers",verifyToken, verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Users.id as id,Users.branch_id,first_name,last_name,username,email,User_Type.name as user_type,Status.name as status from Users,User_Type,Status where User_Type.id = Users.user_type and Users.status = Status.id and Users.user_type = 2";
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.get("/getAllUsersWithBranches",verifyToken, verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Users.id as id,first_name,last_name,username,email,Branches.name as branch_name,Branches.id as branch_id,User_Type.name as user_type,Status.name as status from Users,User_Type,Branches,Status where Users.branch_id = Branches.id and User_Type.id = Users.user_type and Users.status = Status.id";
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getUsersByCol",verifyToken, verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Users.id as id,Users.branch_id,first_name,last_name,username,email,User_Type.name as user_type,User_Type.id as user_type_id,Status.name as status from Users,User_Type,Status  WHERE ${req.body.col} = '${req.body.value}' and User_Type.id = Users.user_type and Users.status = Status.id`;
	       executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
});

app.post("/loginUser", (req,res) =>{ 
	//console.log(req.body)
	var query = `select T0.*,T1.name from Users T0 inner join Branches T1 on T0.branch_id = T1.id WHERE email = '${req.body.email}'`;
	executeQueryLogin(res, query,req.body.password);
});


app.post("/checkloginUser", (req,res) =>{
	
	var query = `select * from Users WHERE email = '${req.body.email}'`;
	executeQueryLoginCheck(res, query,req.body.password);
});

app.put("/updateUsers/:id",verifyToken, verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Users SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', username = '${req.body.username}', email = '${req.body.email}', user_type = '${req.body.user_type}', status = '${req.body.status}', cell = '${req.body.cell}' WHERE Id = '${req.params.id}'`;
	        executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
});

app.put("/updateUsersByCol",verifyToken, verifyToken, (req,res) =>{
	console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Users SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
			
			
	        executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.put("/updateUsersByCol2",verifyToken, verifyToken, (req,res) =>{
	console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Users SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
			var query2 = `UPDATE User_Float SET branch_id = '${req.body.value}' WHERE user_id = '${req.body.wvalue}'`;
			var queries = [];
			queries.push(query1);
			queries.push(query2); 
	        executeQueryCreateUser(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
}); 
     
       
//Clients APIs
app.post("/addClients",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Clients (first_name,last_name,cell,email,company_id,address,nationality,date_of_birth,status,created_by,id_number) VALUES ('${req.body.first_name}','${req.body.last_name}','${req.body.cell}','${req.body.email}','${req.body.company_id}','${req.body.address}','${req.body.nationality}','${req.body.date_of_birth}','${req.body.status}','${req.body.created_by}','${req.body.id_number}');`;
			executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	 
 });
 app.get("/getAllClients",verifyToken, verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Clients";
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});
app.post("/getClientsByCol",verifyToken, verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Clients WHERE ${req.body.col} = '${req.body.value}'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.post("/getClientsTransactionsByID",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select  MAX(T1.id) as client_id,MAX(T1.first_name)as first_name,MAX(T1.last_name) as last_name,MAX(T1.id_number) as id_number,T2.name as transaction_type,MAX(T3.iso_code) as currency,MAX(T2.image) as image,SUM(T0.receive_amount) as amount,MAX(T0.created_at) as date_time from Transactions T0
							inner join Clients T1 on T0.client_id = T1.id
							inner join Transaction_Type T2 on T0.transaction_type_id = T2.id
							inner join Currencies T3 on T0.receive_currency_id = T3.id 
							where T1.id = ${req.body.id}
							group by T2.name`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
}); 



app.post("/getClientByName", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Clients
						where first_name like '${req.body.name}%'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
}); 


app.post("/getClientByLastName", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{
			var query = `select * from Clients
						where last_name like '${req.body.name}%'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
}); 


app.post("/getClientByCell", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Clients
						where cell like '${req.body.name}%'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
}); 


app.post("/getFullClientsTransactionsByID",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
				var query = `select T1.id as client_id,T3.name as tran_type,T4.name as branch, T1.first_name,T1.last_name,T2.symbol,T2.image, T0.receive_amount as client_amount,T0.rate,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as date_time from Transactions T0
				inner join Clients T1 on T0.client_id = T1.id
				inner join Currencies T2 on T0.receive_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				inner join Branches T4 on T0.branch_id = T4.id
				where T1.id = ${req.body.client_id} and T0.transaction_type_id = ${req.body.tran_type}`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.post("/getFullClientsTransactionsByIDNow",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
				var query = `select T1.id as client_id,T3.name as tran_type,T4.name as branch, T1.first_name,T1.last_name,T2.symbol,T2.image, T0.receive_amount as client_amount,T0.rate,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as date_time from Transactions T0
				inner join Clients T1 on T0.client_id = T1.id
				inner join Currencies T2 on T0.receive_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				inner join Branches T4 on T0.branch_id = T4.id
				where T1.id = ${req.body.client_id} and T0.transaction_type_id = ${req.body.tran_type} and T0.created_at >= CURDATE() `;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.post("/getFullClientsTransactionsByIDWeek",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
				var query = `select T1.id as client_id,T3.name as tran_type,T4.name as branch, T1.first_name,T1.last_name,T2.symbol,T2.image, T0.receive_amount as client_amount,T0.rate,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as date_time from Transactions T0
				inner join Clients T1 on T0.client_id = T1.id
				inner join Currencies T2 on T0.receive_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				inner join Branches T4 on T0.branch_id = T4.id
				where T1.id = ${req.body.client_id} and T0.transaction_type_id = ${req.body.tran_type} and T0.created_at >= (CURDATE()-7)`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.post("/getFullClientsTransactionsByIDMonth",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
				var query = `select T1.id as client_id,T3.name as tran_type,T4.name as branch, T1.first_name,T1.last_name,T2.symbol,T2.image, T0.receive_amount as client_amount,T0.rate,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as date_time from Transactions T0
				inner join Clients T1 on T0.client_id = T1.id
				inner join Currencies T2 on T0.receive_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				inner join Branches T4 on T0.branch_id = T4.id
				where T1.id = ${req.body.client_id} and T0.transaction_type_id = ${req.body.tran_type} and T0.created_at >= (CURDATE()-31)`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.post("/getFullClientsTransactionsByIDSpecific",verifyToken, verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
				var query = `select T1.id as client_id,T3.name as tran_type,T4.name as branch, T1.first_name,T1.last_name,T2.symbol,T2.image, T0.receive_amount as client_amount,T0.rate,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as date_time from Transactions T0
				inner join Clients T1 on T0.client_id = T1.id
				inner join Currencies T2 on T0.receive_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				inner join Branches T4 on T0.branch_id = T4.id
				where T1.id = ${req.body.client_id} and T0.transaction_type_id = ${req.body.tran_type} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.put("/updateClients/:id",verifyToken, verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Clients SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', cell = '${req.body.cell}', email = '${req.body.email}', address = '${req.body.address}', date_of_birth = '${req.body.date_of_birth}', nationality = '${req.body.nationality}', company_id = '${req.body.company_id}', id_number = '${req.body.id_number}' WHERE Id = '${req.params.id}'`;
	       executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

app.put("/updateClients",verifyToken, verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Clients SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	        executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});



//Companies APIs
app.post("/addCompanies", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Companies (name,reg_number,phone_number,email,address,status,created_by) VALUES ('${req.body.name}','${req.body.reg_number}','${req.body.phone_number}','${req.body.email}','${req.body.address}','${req.body.status}','${req.body.created_by}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	 
 });
 app.get("/getAllCompanies", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select * from Companies";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.post("/getCompaniesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Companies WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.put("/updateCompanies/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Companies SET name = '${req.body.name}', reg_number = '${req.body.reg_number}', phone_number = '${req.body.phone_number}', email = '${req.body.email}', address = '${req.body.address}', status = '${req.body.status}', WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.put("/updateCompanies", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Companies SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


//Transactions APIs
app.post("/addTransactions", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('${req.body.client_id}','${req.body.transaction_type_id}','${req.body.receive_amount}','${req.body.disburse_amount}','${req.body.rate}','${req.body.disburse_currency_id}','${req.body.receive_currency_id}','${req.body.branch_id}','${req.body.status}','${req.body.created_by}');`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	   
 });
 
 
 
 app.get("/getAllTransactionsNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at,Transactions.created_at AS created_at_2,MONTH(Transactions.created_at) as month ,Transactions.receive_amount,Transactions.disburse_amount,
Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,
(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,
(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name 
from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id 
and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id 
from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
where (A.created_at_2 >= CURDATE() and A.transaction_type = 'Buy') or (A.created_at_2 >= CURDATE() and A.transaction_type = 'Sell')
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at, '%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
							(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
							inner join Clients T1 on T0.client_id = T1.id
							inner join Currencies T2 on T0.receive_currency_id = T2.id
							inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
							inner join Status T4 on T0.status = T4.id
							inner join Currencies T5 on T0.utility_id = T5.id
							inner join Users T6 on T0.created_by = T6.id
							inner join Branches T7 on T0.branch_id = T7.id
							where T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdAt >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	 
});



 app.get("/getAllWorldRemitApprovals", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitApproval T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdAt >= CURDATE() - 5`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	 
});


 app.post("/getAllWorldRemitApprovalsTeller", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitApproval T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdAt >= CURDATE() - 5 and T0.createdBy = '${req.body.userId}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	 
});


app.post("/worldRemitApprove", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE worldRemitApproval SET status = 17,approvedBy = '${req.body.userId}',approvedAt = CURRENT_TIMESTAMP WHERE id = '${req.body.id}'`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	   
 });
 

app.post("/worldRemitApprovedPayout", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `INSERT worldRemitTransactions (recipiantData,senderData,transactionData,payOut,payOutCurrency,createdBy,reference,branchID,sentBy,sentDate,sentAmount,sentCurrency,clientName,clientPhone,clientCurrency,fxRate,transactionType,commission,apiRespone,additionalInfo) VALUES ('${req.body.data.recipiantData}','${req.body.data.senderData}','${req.body.data.transactionData}','${req.body.data.payOut}','${req.body.data.payOutCurrency}','${req.body.data.createdBy}','${req.body.data.reference}','${req.body.data.branchID}','${req.body.data.sentBy}','${req.body.data.sentDate}','${req.body.data.sentAmount}','${req.body.data.sentCurrency}','${req.body.data.clientName}','${req.body.data.clientPhone}','${req.body.data.clientCurrency}','${req.body.data.fxRate}','${req.body.data.transactionType}','${req.body.data.commission}','${req.body.data.apiRespone}','${req.body.data.additionalInfo}');`;
		
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.payOut}' WHERE user_id = '${req.body.userId}' and currency_id = '${req.body.payOutCurrency}'`;
			var query3 = `UPDATE worldRemitApproval SET status = 18,approvedBy = '${req.body.userId}' WHERE id = '${req.body.id}'`;
	 
	        var queries = []
			queries.push(query1)
			queries.push(query2) 
			queries.push(query3)
			//console.log(queries);
			//res.send(queries)  
	        executeQueryCreateTran(res, queries).catch(err =>{
				console.log(err)
			}) 
		}
	 })
	
	   
 });
 


 app.get("/getAllReversalsMonthNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id,B.reversed_by,DATE_FORMAT(B.reversed_at, '%a %D %b %H:%i %p') as reversed_at from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at, '%a %D %b %H:%i %p') as created_at,MONTH(Transactions.reversed_at) as month,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select T0.id,(T1.iso_code) as receive_currency,T1.id as received_currency_id,T2.username as reversed_by,T0.reversed_at from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
left join Users T2 on T0.reversed_by = T2.id) as B on A.id = B.id 
where A.month >= MONTH(CURDATE())
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
 
 

 app.get("/getAllTransactionsMonthNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
            (select Transactions.id,DATE_FORMAT(Transactions.created_at, '%a %D %b %H:%i %p') as created_at,MONTH(Transactions.created_at) as month ,YEAR(Transactions.created_at) as year_at,Transactions.receive_amount,Transactions.disburse_amount,
            Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,
            (Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,
            (Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name 
            from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
            where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id 
            and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
            join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id 
            from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
            where (A.month >= MONTH(CURDATE()) and A.transaction_type = 'Buy' AND A.year_at >= YEAR(CURDATE())) or (A.month >= MONTH(CURDATE()) and A.transaction_type = 'Sell' AND A.year_at >= YEAR(CURDATE()))
            order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 }) 
	
	
});


 app.get("/getAllTransactionsMonthNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id							
							where MONTH(T0.createdAt) >= MONTH(CURDATE()) AND YEAR(T0.createdAt) >= YEAR(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsMonthNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at, '%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
							(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
							inner join Clients T1 on T0.client_id = T1.id
							inner join Currencies T2 on T0.receive_currency_id = T2.id
							inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
							inner join Status T4 on T0.status = T4.id
							inner join Currencies T5 on T0.utility_id = T5.id
							inner join Users T6 on T0.created_by = T6.id
							inner join Branches T7 on T0.branch_id = T7.id
							where MONTH(T0.created_at) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTransactionsSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,Transactions.created_at as date_time,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at,MONTH(Transactions.created_at) as month ,Transactions.receive_amount,Transactions.disburse_amount,
Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,
(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,
(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name 
from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id 
and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id 
from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
where A.date_time > '${req.body.start}' and A.date_time < '${req.body.end}'
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




 app.post("/getAllTransactionsSpecificUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdAt > '${req.body.start}' and T0.createdAt < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTransactionsSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTransactionsSpecificUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select * from worldRemitTransactions
				where T0.createdAt > '${req.body.start}' and T0.createdAt < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 
 
 app.get("/getAllTransactions", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




 app.post("/getAllBranchTransactionsNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,Transactions.created_at as created_at_2,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
where A.created_at_2 >= CURDATE()
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsNowByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,Transactions.created_at as created_at_2,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id and Transactions.branch_id = ${req.body.branch_id}) as B on A.id = B.id 
where A.created_at_2 >= CURDATE()
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


						
							
							
app.post("/getAllBranchTransactionsNowByIDUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id	
							where T0.branchID = ${req.body.branch_id} and T0.createdAt >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsNowByIDUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.branch_id = ${req.body.branch_id} and T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id and Transactions.branch_id = ${req.body.branch_id}) as B on A.id = B.id 
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




app.post("/getAllBranchTransactionsSumNowUtilWorldRemitSpec", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where T0.createdAt >= '${req.body.start_date}' and T0.createdAt <= '${req.body.end_date}' and T0.branchID = ${req.body.branch_id}
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

					
app.post("/getAllBranchTransactionsNowByIDUtilWorldRemitSpec", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id	
							where T0.branchID = ${req.body.branch_id} and T0.createdAt >= '${req.body.start_date}' AND T0.createdAt <= '${req.body.end_date}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTransactionsByIDWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.reference = ${req.body.tran_id}`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTransactionsByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id,B.reversed_by,DATE_FORMAT( B.reversed_at, 0) as reversed_at from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select T0.id,(T1.iso_code) as receive_currency,T1.id as received_currency_id,T2.username as reversed_by,T0.reversed_at from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
left join Users T2 on T0.reversed_by = T2.id
where T0.id = ${req.body.tran_id}) as B on A.id = B.id 
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllReversalsNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id,B.reversed_by,DATE_FORMAT( B.reversed_at, 0) as reversed_at from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select T0.id,(T1.iso_code) as receive_currency,T1.id as received_currency_id,T2.username as reversed_by,T0.reversed_at from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
left join Users T2 on T0.reversed_by = T2.id
where T0.reversed_at >= CURDATE()) as B on A.id = B.id 
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsSumNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.branch_id = ${req.body.branch_id} and T0.created_at >= CURDATE()
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where T0.createdAt >= CURDATE() and T0.branchID = ${req.body.branch_id}
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllBranchTransactionsSumNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_at >= CURDATE() and T0.branch_id = ${req.body.branch_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.get("/getAllTransactionsSumNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_at >= CURDATE()
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.get("/getAllTransactionsSumNowMonth", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and MONTH(T0.created_at) >= MONTH(CURDATE()) AND YEAR(T0.created_at) >= YEAR(CURDATE())
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsSumNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_at >= CURDATE()
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsSumNowUtilWorldRemitMonth", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where MONTH(T0.createdAt) >= MONTH(CURDATE()) AND YEAR(T0.createdAt) >= YEAR(CURDATE())
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsSumNowUtilWorldRemitMonth2", (req,res) =>{
	
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where MONTH(T0.createdAt) >= MONTH(CURDATE()) AND YEAR(T0.createdAt) >= YEAR(CURDATE())
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
	
	
});


 app.get("/getAllTransactionsSumNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where T0.createdAt >= CURDATE()
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllBranchTransactionsSumNowByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.branch_id = ${req.body.branch_id} and T0.created_at >= CURDATE()
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumNowByIDUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_at >= CURDATE() and T0.branch_id = ${req.body.branch_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.get("/getAllBranchTransactionsMonthNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,MONTH(Transactions.created_at) as month,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
where (A.month >= MONTH((CURDATE())) and A.transaction_type = 'Buy') or (A.month >= MONTH((CURDATE())) and A.transaction_type = 'Sell')
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllBranchTransactionsMonthNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where MONTH(T0.created_at) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllBranchTransactionsMonthNowByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,MONTH(Transactions.created_at) as month,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id and Transactions.branch_id = ${req.body.branch_id}) as B on A.id = B.id 
where (A.month >= MONTH((CURDATE())) and A.transaction_type = 'Buy') or (A.month >= MONTH((CURDATE())) and A.transaction_type = 'Sell')
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsMonthNowByIDUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.branchID = ${req.body.branch_id} and MONTH(T0.createdAt) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsMonthNowByIDUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.branch_id = ${req.body.branch_id} and MONTH(T0.created_at) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




 app.post("/getAllTransactionsSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,Transactions.created_at as date_time,MONTH(Transactions.created_at) as month,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id 
where A.date_time > '${req.body.start}' and A.date_time < '${req.body.end}'
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from 
(select Transactions.id,Transactions.created_at as date_time,MONTH(Transactions.created_at) as month,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies 
where Transactions.receive_currency_id = Currencies.id and Transactions.branch_id = ${req.body.branch_id}) as B on A.id = B.id 
where A.date_time > '${req.body.start}' and A.date_time < '${req.body.end}'
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSpecificUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
			where T0.createdAt > '${req.body.start}' and T0.createdAt < '${req.body.end}' and T0.branchID = ${req.body.branch_id}`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsSumMonthNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select *  from (select MONTH(MAX(T0.created_at)) as month, SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.branch_id = ${req.body.branch_id} group by T1.name,T2.symbol,T3.symbol) as A
where A.month >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsSumMonthNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
						inner join Currencies T1 on T0.payOutCurrency = T1.id
						where MONTH(T0.createdBy) >= MONTH(CURDATE()) and T0.branchID = ${req.body.branch_id}
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumMonthNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and MONTH(T0.created_by) >= MONTH(CURDATE()) and T0.branch_id = ${req.body.branch_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});





 app.post("/getAllBranchTransactions", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id and Transactions.branch_id = ${req.body.branch_id}) as B on A.id = B.id order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllBranchTransactionsUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
							(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
							inner join Clients T1 on T0.client_id = T1.id
							inner join Currencies T2 on T0.receive_currency_id = T2.id
							inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
							inner join Status T4 on T0.status = T4.id
							inner join Currencies T5 on T0.utility_id = T5.id
							inner join Users T6 on T0.created_by = T6.id
							inner join Branches T7 on T0.branch_id = T7.id
							where T0.branch_id = ${req.body.branch_id}`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllBranchTransactionsSum", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.branch_id = ${req.body.branch_id}
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.branch_id = ${req.body.branch_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumSpecificUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
						inner join Currencies T1 on T0.payOutCurrency = T1.id
						where T0.createdAt > '${req.body.start}' and T0.createdAt < '${req.body.end}' and T0.branchID = ${req.body.branch_id}
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTransactionsSumSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTransactionsSumSpecificUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
						inner join Currencies T1 on T0.payOutCurrency = T1.id
						where T0.createdAt > '${req.body.start}' and T0.createdAt < '${req.body.end}'
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllTransactionsSumSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllTellerTransactionsSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.created_at > '${req.body.start}' and Transactions.created_at < '${req.body.end}') as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id and Transactions.created_by = ${req.body.user_id}) as B on A.id = B.id order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_by = ${req.body.user_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/getAllReversalsSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id,B.reversed_by,DATE_FORMAT( B.reversed_at, 0) as reversed_at from 
(select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,
(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,
Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,
(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and 
Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select T0.id,(T1.iso_code) as receive_currency,T1.id as received_currency_id,T2.username as reversed_by,T0.reversed_at from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
left join Users T2 on T0.reversed_by = T2.id
where T0.reversed_at > '${req.body.start}' and T0.reversed_at < '${req.body.end}') as B on A.id = B.id 
order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTellerTransactions", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id and Transactions.created_by = ${req.body.user_id}) as B on A.id = B.id order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_by = ${req.body.user_id}`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllTellerTransactionsNowByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,Transactions.created_at as date_time,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id and Transactions.created_by = ${req.body.user_id}) as B on A.id = B.id where A.date_time >= CURDATE() order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getAllTellerTransactionsNowByIDUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id	
							where T0.createdBy = ${req.body.user_id} and T0.createdAt >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});	
 app.post("/getAllTellerTransactionsNowByIDUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_by = ${req.body.user_id} and T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllTellerTransactionsMonthNowByID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select A.*,B.receive_currency,B.received_currency_id from (select Transactions.id,MONTH(Transactions.created_at) as month,Transactions.created_at as date_time,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,Currencies.id as disburse_currency_id,(Users.username) as created_by,Users.id as user_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
join (select Transactions.id,(Currencies.iso_code) as receive_currency,Currencies.id as received_currency_id from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id and Transactions.created_by = ${req.body.user_id}) as B on A.id = B.id where (A.month >= MONTH(CURDATE()) and A.transaction_type = 'Buy') or (A.month >= MONTH(CURDATE()) and A.transaction_type = 'Sell') order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




app.post("/getTransactionsByColTellersContiSendIn", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS 	username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdBy = ${req.body.user_id} and T0.created_at >= CURDATE()`;
				
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getTransactionsByColTellersContiSendOut", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS 	username from ContiSendTransactions T0
							left join Currencies T1 on T0.receive_currency_id = T1.id
							left join Branches T2 on T0.created_branch_id = T2.id
							left join Users T3 on T0.createdBy = T3.id
							where T0.collect_user = ${req.body.user_id} and T0.created_at >= CURDATE()`;
				
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTellerTransactionsMonthNowByIDUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.*,T1.symbol as payOutSymbol,T2.name as branch_id,T3.username from worldRemitTransactions T0
							inner join Currencies T1 on T0.payOutCurrency = T1.id
							inner join Branches T2 on T0.branchID = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where T0.createdBy = ${req.body.user_id} and MONTH(T0.createdAt) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

 app.post("/getAllTellerTransactionsMonthNowByIDUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
(T1.last_name) as last_name,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product,T6.username as created_by,T7.name as branch_name from Transactions T0
inner join Clients T1 on T0.client_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
inner join Status T4 on T0.status = T4.id
inner join Currencies T5 on T0.utility_id = T5.id
inner join Users T6 on T0.created_by = T6.id
inner join Branches T7 on T0.branch_id = T7.id
where T0.created_by = ${req.body.user_id} and MONTH(T0.created_at) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumMonthNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select * from (select MONTH(MAX(T0.created_at)) as month,SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_by = ${req.body.user_id}
group by T1.name,T2.symbol,T3.symbol) as A
where A.month >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumMonthNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
						inner join Currencies T1 on T0.payOutCurrency = T1.id
						where MONTH(T0.createdAt) >= MONTH(CURDATE()) and T0.createdBy = ${req.body.user_id}
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumMonthNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and  MONTH(T0.created_at) >= MONTH(CURDATE()) and T0.created_by = ${req.body.user_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTellerTransactionsSumNow", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_by = ${req.body.user_id} and T0.created_at >= CURDATE()
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumNowUtilWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
						inner join Currencies T1 on T0.payOutCurrency = T1.id
						where T0.createdBy = ${req.body.user_id} and T0.createdAt >= CURDATE()
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumNowUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_by = ${req.body.user_id} and T0.created_at >= CURDATE()
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSum", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_by = ${req.body.user_id}
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTellerTransactionsSumUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `
select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_by = ${req.body.user_id}
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTellerTransactionsSumSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,SUM(disburse_amount) as disburse_amountT,T2.symbol as receive_currencyT,T3.symbol as disbursed_currencyT, T1.name as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
where T0.status = 4 and T0.transaction_type_id != 3 and T0.transaction_type_id != 4 and T0.created_by = ${req.body.user_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol,T3.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumSpecificUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select SUM(receive_amount) as receive_amountT,T2.symbol as receive_currencyT, MAX(T3.symbol) as transaction_typeT from Transactions T0
inner join Transaction_Type T1 on T0.transaction_type_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.utility_id = T3.id
where T0.status = 4 and T0.transaction_type_id = 5 and T0.created_by = ${req.body.user_id} and T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
group by T1.name,T2.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllManagerTransactions", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/getTransactionsByColTellers", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at,
			Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,
			(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,
			(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches 
			where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.created_by = ${req.body.user_id} and Transactions.banked = 0) as A
			join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getTransactionsByColTellersWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.id,T4.reference,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at ,T0.receive_amount,T0.disburse_amount,T0.rate,T4.clientPhone as id_number,T4.clientName as clientName,T4.sentBy,(T1.name) as transaction_type,T2.symbol as disburse_currency,(T5.username) as created_by,T5.id as created_by_id,(T6.name) as status,(T7.name) as name,T3.symbol as receive_currency FROM Transactions T0 
			INNER JOIN Transaction_Type T1 ON T0.transaction_type_id = T1.id
			INNER JOIN Currencies T2 ON T0.disburse_currency_id = T2.id
			INNER JOIN Currencies T3 ON T0.receive_currency_id = T3.id
			INNER JOIN worldRemitTransactions T4 ON T0.disburse_amount = T4.payOut
			INNER JOIN Users T5 ON T0.created_by = T5.id
			INNER JOIN Status T6 ON T0.status = T6.id
			INNER JOIN Branches T7 ON T0.branch_id = T7.id
			WHERE T0.created_by = ${req.body.user_id} AND T0.banked = 0 AND T0.created_at >= CURDATE()
			`;
				
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 

app.post("/getTransactionsByColTellersUtil", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T0.id,DATE_FORMAT(T0.created_at,'%a %D %b %H:%i %p') as created_at,(T1.first_name) as first_name,
							(T1.last_name) as last_name,T0.rate,T2.symbol as receive_currency,T0.receive_amount,T3.name as transaction_type,T4.name as status,T5.symbol as utility,T0.meter_number,T0.product from Transactions T0
							inner join Clients T1 on T0.client_id = T1.id
							inner join Currencies T2 on T0.receive_currency_id = T2.id
							inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
							inner join Status T4 on T0.status = T4.id
							inner join Currencies T5 on T0.utility_id = T5.id and T0.created_by = ${req.body.user_id} and T0.banked = 0`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getTransactionsByColBranches", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.branch_id = ${req.body.branch_id}) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getTransactionsByColBranch", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Users.branch_id = ${req.body.branch_id}) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getTransactionsByColUserApprovalsClose", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.created_by = ${req.body.user_id} and Transactions.status = 8) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getTransactionsByColBranchApprovals", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Users.branch_id = ${req.body.branch_id} and Transactions.status = 5) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




app.get("/getTransactionsByColGMApprovals", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.status = 6) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.get("/getTransactionsByColTreasuryApprovals", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.*,B.receive_currency from (select Transactions.id,DATE_FORMAT(Transactions.created_at,'%a %D %b %H:%i %p') as created_at ,Transactions.receive_amount,Transactions.disburse_amount,Transactions.rate,(Clients.id_number) as id_number,(Clients.first_name) as first_name,(Clients.last_name) as last_name,(Transaction_Type.name) as transaction_type,Currencies.symbol as disburse_currency,(Users.username) as created_by,(Users.id) as created_by_id,(Status.name) as status,(Branches.name) as name from Transactions,Transaction_Type,Currencies,Clients,Users,Status,Branches where Transactions.client_id = Clients.id and Transactions.transaction_type_id = Transaction_Type.id and Transactions.branch_id = Branches.id and Transactions.disburse_currency_id = Currencies.id and Transactions.created_by = Users.id and Transactions.status = Status.id and Transactions.status = 7) as A
                         join (select Transactions.id,(Currencies.iso_code) as receive_currency from Transactions,Currencies where Transactions.receive_currency_id = Currencies.id) as B on A.id = B.id order by A.created_at desc`;
	
			
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateTransactions/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Transactions SET client_id = '${req.body.client_id}', tranaction_type_id = '${req.body.transaction_type_id}', amount = '${req.body.amount}', rate = '${req.body.rate}', buyer_currency_id = '${req.body.buyer_currency_id}', seller_currency_id = '${req.body.seller_currency_id}', branch_id = '${req.body.branch_id}' WHERE Id = '${req.params.id}'`;
			
	
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/updateTransactionsApprove/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Transactions SET status = '${req.body.approval_action_id}' WHERE Id = '${req.params.id}'`;
			var query2 = `INSERT Approval_Actions (transaction_id,approval_action_id,user_id) VALUES ('${req.body.transaction_id}','${req.body.approval_action_id}','${req.body.user_id}')`;
	
			var queries = [];
			queries.push(query1);
			queries.push(query2);
	
	executeQueryCreateTranApprove(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateTransactions", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Transactions SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
/*

app.post("/updateTellerToBranchFloatHandOver",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','0','0','${req.body.branch_id}','${req.body.created_by}')`;
			var query4 = `UPDATE Transactions SET banked = 1 WHERE created_by = '${req.body.user_id}'`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)
			queries.push(query4)

			//res.send(queries)  
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });

*/
//Branch APIs
app.post("/addBranches", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Branches (name,phone_number,address,status,created_by) VALUES ('${req.body.branchname}','${req.body.phone_number}','${req.body.address}','${req.body.status}','${req.body.created_by}')`;
	 executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})   
		}
	 })
	
	 
 });
 app.get("/getAllBranches", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = "select Branches.id as id,Branches.name as branchname,phone_number,address,Status.name as status from Branches,Status where Branches.status = Status.id";
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.post("/getBranchesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Branches WHERE ${req.body.col} = '${req.body.value}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.put("/updateBranches/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branches SET name = '${req.body.branchname}', phone_number = '${req.body.phone_number}', address = '${req.body.address}' WHERE Id = '${req.params.id}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.put("/updateBranches", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branches SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


//Branch Float APIs
app.post("/addBranchFloat", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Branch_Float (branch_id,handover_type,amount,currency_id,status,created_by) VALUES ('${req.body.branch_id}','${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.status}','${req.body.created_by}')`;
			executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });
 
 
 
 app.post("/addTreasuryFloat", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Treasury_Float (amount,currency_id) VALUES ('${req.body.amount}','${req.body.currency_id}')`;
			executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });
 
 app.get("/getAllTreasuryFloat", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Treasury_Float.*,Currencies.symbol from Treasury_Float,Currencies where Treasury_Float.currency_id = Currencies.id`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });
 
 
 app.post("/getAllTellerFloat", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol from User_Float,Currencies where User_Float.currency_id = Currencies.id AND User_Float.user_id = ${req.body.user_id}`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });

 app.post("/updateFloatMovement",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = '';
			if(!req.body.createdBy){
		       query = `UPDATE floatMoveApprove SET approvalStatus = '${req.body.approvalStatus}' WHERE Id = '${req.body.id}'`;
				
			}else{
			   query = `UPDATE floatMoveApprove SET approvalStatus = '${req.body.approvalStatus}',approvedBy = '${req.body.createdBy}' WHERE Id = '${req.body.id}'`;
			
			}
			
			//console.log(query);
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	    
 });
 
 app.post("/updateFloatMovementAll",verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = '';
			if(!req.body.createdBy){
		      var query = `UPDATE floatMoveApprove SET approvalStatus = '${req.body.approvalStatus}',approvedBy = '${req.body.createdBy}' WHERE approvalStatus = ${req.body.approvalStatus1}`;
				
			}else{
			  var query = `UPDATE floatMoveApprove SET approvalStatus = '${req.body.approvalStatus}' WHERE approvalStatus = ${req.body.approvalStatus1}`;
			
			}
			
			console.log(query);
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	    
 });
 
 
app.post("/getErrorWorldRemit", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from worldRemitErrors where reference = '${req.body.reference}'`;	
			
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 
 app.post("/getFloatMovement", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			if(req.body.user_type == 6){
				var query = `SELECT T0.id,T0.amount,T0.createdAt,T0.currency_id,T5.symbol,T0.from_user_id,T0.from_branch_id,(T1.username) AS from_user,(T2.name) AS from_branch_name,(T3.username) AS to_user,(T4.name) AS to_branch_name,T0.approvalStatus FROM floatMoveApprove T0
				inner JOIN Users T1 ON T0.from_user_id = T1.id
				inner JOIN Branches T2 ON T0.from_branch_id = T2.id
				inner JOIN Users T3 ON T0.to_user_id = T3.id
				inner JOIN Branches T4 ON T0.to_branch_id = T4.id
				inner JOIN Currencies T5 ON T0.currency_id = T5.id
				WHERE T0.approvalStatus = 11 OR T0.approvalStatus = 14`;
			}
			if(req.body.user_type == 4 || req.body.user_type == 5){
				var query = `SELECT T0.id,T0.amount,T0.createdAt,T0.currency_id,T5.symbol,T0.from_user_id,T0.from_branch_id,(T1.username) AS from_user,(T2.name) AS from_branch_name,(T3.username) AS to_user,(T4.name) AS to_branch_name,T0.approvalStatus FROM floatMoveApprove T0
				inner JOIN Users T1 ON T0.from_user_id = T1.id
				inner JOIN Branches T2 ON T0.from_branch_id = T2.id
				inner JOIN Users T3 ON T0.to_user_id = T3.id
				inner JOIN Branches T4 ON T0.to_branch_id = T4.id
				inner JOIN Currencies T5 ON T0.currency_id = T5.id
				WHERE T0.approvalStatus = 15`;
			}
			if(req.body.user_type == 2){
				var query = `SELECT T0.id,T0.amount,T0.createdAt,T0.currency_id,T5.symbol,T0.from_user_id,T0.from_branch_id,(T1.username) AS from_user,(T2.name) AS from_branch_name,(T3.username) AS to_user,(T4.name) AS to_branch_name,T0.approvalStatus FROM floatMoveApprove T0
				inner JOIN Users T1 ON T0.from_user_id = T1.id
				inner JOIN Branches T2 ON T0.from_branch_id = T2.id
				inner JOIN Users T3 ON T0.to_user_id = T3.id
				inner JOIN Branches T4 ON T0.to_branch_id = T4.id
				inner JOIN Currencies T5 ON T0.currency_id = T5.id
				WHERE T0.approvalStatus = 12`;
			}
			if(req.body.user_type == 1){
				var query = `SELECT T0.id,T0.amount,T0.createdAt,T0.currency_id,T5.symbol,T0.from_user_id,T0.from_branch_id,(T1.username) AS from_user,(T2.name) AS from_branch_name,(T3.username) AS to_user,(T4.name) AS to_branch_name,T0.approvalStatus FROM floatMoveApprove T0
				inner JOIN Users T1 ON T0.from_user_id = T1.id
				inner JOIN Branches T2 ON T0.from_branch_id = T2.id
				inner JOIN Users T3 ON T0.to_user_id = T3.id
				inner JOIN Branches T4 ON T0.to_branch_id = T4.id
				inner JOIN Currencies T5 ON T0.currency_id = T5.id`;
			}


			executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });
 
 
 
 app.post("/floatMovementUpdate", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			
			if(req.body.user_type == 4 || req.body.user_type == 5 || req.body.user_type == 1 || req.body.user_type == 6){
				var query1 = `UPDATE Treasury_Float SET amount = amount + ${req.body.amount} WHERE currency_id = '${req.body.currency_id}'`;
				var query2 = `UPDATE User_Float SET amount = amount - ${req.body.amount} WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
				var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES (4,'${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','210','${req.body.branch_id}','1','${req.body.created_by}')`;
				var query4 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('1','4','${req.body.amount}','0','0','${req.body.currency_id}','${req.body.currency_id}','1','4','${req.body.user_id}')`;
			
			
			}
			if(req.body.user_type == 2){
				var query1 = `UPDATE Treasury_Float SET amount = amount - ${req.body.amount} WHERE currency_id = '${req.body.currency_id}'`;
				var query2 = `UPDATE User_Float SET amount = amount + ${req.body.amount} WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
				var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES (4,'${req.body.amount}','${req.body.currency_id}','210','${req.body.user_id}','1','${req.body.branch_id}','${req.body.user_id}')`;
				var query4 = `INSERT Transactions (client_id,transaction_type_id,receive_amount,disburse_amount,rate,disburse_currency_id,receive_currency_id,branch_id,status,created_by) VALUES ('1','3','${req.body.amount}','0','0','${req.body.currency_id}','${req.body.currency_id}','${req.body.branch_id}','4','${req.body.user_id}')`;
			
			}
			console.log(query1);
			console.log(query2);
			console.log(query3);
			console.log(query4);
			var queries = []
			queries.push(query1)
			queries.push(query2) 
			queries.push(query3)
			queries.push(query4)
			
 
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
		}
	 })
	
	
 });
 
 
 app.post("/getTreasuryFloatByCol", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Treasury_Float.*,Currencies.symbol from Treasury_Float,Currencies where Treasury_Float.currency_id = Currencies.id and ${req.body.col} = '${req.body.value}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	
 });
 

app.put("/updateTreasuryFloatIncrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Treasury_Float SET amount = amount + '${req.body.amount}' WHERE currency_id = '${req.body.currency_id}' `;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getFloatInjectByCurrency", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.injection AS value ,T1.name FROM Balances T0 
							INNER JOIN Companies T1 ON T0.company = T1.id
							WHERE T0.currency_id = '${req.body.currency}' `;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getCompanyBalance", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.balance AS value ,T1.name FROM Balances T0 
							INNER JOIN Companies T1 ON T0.company = T1.id
							WHERE T0.currency_id = '${req.body.currency}' `;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getContiSendBalance", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.disbursed,T0.received,T0.balance FROM Balances T0 
						WHERE T0.company = 3 AND T0.currency_id = '${req.body.currency}' `;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getContiCashBalance", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.disbursed,T0.received,T0.balance FROM Balances T0 
						WHERE T0.company = 1 AND T0.currency_id = '${req.body.currency}'`;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getWorldRemitBalance", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `SELECT T0.disbursed,T0.received,T0.balance FROM Balances T0 
						WHERE T0.company = 2 AND T0.currency_id = '${req.body.currency}'`;
	executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
}); 

app.put("/updateTreasuryFloatIncrease2", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Treasury_Float SET amount = amount + '${req.body.amount}' WHERE currency_id = '${req.body.currency_id}' `;
			var query2 = `INSERT Float_Transactions (company,handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES ('${req.body.company}','${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','210','210','1','1','${req.body.created_by}')`;
			var query3 = `UPDATE Balances SET injection = injection + '${req.body.amount}' WHERE currency_id = '${req.body.currency_id}' and company = '${req.body.company}'`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
			queries.push(query3)
	
			executeQueryCreateTran(res, queries).catch(err =>{
				console.log(err)
		})
	
		}
	 })
	
	
});


app.put("/updateTreasuryFloatDecrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Treasury_Float SET ${req.body.col} = ${req.body.col} - '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' `;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
 


app.put("/updateBranchFloatIncrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branch_Float SET ${req.body.col} = ${req.body.col} + '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' and ${req.body.wcol2} = '${req.body.wvalue2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateBranchFloatDecrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branch_Float SET ${req.body.col} = ${req.body.col} - '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' and ${req.body.wcol2} = '${req.body.wvalue2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
 


 app.post("/addFloatTransactions", verifyToken, (req,res) => {
	 console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id_selected}','${req.body.from_user_id}','${req.body.to_user_id}','${req.body.from_branch_id}','${req.body.to_branch_id}')`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})  
		}
	 })
	
	
 });
 
 
 app.post("/getFloatTransactions", verifyToken, (req,res) => {
	// console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T0.id,T0.amount,T1.id as handover_id,T1.name as handover_type,T2.iso_code,T2.image,T3.first_name as from_user_first_name,T3.last_name as from_user_last_name,T4.first_name as to_user_first_name,T4.last_name as to_user_last_name,T5.name as from_branch,T6.name as to_branch,DATE_FORMAT(T0.date_time,'%a %D %b %H:%i %p') as date_time,T7.username,T8.name as company from Float_Transactions T0
							inner join Handover_Types T1 on T0.handover_type = T1.id
							inner join Currencies T2 on T0.currency_id = T2.id
							left join Users T3 on T0.from_user_id = T3.id
							left join Users T4 on T0.to_user_id = T4.id
							left join Branches T5 on T0.from_branch_id = T5.id
							left join Branches T6 on T0.to_branch_id = T6.id 
							left join Users T7 on T0.created_by = T7.id 
							LEFT JOIN Companies T8 ON T0.company = T8.id
							where T1.id = ${req.body.handover_id} and T0.date_time >= CURDATE() and T8.id = ${req.body.company}`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})  
		}
	 })
	
	
 });
 
 
 app.post("/getFloatTransactions2", verifyToken, (req,res) => {
	// console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T0.id,T0.amount,T1.id as handover_id,T1.name as handover_type,T2.iso_code,T2.image,T3.first_name as from_user_first_name,T3.last_name as from_user_last_name,T4.first_name as to_user_first_name,T4.last_name as to_user_last_name,T5.name as from_branch,T6.name as to_branch,DATE_FORMAT(T0.date_time,'%a %D %b %H:%i %p') as date_time,T7.username,T8.name as company from Float_Transactions T0
							inner join Handover_Types T1 on T0.handover_type = T1.id
							inner join Currencies T2 on T0.currency_id = T2.id
							left join Users T3 on T0.from_user_id = T3.id
							left join Users T4 on T0.to_user_id = T4.id
							left join Branches T5 on T0.from_branch_id = T5.id
							left join Branches T6 on T0.to_branch_id = T6.id 
							left join Users T7 on T0.created_by = T7.id 
							LEFT JOIN Companies T8 ON T0.company = T8.id
							where T1.id = ${req.body.handover_id} and T0.date_time > '${req.body.start}' and  T0.date_time < '${req.body.end}' and T8.id = ${req.body.company}`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})  
		}
	 })
	
	
 });
 
 
 app.get("/getFloatTransactionsByCol", verifyToken, (req,res) => {
	 console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id) VALUES ('${req.body.handover_type}','${req.body.amount}','${req.body.currency_id_selected}','${req.body.from_user_id}','${req.body.to_user_id}','${req.body.from_branch_id}','${req.body.to_branch_id}')`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})  
		}
	 })
	
	
 });
 
 app.get("/getAllBranchFloat", verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/getAllBranchFloatByBranch", verifyToken, (req,res) =>{
	 jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id and Branch_Float.branch_id = ${req.body.branch_id}`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getBranchFloatByCol", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and ${req.body.col} = '${req.body.value}' and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getBranchFloatByCol2", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and Branch_Float.branch_id = ${req.body.value}  and Branch_Float.currency_id ='${req.body.value1}' and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getBranchFloatByCol2", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and Branch_Float.branch_id = ${req.body.value}  and Branch_Float.currency_id ='${req.body.value1}' and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.put("/updateBranchFloat/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branch_Float SET branch_id = '${req.body.branch_id}', handover_type = '${req.body.handover_type}', amount = '${req.body.amount}', currency_id = '${req.body.currency_id}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.put("/updateBranchFloat", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branch_Float SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


//User Float APIs
app.post("/addUserFloat", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT User_Float (user_id,branch_id,handover_type,amount,currency_id,status,created_by) VALUES ('${req.body.user_id}','${req.body.branch_id}','${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.status}','${req.body.created_by}')`;
	 executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	})   
		}
	 })
	
	 
 });
 app.post("/addUserFloat2", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `INSERT User_Float (user_id,branch_id,handover_type,amount,currency_id,status,created_by) VALUES ('${req.body.user_id}','1020','${req.body.handover_type}','${req.body.amount}','${req.body.currency_id}','${req.body.status}','${req.body.created_by}'),
			('${req.body.user_id}','1020','${req.body.handover_type}','${req.body.amount}','273','${req.body.status}','${req.body.created_by}'),
			('${req.body.user_id}','1020','${req.body.handover_type}','${req.body.amount}','270','${req.body.status}','${req.body.created_by}'),
			('${req.body.user_id}','1020','${req.body.handover_type}','${req.body.amount}','272','${req.body.status}','${req.body.created_by}');`;
	 executeQueryCreate(res, query).catch(err =>{
		console.log(err)
	}) 
		}
	 })
	
	 
 });
 app.get("/getAllUserFloat", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Users.first_name,Users.last_name,Branches.name as branch_name from User_Float,Currencies,Users,Branches where User_Float.currency_id = Currencies.id and Users.id = User_Float.user_id and Branches.id = User_Float.branch_id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.get("/getAllUserFloatGrouped", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.user_id, Users.first_name,Users.last_name,Branches.name as branch_name,Branches.id as branch_id from User_Float,Currencies,Users,Branches where User_Float.currency_id = Currencies.id and Users.id = User_Float.user_id and Branches.id = User_Float.branch_id group by User_Float.user_id,Users.first_name,Users.last_name,Branches.name,Branches.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
app.post("/getUserFloatByCol", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Branches.name as branch_name from User_Float,Currencies,Branches where User_Float.branch_id = Branches.id and User_Float.currency_id = Currencies.id and ${req.body.col} = '${req.body.value}' and ${req.body.col2} = '${req.body.value2}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});

app.post("/getUserFloatByCol3", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Users.first_name,Users.last_name from User_Float,Currencies,Users where User_Float.currency_id = Currencies.id and User_Float.user_id = Users.id and User_Float.${req.body.col} = '${req.body.value}' and User_Float.${req.body.col2} = '${req.body.value2}' and User_Float.${req.body.col3} != '${req.body.value3}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});



app.post("/getUserFloatByCol2", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Currencies.image,Users.first_name,Users.last_name from User_Float,Currencies,Users where User_Float.currency_id = Currencies.id and User_Float.user_id = Users.id and User_Float.${req.body.col} = '${req.body.value}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});


app.post("/getBranchDashFloatByCol", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
            var query = `select Branch_Float.branch_id,Branches.name,Currencies.iso_code,Currencies.image,Currencies.symbol,Branch_Float.currency_id,Branch_Float.amount,Branch_Float.status from Branch_Float,Currencies,Branches where Currencies.id = Branch_Float.currency_id and Branch_Float.branch_id = ${req.body.value} and Branch_Float.status = 2 and Branch_Float.branch_id = Branches.id`;
	
			// var query = `select User_Float.*,Currencies.symbol,Currencies.image,Users.first_name,Users.last_name from User_Float,Currencies,Users where User_Float.currency_id = Currencies.id and User_Float.user_id = Users.id and User_Float.${req.body.col} = '${req.body.value}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});


app.post("/getUserFloatByColHistory", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T0.*,T1.symbol,T1.image,T2.first_name,T2.last_name from Branch_HandOver_History T0 
						inner join Currencies T1 on T0.currency_id = T1.id 
						inner join Users T2 on T0.user_id = T2.id 
						where T0.user_id = ${req.body.user_id} and T0.branch_id = ${req.body.branch_id} 
						and T0.created_at >= CURDATE() and T0.handover_id in (select MAX(T0.handover_id) from Branch_HandOver_History T0 
						inner join Currencies T1 on T0.currency_id = T1.id 
						inner join Users T2 on T0.user_id = T2.id 
						where T0.user_id = ${req.body.user_id} and T0.branch_id = ${req.body.branch_id} 
						and T0.created_at >= CURDATE())`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});


app.get("/getHandOverId", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select TOP 1 handover_id from Branch_HandOver_History
						ORDER BY handover_id DESC`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});


app.get("/getManager", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select first_name,last_name,id,cell,email from Users where user_type = 4`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});


app.post("/getSupervisor", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select first_name,last_name,id,cell,email from Users where user_type = 3 and branch_id = ${req.body.value}`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 }) 
	

});


app.post("/getSuperSupervisor", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select first_name,last_name,id,cell,email from Users where user_type = 6 and branch_id = ${req.body.value}`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 }) 
	

});


app.post("/getUserFloatByCol4", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Currencies.image,Users.first_name,Users.last_name from User_Float,Currencies,Users where User_Float.currency_id = Currencies.id and User_Float.user_id = Users.id and User_Float.${req.body.col} = '${req.body.value}' and User_Float.${req.body.col2} = '${req.body.value2}' and Users.branch_id = '${req.body.value2}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err) 
	})
		}
	 })
	

});


app.post("/getUserFloatByCol5", verifyToken, (req,res) =>{
	//console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol,Currencies.image,Users.first_name,Users.last_name from User_Float,Currencies,Users where User_Float.currency_id = Currencies.id and User_Float.user_id = Users.id and User_Float.${req.body.col} = '${req.body.value}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});

app.post("/getUserFloatByColAll", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select User_Float.*,Currencies.symbol from User_Float,Currencies where User_Float.currency_id = Currencies.id and ${req.body.col} = '${req.body.value}'`;
			executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	

});
app.put("/updateUserFloat/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET user_id = '${req.body.user_id}', branch_id = '${req.body.branch_id}', handover_type = '${req.body.handover_type}', amount = '${req.body.amount}', currency_id = '${req.body.currency_id}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.put("/updateUserFloat", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' and ${req.body.wcol2} = '${req.body.wvalue2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateUserFloatIncrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET ${req.body.col} = ${req.body.col} + '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' and ${req.body.wcol2} = '${req.body.wvalue2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateUserFloatDecrease", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE User_Float SET ${req.body.col} = ${req.body.col} - '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}' and ${req.body.wcol2} = '${req.body.wvalue2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/updateTellerToBranchFloatHandOver",verifyToken, (req,res) => {
	console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES (4,'${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','0','0','${req.body.branch_id}','${req.body.created_by}')`;
			var query4 = `UPDATE Transactions SET banked = 1,banked_at = CURDATE() WHERE created_by = '${req.body.user_id}'`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2) 
			queries.push(query3)
			queries.push(query4)
			

			//res.send(queries)  
	        executeQueryCreateTran4(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });
 
 
 
app.post("/updateTellerToBranchFloatHandOver2",verifyToken, (req,res) => {
	console.log(req.body)
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			var query1 = `UPDATE Branch_Float SET amount = amount + '${req.body.amount}' WHERE branch_id = '${req.body.branch_id}' and currency_id = '${req.body.currency_id}'`;
			var query2 = `UPDATE User_Float SET amount = amount - '${req.body.amount}' WHERE user_id = '${req.body.user_id}' and currency_id = '${req.body.currency_id}'`;
			var query3 = `INSERT Float_Transactions (handover_type,amount,currency_id,from_user_id,to_user_id,from_branch_id,to_branch_id,created_by) VALUES (4,'${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','0','0','${req.body.branch_id}','${req.body.created_by}')`;
			var query4 = `UPDATE Transactions SET banked = 1,banked_at = CURDATE() WHERE created_by = '${req.body.user_id}'`;
			var query5 = `INSERT Branch_HandOver_History (branch_id,amount,currency_id,user_id,handover_id) VALUES ('${req.body.branch_id}','${req.body.amount}','${req.body.currency_id}','${req.body.user_id}','${req.body.handover_id}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2) 
			queries.push(query3)
			queries.push(query4)
			queries.push(query5)

			//res.send(queries)  
	        executeQueryCreateTran5(res, queries).catch(err =>{
			 	console.log(err)
	        })
		  }
	 })	    
 });


//Rates APIs
app.post("/addRates", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var image = ''
			var currency_image = ''
			var local_currency_image = ''

			if(req.body.currency_id == 2){
				currency_image = 'usd.png'

				if(req.body.local_currency_id == 270){
					image = 'usdbond.png'
				}
				if(req.body.local_currency_id == 272){
					image = 'usdrtgs.png'
				}
				if(req.body.local_currency_id == 273){
					image = 'usdecocash.png'
				}
			}
			if(req.body.currency_id == 270){
				currency_image = 'zwd.png'
			}
			if(req.body.currency_id == 272){
				currency_image = 'zwd.png'
			}
			if(req.body.currency_id == 273){
				currency_image = 'zwd.png'
			}


			if(req.body.local_currency_id == 2){
				local_currency_image = 'usd.png'
			}
			if(req.body.local_currency_id == 270){
				local_currency_image = 'zwd.png'
			}
			if(req.body.local_currency_id == 272){
				local_currency_image = 'zwd.png'
			}
			if(req.body.local_currency_id == 273){
				local_currency_image = 'zwd.png'
			}

			var query = `INSERT Rates (image,currency_image,local_currency_image,buy_rate,sell_rate,local_currency_id,currency_id,status,created_by) VALUES ('${image}','${currency_image}','${local_currency_image}','${req.body.buy_rate}','${req.body.sell_rate}','${req.body.local_currency_id}','${req.body.currency_id}','${req.body.status}','${req.body.created_by}')`;
	 executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	   
 });
 app.get("/getAllRates", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.id,A.image,A.currency_image,A.local_currency_image, currency_id,curr_id,buy_rate,sell_rate,B.local_currency_id,B.local_curr_id,status from 
						(select Rates.id,Rates.image,Rates.currency_image,Rates.local_currency_image, Currencies.symbol as currency_id,Rates.currency_id as curr_id,buy_rate,sell_rate,local_currency_id,Status.name as status from Rates,Currencies,Status 
						where Rates.status = Status.id and Rates.currency_id = Currencies.id) as A 
						join (select Rates.id,Rates.local_currency_id as local_curr_id,Currencies.symbol as local_currency_id from Rates,Currencies where Rates.local_currency_id = Currencies.id) as B on A.id = B.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




 app.post("/getAllRatesByCurrencyID", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select A.id,A.image,A.currency_image,A.local_currency_image, currency_id,curr_id,buy_rate,sell_rate,B.local_currency_id,B.local_curr_id,status from 
						(select Rates.id,Rates.image,Rates.currency_image,Rates.local_currency_image, Currencies.symbol as currency_id,Rates.currency_id as curr_id,buy_rate,sell_rate,local_currency_id,Status.name as status from Rates,Currencies,Status 
						where Rates.status = Status.id and Rates.currency_id = Currencies.id) as A 
						join (select Rates.id,Rates.local_currency_id as local_curr_id,Currencies.symbol as local_currency_id from Rates,Currencies where Rates.local_currency_id = Currencies.id) as B on A.id = B.id
						where A.currency_id = '${req.body.currency_id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 

app.get("/getAllToggleCurrencies", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select MAX(T1.id) as id, T1.symbol from Rates T0
						inner join Currencies T1 on T0.currency_id = T1.id
						group by T1.symbol
						order by T1.symbol desc`;
		executeQuery(res, query).catch(err =>{
			console.log(err)
		})
		}
	 })
	
	
});


app.get("/getAllToggleCurrencies2", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.id,T0.symbol FROM Currencies T0
							WHERE T0.status = 2 AND T0.class != 1`;
		executeQuery(res, query).catch(err =>{
			console.log(err)
		})
		}
	 })
	
	
});


app.post("/getRatesByCol", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select * from Rates WHERE ${req.body.col} = '${req.body.value}' and ${req.body.col2} = '${req.body.value2}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	 
});

app.post("/deleteRates", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `DELETE FROM Rates WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});




app.put("/updateRates/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			let dataObj = {
				username: req.body.username,
				currency_id: req.body.currency_id,
				local_currency_id: req.body.local_currency_id,
				buy_rate:req.body.buy_rate,
				sell_rate:req.body.sell_rate
			}
			var query1 = `UPDATE Rates SET buy_rate = '${req.body.buy_rate}', sell_rate = '${req.body.sell_rate}', local_currency_id = '${req.body.local_curr_id}', currency_id = '${req.body.curr_id}' WHERE Id = '${req.params.id}'`;
		    
			var query2 = `INSERT Rate_Transactions (currency_id,buy_rate,sell_rate,local_currency_id,created_by) VALUES ('${req.body.curr_id}','${req.body.buy_rate}','${req.body.sell_rate}','${req.body.local_curr_id}','${req.body.created_by}')`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
	
	whatsappMessage(dataObj);
		}
	 })
	
	
});


async function whatsappMessage(data) {
	//console.log('Greg you are the bom!');
	
	//var float =  test();
    var numbers = await rp.get('http://fx.conticash.co.zw:8081/getMessageNumbers',{ json: true })
    .then(function (data) {
		//console.log(data.data.one.recordset)
		return data.data.one.recordset;
       
    })
    .catch(function (err) {
		console.log(err);
        
	});

	
	numbers.forEach(element => {
		//console.log(data);
	    sendWhatapp(element.cell,data)
	});
  
}


function sendWhatapp(data,userdata) {
	

	var cell = encodeURI(data.replace(/\s/g, ''))
	var today = new Date();
	var dd = String(today.CURDATE()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + '/' + mm + '/' + yyyy;
	
	var total_msg = `*Conticash Rate Change Alert (${today})*%0A%0AUser :  *${userdata.username}* %0AChanged Rates as follows %0A%0A Currency Pair : *${userdata.currency_id}* : *${userdata.local_currency_id}*%0A Buy Rate : *${userdata.buy_rate}*%0A Sell Rate : *${userdata.sell_rate}*`;		
    var newmessage = encodeURIComponent(total_msg);
	  //console.log(msg)
	  //console.log(newmessage)

	rp.get('https://sms.contitouch.co.zw/api.json?cmd=sendwapp&username=contipay&password=password01&gsm='+cell+'&msg='+newmessage, { json: true,strictSSL: false })
	.then(function (data) {
		console.log(data)
		//return data.data.one.recordset;
        
    })
    .catch(function (err) {
		console.log(err);
        
	});

}





app.put("/updateRates", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Rates SET ${req.body.col} = '${req.body.value}' WHERE ${req.body.wcol} = '${req.body.wvalue}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getBranchFloatGraph", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT
							us.id as userId,
							us.first_name as firstName,
							us.last_name as lastName,
							fl.amount as Amount,
							cr.id AS currencyId,
							cr.class AS parentId,
							cr.currency_level AS level,
							cr.iso_code
						FROM
							dbo.Users as us
						INNER JOIN
							dbo.User_Float as fl
						ON 
							fl.user_id = us.id
						INNER JOIN 
							dbo.Currencies AS cr
						ON
							cr.id = fl.currency_id
						WHERE fl.branch_id = '${req.body.branch_id}';
						`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getAllFloatGraph", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT
							br.id as branchId,
							br.name as Name,
							fl.amount as Amount,
							cr.id AS currencyId,
							cr.class AS parentId,
							cr.currency_level AS level,
							cr.iso_code
						FROM
							dbo.Branches as br
						INNER JOIN
							dbo.Branch_Float as fl
						ON 
							fl.branch_id = br.id
						INNER JOIN 
							dbo.Currencies AS cr
						ON
							cr.id = fl.currency_id
						ORDER BY br.id DESC ;
						`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

 app.get("/getAllTransAnalysis", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `declare @lastweek datetime
							declare @now datetime
							set @now = CURDATE()
							set @lastweek = dateadd(day,-7,@now)
							SELECT 
								trans.id AS transId,
								trans.receive_amount AS sellAmount,
								trans.disburse_amount AS buyAmount,
								currSell.iso_code AS currencySell,
								currBuy.iso_code AS currencyBuy,
								type.name AS type,
								trans.rate AS rate,
								CONVERT(VARCHAR(12), CURDATE(), 107) AS date
							FROM 
								dbo.Transactions AS trans
							JOIN
								dbo.Transaction_Type AS type
							ON 
								trans.transaction_type_id = type.id
							JOIN
								dbo.Currencies AS currBuy
							ON 
								currBuy.id = trans.disburse_currency_id
							JOIN 
								dbo.Currencies AS currSell
							ON
								currSell.id = trans.receive_currency_id
							AND 
								trans.created_at BETWEEN @lastweek AND @now
							ORDER BY
								trans.created_at
							DESC;`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getBranchFloatGraph3", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `Select BB.branch,BB.amount + UU.amount as amount,BB.symbol from (select B0.branch_id,B1.name as branch,SUM(B0.amount) as amount,B0.currency_id,B2.symbol from Branch_Float B0 inner join Branches B1 on B0.branch_id = B1.id inner join Currencies B2 on B0.currency_id = B2.id group by B0.branch_id,B0.currency_id,B1.name,B2.symbol) as BB inner join (select U0.branch_id,SUM(U0.amount) as amount,U0.currency_id from User_Float U0 group by U0.branch_id, U0.currency_id) as UU on BB.branch_id = UU.branch_id and BB.currency_id = UU.currency_id order by BB.branch`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerFloatGraph3", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T2.username as username,SUM(U0.amount) as amount,T3.symbol from User_Float U0
							inner join Users T2 on U0.user_id = T2.id
							inner join Currencies T3 on U0.currency_id = T3.id
							where U0.branch_id = ${req.body.branch_id} and T2.branch_id = ${req.body.branch_id}
							group by T3.symbol,T2.username`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});

 app.get("/getBranchSalesGraph", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T4.name as tran_type,T1.name as branch_name,AVG(rate) as average_rate,MAX(T2.symbol) as received_currency,SUM(receive_amount) as received_sum,MAX(T3.symbol) as disbursed_currency,SUM(disburse_amount) as disbursed_sum from Transactions T0
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (transaction_type_id != 3 and receive_currency_id = 2 and T0.status = 4) or (transaction_type_id != 3 and disburse_currency_id = 2 and T0.status = 4)
group by T4.name,T1.name`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getBranchSalesGraphByCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `select T4.name as tran_type,T1.name as branch_name,AVG(rate) as average_rate,MAX(T2.symbol) as received_currency,SUM(receive_amount) as received_sum,MAX(T3.symbol) as disbursed_currency,SUM(disburse_amount) as disbursed_sum from Transactions T0
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (transaction_type_id != 3 and T2.symbol = '${req.body.currency_id}' and T0.status = 4) or (transaction_type_id != 3 and T3.symbol = '${req.body.currency_id}' and T0.status = 4)
group by T4.name,T1.name`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getBranchSalesGraphByDateCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE(T0.created_at) as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (T0.transaction_type_id != 3 and T2.symbol = '${req.body.currency_id}' and T0.status = 4) or (T0.transaction_type_id != 3 and T3.symbol = '${req.body.currency_id}' and T0.status = 4)) as A
where A.date_time >= (CURDATE()-${timedata})
group by A.branch_name,A.tran_type`;

//console.log(query)
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getBranchSalesGraphByDate", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2 and T0.status = 4) or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2 and T0.status = 4)) as A
where A.date_time >= (CURDATE()-${timedata})
group by A.branch_name,A.tran_type`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getBranchSalesGraphByDateSpecificCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (T0.transaction_type_id != 3 and T2.symbol = '${req.body.currency_id}' and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4) or (T0.transaction_type_id != 3 and T3.symbol = '${req.body.currency_id}' and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4)) as A
group by A.branch_name,A.tran_type`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getBranchSalesGraphByDateSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4) or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4)) as A

group by A.branch_name,A.tran_type`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraph", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			var query = `select T4.name as tran_type,T1.username ,AVG(rate) as average_rate,MAX(T2.symbol) as received_currency,SUM(receive_amount) as received_sum,MAX(T3.symbol) as disbursed_currency,SUM(disburse_amount) as disbursed_sum from Transactions T0
inner join Users T1 on T0.created_by = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (transaction_type_id != 3 and receive_currency_id = 2 and T0.branch_id = ${req.body.branch_id}) or (transaction_type_id != 3 and disburse_currency_id = 2 and T0.branch_id = ${req.body.branch_id})
group by T4.name,T1.username`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraphCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			
			var query = `select T4.name as tran_type,T1.username ,AVG(rate) as average_rate,MAX(T2.symbol) as received_currency,SUM(receive_amount) as received_sum,MAX(T3.symbol) as disbursed_currency,SUM(disburse_amount) as disbursed_sum from Transactions T0
inner join Users T1 on T0.created_by = T1.id
inner join Currencies T2 on T0.receive_currency_id = T2.id
inner join Currencies T3 on T0.disburse_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
where (transaction_type_id != 3 and T2.symbol = '${req.body.currency_id}' and T0.branch_id = ${req.body.branch_id}) or (transaction_type_id != 3 and T3.symbol = '${req.body.currency_id}' and T0.branch_id = ${req.body.branch_id})
group by T4.name,T1.username`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraphByDateSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.username) as username,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T5.username,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
inner join Users T5 on T0.created_by = T5.id
where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2 and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}') or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2 and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}')) as A

group by A.branch_name,A.tran_type
`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraphByDateSpecificCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			} 
			var query = `select MAX(A.date_time) as date_time,MAX(A.username) as username,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T5.username,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
inner join Users T5 on T0.created_by = T5.id
where (T0.transaction_type_id != 3 and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}') or (T0.transaction_type_id != 3  and T0.branch_id = ${req.body.branch_id} and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}')) as A
where (A.received_currency = '${req.body.currency_id}') or (A.disbursed_currency = '${req.body.currency_id}')
group by A.branch_name,A.tran_type,A.username
`; 
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraphByDateCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.username) as username,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE(T0.created_at) as date_time,T5.username,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
inner join Users T5 on T0.created_by = T5.id
where (T0.transaction_type_id != 3 and T0.branch_id = ${req.body.branch_id}) or (T0.transaction_type_id != 3 and T0.branch_id = ${req.body.branch_id})) as A
where (A.date_time >= (CURDATE()-${timedata}) and A.received_currency = '${req.body.currency_id}') or (A.date_time >= (CURDATE()-${timedata}) and A.disbursed_currency = '${req.body.currency_id}')
group by A.branch_name,A.tran_type,A.username
`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.post("/getTellerSalesGraphByDate", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `select MAX(A.date_time) as date_time,MAX(A.username) as username,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
from (select DATE_FORMAT(T0.created_at, '%d %M %Y') as date_time,T5.username,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
inner join Branches T1 on T0.branch_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Currencies T3 on T0.receive_currency_id = T3.id
inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
inner join Users T5 on T0.created_by = T5.id
where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2 and T0.branch_id = ${req.body.branch_id}) or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2 and T0.branch_id = ${req.body.branch_id})) as A
where A.date_time >= (CURDATE()-${timedata})
group by A.branch_name,A.tran_type
`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


 app.get("/getRateBoard", (req,res) =>{
	
		
			var query = `select T0.buy_rate,T0.sell_rate,T1.iso_code as forex,T2.symbol as local_currency from Rates T0
inner join Currencies T1 on T0.currency_id = T1.id
inner join Currencies T2 on T0.local_currency_id = T2.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
	
	
});


 app.get("/getMessageNumbers", (req,res) =>{
			var query = `select T0.id,T0.first_name,T0.last_name,T0.cell from Users T0
where T0.get_message = 1`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
});


 app.get("/getMessageNumbers2", (req,res) =>{
			var query = `select T0.id,T0.first_name,T0.last_name,T0.cell from Users T0
where T0.get_message2 = 1`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
});

 app.get("/getBranchSalesGraphByDateApi", (req,res) =>{
		
			
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
						MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
						from (select (T0.created_at) as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
						inner join Branches T1 on T0.branch_id = T1.id
						inner join Currencies T2 on T0.disburse_currency_id = T2.id
						inner join Currencies T3 on T0.receive_currency_id = T3.id
						inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
						where (T0.receive_currency_id in (2,70,1276) and T0.status = 4) or (T0.disburse_currency_id in (2,70,1276) and T0.status = 4)) as A
						where A.date_time >= CURDATE() and A.tran_type != 'FloatIn'
						group by A.branch_name,A.tran_type,A.received_currency,A.disbursed_currency`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		
});



 app.get("/getAllTransactionsNowContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where (T0.created_at) >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getAllTransactionsSumNowConitSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.receive_amount) as counted,SUM(T0.receive_amount) as receive_amountT,SUM(T0.charge) as receive_amount_charge,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from ContiSendTransactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
where T0.created_at >= CURDATE()
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.get("/getAllTransactionsSumNowContiSendMonth", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.receive_amount) as counted,SUM(T0.receive_amount) as receive_amountT,SUM(T0.charge) as receive_amount_charge,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from ContiSendTransactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
where MONTH(T0.created_at) >= MONTH(CURDATE())
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});





 app.get("/getAllTransactionsMonthNowContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							where MONTH(T0.created_at) >= MONTH(CURDATE())`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



 app.post("/getAllTransactionsSpecificContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							
				where T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTransactionsSumSpecificContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `	select COUNT(T0.receive_amount) as counted,SUM(T0.receive_amount) as receive_amountT,SUM(T0.charge) as receive_amount_charge,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from ContiSendTransactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
						where T0.created_at > '${req.body.start}' and T0.created_at < '${req.body.end}'
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});



app.post("/getAllTellerTransactionsNowByIDContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							
							where T0.createdBy = ${req.body.user_id} and T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllTellerTransactionsSumNowContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err) 
		}else{ 
			var query = `select COUNT(T0.receive_amount) as counted,SUM(T0.receive_amount) as receive_amountT,SUM(T0.charge) as receive_amount_charge,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from 			ContiSendTransactions T0
						inner join Currencies T1 on T0.receive_currency_id = T1.id
						where T0.createdBy = ${req.body.user_id} and T0.created_at >= CURDATE()
						group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


						
app.post("/getAllBranchTransactionsNowContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `SELECT (T0.first_name) AS sender_first_name,(T0.last_name) sender_last_name,T0.*,T1.symbol as currency_symbol,(T2.name) as branch_id,(T3.username) AS username from ContiSendTransactions T0
							inner join Currencies T1 on T0.receive_currency_id = T1.id
							inner join Branches T2 on T0.created_branch_id = T2.id
							inner join Users T3 on T0.createdBy = T3.id
							
							where T0.city_name = '${req.body.branch_id}' and T0.created_at >= CURDATE()`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.post("/getAllBranchTransactionsSumNowContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{ 
			var query = `select COUNT(T0.receive_amount) as counted,SUM(T0.receive_amount) as receive_amountT,SUM(T0.charge) as receive_amount_charge,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from ContiSendTransactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
where T0.created_at >= CURDATE() and T0.city_name = '${req.body.branch_id}'
group by T1.symbol`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


 app.get("/getNumberOfTransaction", (req,res) =>{
		
			
			var query = `select COUNT(T0.payOut) as counted,SUM(T0.payOut) as receive_amountT,T1.symbol as receive_currencyT, MAX(T1.symbol) as transaction_typeT from worldRemitTransactions T0
inner join Currencies T1 on T0.payOutCurrency = T1.id
where T0.createdAt >= CURDATE()
group by T1.symbol`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		
}); 


 app.get("/getRateBoard", (req,res) =>{
	
		
			var query = `select T0.buy_rate,T0.sell_rate,T1.iso_code as forex,T2.symbol as local_currency from Rates T0
inner join Currencies T1 on T0.currency_id = T1.id
inner join Currencies T2 on T0.local_currency_id = T2.id`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
	
	
});

 
 
 
 
 
 app.get("/getBranchFloatGraph3Api", (req,res) =>{
	
			var query = `Select BB.branch,BB.amount + UU.amount as amount,BB.symbol from (select B0.branch_id,B1.name as branch,SUM(B0.amount) as amount,B0.currency_id,B2.symbol from Branch_Float B0 inner join Branches B1 on B0.branch_id = B1.id inner join Currencies B2 on B0.currency_id = B2.id group by B0.branch_id,B0.currency_id,B1.name,B2.symbol) as BB inner join (select U0.branch_id,SUM(U0.amount) as amount,U0.currency_id from User_Float U0 group by U0.branch_id, U0.currency_id) as UU on BB.branch_id = UU.branch_id and BB.currency_id = UU.currency_id order by BB.branch`;
			
		executeQuery(res, query).catch(err =>{
			console.log(err)
		})
});


 app.get("/getMessageNumbers", (req,res) =>{
			var query = `select T0.id,T0.first_name,T0.last_name,T0.cell from Users T0
where T0.get_message = 1`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
});



 app.get("/getTopBottomBranch", (req,res) =>{
			var query = `select * from (Select BB.branch,BB.amount + UU.amount as amount,BB.symbol,BB.bottom_limit,BB.top_limit
							from (select B0.branch_id,B1.name as branch,SUM(B0.amount) as amount,B0.currency_id,B2.symbol,MAX(B0.top_limit) as top_limit,MAX(B0.bottom_limit) as bottom_limit from Branch_Float B0 
							inner join Branches B1 on B0.branch_id = B1.id 
							inner join Currencies B2 on B0.currency_id = B2.id 							
							group by B0.branch_id,B0.currency_id,B1.name,B2.symbol) as BB 

							inner join (select U0.branch_id,SUM(U0.amount) as amount,U0.currency_id 
							from User_Float U0 group by U0.branch_id, U0.currency_id)
							as UU on BB.branch_id = UU.branch_id and BB.currency_id = UU.currency_id) as floats
							where (floats.amount > floats.top_limit) or (floats.amount < floats.bottom_limit)`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
});


 app.get("/getTopBottom", (req,res) =>{
			var query = `select * from (Select BB.branch,BB.amount + UU.amount as amount,BB.symbol,BB.bottom_limit,BB.top_limit
							from (select B0.branch_id,B1.name as branch,SUM(B0.amount) as amount,B0.currency_id,B2.symbol,MAX(B3.top_limit) as top_limit,MAX(B3.bottom_limit) as bottom_limit from Branch_Float B0 
							inner join Branches B1 on B0.branch_id = B1.id 
							inner join Currencies B2 on B0.currency_id = B2.id 
							inner join Treasury_Float B3 on B0.currency_id = B3.currency_id
							group by B0.branch_id,B0.currency_id,B1.name,B2.symbol) as BB 

							inner join (select U0.branch_id,SUM(U0.amount) as amount,U0.currency_id 
							from User_Float U0 group by U0.branch_id, U0.currency_id)
							as UU on BB.branch_id = UU.branch_id and BB.currency_id = UU.currency_id) as floats
							where (floats.amount > floats.top_limit) or (floats.amount < floats.bottom_limit)`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		
});

/*
 app.get("/getBranchSalesGraphByDateApi", (req,res) =>{
		
			
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
						MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
						from (select DATE_FORMAT(T0.created_at, 101) as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
						inner join Branches T1 on T0.branch_id = T1.id
						inner join Currencies T2 on T0.disburse_currency_id = T2.id
						inner join Currencies T3 on T0.receive_currency_id = T3.id
						inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
						where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2) or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2)) as A
						where A.date_time >= CURDATE()
						group by A.branch_name,A.tran_type`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		
});


 app.get("/getBranchSalesGraphByDateApiWorldRemit", (req,res) =>{
		
			
			var query = `select MAX(A.date_time) as date_time,MAX(A.tran_type) as tran_type,MAX(A.branch_name) as branch_name,AVG(A.rate) as average_rate,
						MAX(A.received_currency) as received_currency, SUM(A.receive_amount) as received_sum,MAX(A.disbursed_currency) as disbursed_currency,SUM(A.disburse_amount) as disbursed_sum 
						from (select DATE_FORMAT(T0.created_at, 101) as date_time,T4.name as tran_type,T1.name as branch_name,T3.symbol as received_currency,T0.receive_amount,T2.symbol as disbursed_currency,T0.disburse_amount,T0.rate from Transactions T0 
						inner join Branches T1 on T0.branch_id = T1.id
						inner join Currencies T2 on T0.disburse_currency_id = T2.id
						inner join Currencies T3 on T0.receive_currency_id = T3.id
						inner join Transaction_Type T4 on T0.transaction_type_id = T4.id
						where (T0.transaction_type_id != 3 and T0.receive_currency_id = 2) or (T0.transaction_type_id != 3 and T0.disburse_currency_id = 2)) as A
						where A.date_time >= CURDATE()
						group by A.branch_name,A.tran_type`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		
});


*/
app.post("/getSalesByDateGraph", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select top ${req.body.time} * from (select T3.name,MAX(T1.iso_code) as receive_currency,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.status = 4
group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
		    
			    var query2 = `
select top ${req.body.time} * from (select T3.name,MAX(T2.iso_code) as disburse_currency,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 2 and T0.status = 4
group by T3.name,T0.disburse_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
			
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getSalesByDateGraphCurr2", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,MAX(T1.symbol) as receive_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(T0.created_at)) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.status = 4 and T1.symbol = '${req.body.currency_id}'
group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc
limit ${req.body.time}
`;
		    
			    var query2 = `
select * from (select T3.name,MAX(T2.iso_code) as disburse_currency,MAX(T2.symbol) as disburse_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(T0.created_at)) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 6 and T0.status = 4 and T2.symbol = '${req.body.currency_id}'
group by T3.name,T0.disburse_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc
limit ${req.body.time}
`;
			
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});

app.post("/getSalesByDateGraphCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,MAX(T1.symbol) as receive_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT(T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(T0.created_at)) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.status = 4 and T1.symbol = '${req.body.currency_id}'
group by T3.name,T0.receive_currency_id,DATE(T0.created_at)) as A
order by A.date_time desc
limit ${req.body.time}
`;
		    
			    var query2 = `
select * from (select T3.name,MAX(T2.iso_code) as disburse_currency,MAX(T2.symbol) as disburse_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT(T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(T0.created_at)) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 2 and T0.status = 4 and T2.symbol = '${req.body.currency_id}'
group by T3.name,T0.disburse_currency_id,DATE(T0.created_at)) as A
order by A.date_time desc
limit ${req.body.time}
`;
	//console.log(query1)		
			
	var queries = []
	queries.push(query1)
	queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getSalesByDateGraphSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4 and T2.symbol = '${req.body.currency_id}'
group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
		    
			    var query2 = `
select * from (select T3.name,MAX(T2.iso_code) as disburse_currency,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 2 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4 and T2.symbol = '${req.body.currency_id}'
group by T3.name,T0.disburse_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getSalesByDateGraphSpecificCurr", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,MAX(T1.symbol) as receive_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4 
group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
where A.receive_currency_symbol = '${req.body.currency_id}'
order by A.date_time desc`;
		    
			    var query2 = `
select * from (select T3.name,MAX(T2.iso_code) as disburse_currency,MAX(T1.symbol) as disburse_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 2 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4 
group by T3.name,T0.disburse_currency_id,CAST(T0.created_at AS DATE)) as A
where A.disburse_currency_symbol = '${req.body.currency_id}'
order by A.date_time desc`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getSalesByDateGraphSpecific", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 1 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4
group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
		    
			    var query2 = `
select * from (select T3.name,MAX(T2.iso_code) as disburse_currency,AVG(T0.rate) as avg_rate, SUM(T0.disburse_amount) as disbure_amount,MAX(DATE_FORMAT( T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
inner join Currencies T1 on T0.receive_currency_id = T1.id
inner join Currencies T2 on T0.disburse_currency_id = T2.id
inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
where T0.transaction_type_id = 2 and T0.created_at > '${req.body.start_date}' and T0.created_at < '${req.body.end_date}' and T0.status = 4
group by T3.name,T0.disburse_currency_id,CAST(T0.created_at AS DATE)) as A
order by A.date_time desc`;
			
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
	executeQueryCreateRates(res, queries).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.get("/getAllFloatLimits", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
					
			var query = `select T0.id,T1.iso_code, T0.bottom_limit,T0.top_limit from Treasury_Float T0
						 inner join Currencies T1 on T0.currency_id = T1.id`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		}
	 })
	
	
});


app.post("/getBranchFloatLimits", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
					
			var query = `select T0.id,T1.iso_code, T0.bottom_limit,T0.top_limit from Branch_Float T0
							inner join Currencies T1 on T0.currency_id = T1.id
							where T0.branch_id = ${req.body.branch_id}`;
						
			executeQuery(res, query).catch(err =>{
				console.log(err)
			})
		}
	 })
	
	
});

app.put("/updateFloatLimits/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Branch_Float SET top_limit = '${req.body.top}',bottom_limit = '${req.body.bottom}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.put("/updateClientLoyaltyId/:id", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE Clients SET loyalty_id = '${req.body.loyalty_id}' WHERE Id = '${req.params.id}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});


app.post("/getBranchFloatGraph3ContiSend", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `Select BB.created_branch_id,BB.branch,BB.float_amount,BB.amount AS commssion, BB.symbol,BB.num_transactions FROM 
(select B0.created_branch_id,B1.name as branch,COUNT(B0.refNumber) AS num_transactions, SUM(B0.charge) as amount,SUM(B0.receive_amount) as float_amount,B0.receive_currency_id,B2.symbol 
from ContiSendTransactions B0 inner join Branches B1 on B0.created_branch_id = B1.id 
inner join Currencies B2 on B0.receive_currency_id = B2.id 
WHERE B0.disburse_amount IS NULL
group by B0.created_branch_id,B0.receive_currency_id,B1.name,B2.symbol) as BB
WHERE BB.symbol = '${req.body.currency}'`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});


app.post("/getBranchSalesGraphByDateCurrCS", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var timedata = 0;
			if(req.body.time != 1){
				timedata = req.body.time
			}
			var query = `SELECT MAX(T0.collect_at) AS date_time, SUM(T0.disburse_amount) AS disbured_sum, SUM(T0.charge) AS charges,SUM(T0.receive_amount) AS deposits,MAX(T1.symbol) AS disbured_currency,MAX(T2.name) AS branch_name  FROM ContiSendTransactions T0
INNER JOIN Currencies T1 ON T0.disburse_currency_id = T1.id
INNER JOIN Branches T2 ON T0.collect_branch_id = T2.id
WHERE T0.collect_at >= (CURDATE()-${timedata}) AND T1.symbol LIKE '%${req.body.currency_id}%'
group BY T2.name`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
});



app.post("/getSalesByDateGraphCurr2CS", verifyToken, (req,res) =>{
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var query1 = `select * from (select T3.name,MAX(T1.iso_code) as receive_currency,MAX(T1.symbol) as receive_currency_symbol,AVG(T0.rate) as avg_rate, SUM(T0.receive_amount) as receive_amount,MAX(DATE_FORMAT(T0.created_at,'%d %M %Y')) as date_t ,CAST(T0.created_at AS DATE) as date_time, MAX(DAYNAME(CAST(T0.created_at AS DATE))) as day_name from Transactions T0
				inner join Currencies T1 on T0.receive_currency_id = T1.id
				inner join Currencies T2 on T0.disburse_currency_id = T2.id
				inner join Transaction_Type T3 on T0.transaction_type_id = T3.id
				where T0.transaction_type_id = 1 and T0.status = 4 and T1.symbol = '${req.body.currency_id}'
				group by T3.name,T0.receive_currency_id,CAST(T0.created_at AS DATE)) as A
				order by A.date_time desc
				limit ${req.body.time}
				`;
		    
			    

				var query2 = `select * FROM (SELECT MAX(DATE_FORMAT(T0.created_at,'%d %M %Y')) AS date_t, MAX(CAST(T0.collect_at AS DATE)) as date_time,MAX(DAYNAME(CAST(T0.collect_at AS DATE))) as day_name, SUM(T0.disburse_amount) AS disburse_amount,MAX(T1.symbol) AS disburse_currency_symbol,MAX(T2.name) AS branch_name  FROM ContiSendTransactions T0
				INNER JOIN Currencies T1 ON T0.disburse_currency_id = T1.id
				INNER JOIN Branches T2 ON T0.collect_branch_id = T2.id
				WHERE T1.symbol LIKE '%${req.body.currency_id}%'
				group BY DATE(T0.collect_at)) AS A
				order by A.date_time desc
				limit ${req.body.time}
				`;
			
			// console.log(query2)
			var queries = []
			queries.push(query1)
			queries.push(query2)
	
			executeQueryCreateRates(res, queries).catch(err =>{
				console.log(err)
			})
		}
	 })
	
	
});


app.post("/contiSendAPICheckRef", verifyToken, (req,res) =>{
	//console.log(req.body);
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `SELECT T0.*,T1.symbol FROM ContiSendTransactions T0
							INNER JOIN Currencies T1 ON T0.receive_currency_id = T1.id
							WHERE refNumber = '${req.body.reference}' AND collect_user IS NULL`;
	executeQuery(res, query).catch(err =>{
		console.log(err)
	})
		}
	 })
	
	
});
 
 

app.post("/contiSendAPICheckBooking", (req,res) =>{
	 let refNumber = req.body.refNumber;
	
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://wrt-api.contitouch.co.zw/request/ContiSendBooking?CSID='+refNumber,
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Content-Type': 'application/json',
		'Cookie': 'ContiCashAPI=t6qjkcck5s69fdhi6q4verq5fv'
	  },
	 

	};
	request(options, function (error, response) {
	  if (error) throw new Error(error);
	  res.send(response.body);
	});

	
});
 

app.post("/contiSendAPICheckRefWR", (req,res) =>{
	 let refNumber = req.body.refNumber;
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut?reference='+refNumber+'&channel=CS',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		
	  }
	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	

	
});
 
 
 
 
app.post("/contiSendRate", (req,res) =>{
	 let amount = req.body.amount;
	 let currencyCode = req.body.currencyCode;
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://wrt-api.contitouch.co.zw/request/rates?merchantId=1&amount='+amount+'&currencyCode='+currencyCode,
	  'headers': {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Cookie': 'ContiCashAPI=e2ullt8vdmau24f4jctsqa6ttv'
	  }
	};
		request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	

	
});
 

app.post("/contiSendLock", (req,res) =>{
	let transactionIndex = req.body.transactionIndex;
	let reference = req.body.reference;
	let oid = req.body.oid;
	var request = require('request');
	var options = {
	  'method': 'LINK',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut?reference='+reference,
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Content-Type': 'application/json',
		
	  },
	  body: JSON.stringify({"transactionIndex":transactionIndex,"reference":reference,"oid":oid})

	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	

	
});
 
 
app.post("/contiSendSearch", (req,res) =>{
	
	
	let data = req.body.name;
	
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://wrt-api.contitouch.co.zw/request/clientAccount?search='+data+'&clientID=false',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Cookie': 'ContiCashAPI=e2ullt8vdmau24f4jctsqa6ttv'
	  }
	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	


	
});
 
 
 
 
app.post("/contiSendUnLock", (req,res) =>{
	let transactionIndex = req.body.data.transactionIndex;
	let reference = req.body.data.reference;
	let oid = req.body.data.oid;
	let message = req.body.data.message;
	var request = require('request');
	var options = {
	  'method': 'UNLINK',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Content-Type': 'application/json',
		'Cookie': 'PHPSESSID=cc58vg1cnnqeab7tekkhov90ig'
	  },
	  body: JSON.stringify({"transactionIndex":transactionIndex,"reference":reference,"oid":oid,"message":message})
	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	


	
});
 
 
app.post("/contiSendComplete", (req,res) =>{
	
   // "validationCode":"1234",
  //  "nationalId":"1234567890",
    
    
    let paidAmount = req.body.paidAmount;
    let paidCurrency = req.body.paidCurrency;
	let transactionIndex = req.body.transactionIndex;
	let validationCode = req.body.validationCode;
	let reference = req.body.reference;
	let oid = req.body.oid;
	let nationalId = req.body.nationalId
	
	var request = require('request');
	var options = {
	  'method': 'POST',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Con': '',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Content-Type': 'application/json',
		'Cookie': 'PHPSESSID=cc58vg1cnnqeab7tekkhov90ig'
	  },
	  body: JSON.stringify({"reference":reference,"validationCode":validationCode,"nationalId":nationalId,"idTypeCode":"NationalID","paidAmount":paidAmount,"paidCurrency":paidCurrency,"transactionIndex":transactionIndex,"oid":oid})

	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	


	
});
 
 
 app.post("/contiSendWR", (req, res) => {
   

    let pst = req.body.data;
	
	
	
	var request = require('request');
	var options = {
	  'method': 'PUT',
	  'url': 'https://wrt-api.contitouch.co.zw/request/cashPayOut',
	  'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		
	  },
	  body: JSON.stringify(pst)

	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	
		
});

app.post("/contiSendWRBooking", (req, res) => {
   

    let pst = req.body;
	
	
	
	var request = require('request');
	var options = {
	  'method': 'PUT',
      'url': 'https://wrt-api.contitouch.co.zw/request/ContiSendBooking',
	  'headers': {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		
	  },
	  body: JSON.stringify(pst)

	};
	request(options, function (error, response) { 
	  if (error) res.send(error);
	  //console.log(response.body);
	  res.send(response.body);
	});	
		
});


app.post("/addClientsCS", (req, res) => {
   

    let pst = req.body;
	
	var request = require('request');
	var options = {
	  'method': 'PUT',
	  'url': 'https://wrt-api.contitouch.co.zw/request/clientAccount',
	  'headers': {
		'Accept': 'application/json',
		'Authorization': 'Basic T2tBOmY4MmVjYTBhLWVhMjYtNDk0MC05ZmI1LTQzZGVmZjdmNzNiOA==',
		'Content-Type': 'application/json',
		'Cookie': 'ContiCashAPI=t6qjkcck5s69fdhi6q4verq5fv'
	  },
	  body: JSON.stringify(pst)

	};
	request(options, function (error, response) {
	  if (error) throw new Error(error);
	  res.send(response.body);
	});
});



 app.post("/contiSendAPI", verifyToken, (req,res) => {
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var queries = []
			
			if(req.body.sendTypeData == 'Payout'){
				var curr_id;
				if(req.body.receive_currency_id == 'USD'){
					curr_id = 2
				}
				
				if(req.body.receive_currency_id == 'ZAR'){
					curr_id = 70
				}
				if(req.body.receive_currency_id == 'ZWL'){
					curr_id = 270
				}
				if(typeof(req.body.receive_currency_id) == 'number'){
					curr_id = req.body.receive_currency_id
				}
				if(typeof(req.body.receive_currency_id) == 'number'){
					curr_id = req.body.receive_currency_id
				}
				
				var query1 = `UPDATE ContiSendTransactions SET recipitent_address = '${req.body.recipient_address}',disburse_amount = ${req.body.receive_amount},disburse_currency_id = ${curr_id},collect_user = ${req.body.created_by},collect_branch_id = ${req.body.branch_id} WHERE refNumber = '${req.body.refNumber}'`;
				var query2 = `UPDATE User_Float SET amount = amount - ${req.body.receive_amount} WHERE user_id = '${req.body.created_by}' and currency_id = '${curr_id}'`;
				//console.log(query1);
				queries.push(query1) 
				queries.push(query2)   
	 
				executeQueryContiSend(res, queries).catch(err =>{
					console.log(err)
				})
			}
			if(req.body.sendTypeData == 'Payout2'){
				var curr_id;
				if(req.body.receive_currency_id == 'USD'){
					curr_id = 2
				}
				
				if(req.body.receive_currency_id == 'ZAR'){
					curr_id = 70
				}
				if(req.body.receive_currency_id == 'ZWL'){
					curr_id = 270
				}
				if(req.body.receive_currency_id == 'Bond'){
					curr_id = 270
				}
				
				
				
				var query1 = `INSERT ContiSendTransactions (recipitent_address,city_name,charge,clientID,receive_amount,receive_currency_id,recipientCell,recipientFirstName,recipientLastName,recipientID,refNumber,sendTypeData,createdBy,created_branch_id,transactionIndex,first_name,last_name,cell,disburse_amount,disburse_currency_id,collect_user,collect_branch_id) VALUES ('${req.body.recipient_address}','${req.body.city_name}','${req.body.charge}','${req.body.clientID}','0','${curr_id}','${req.body.recipientCell}','${req.body.recipientFirstName}','${req.body.recipientLastName}','${req.body.recipientID}','${req.body.refNumber}','${req.body.sendTypeData}','${req.body.created_by}','0','${req.body.transactionIndex}','${req.body.first_name}','${req.body.last_name}','${req.body.sender_cell}','${req.body.receive_amount}','${curr_id}','${req.body.created_by}','${req.body.branch_id}')`;
				var query2 = `UPDATE User_Float SET amount = amount - ${req.body.receive_amount} WHERE user_id = '${req.body.created_by}' and currency_id = '${curr_id}'`;
				//console.log(req.body);
				queries.push(query1) 
				queries.push(query2)   
	 
				executeQueryContiSend(res, queries).catch(err =>{
					console.log(err)
				})
			}
			 
			if(req.body.sendTypeData == 'Send'){
				//var deposit = Number(req.body.receive_amount) + Number(req.body.charge);
				//console.log(deposit);
				var query1 = `UPDATE User_Float SET amount = amount + ${req.body.deposit} WHERE user_id = '${req.body.created_by}' and currency_id = '${req.body.receive_currency_id}'`;
				
				var query2 = `INSERT ContiSendTransactions (city_name,charge,clientID,receive_amount,receive_currency_id,recipientCell,recipientFirstName,recipientLastName,recipientID,refNumber,sendTypeData,createdBy,created_branch_id,transactionIndex,first_name,last_name,cell) VALUES ('${req.body.city_name}','${req.body.charge}','${req.body.clientID}','${req.body.receive_amount}','${req.body.receive_currency_id}','${req.body.recipientCell}','${req.body.recipientFirstName}','${req.body.recipientLastName}','${req.body.recipientID}','${req.body.refNumber}','${req.body.sendTypeData}','${req.body.created_by}','${req.body.branch_id}','${req.body.transactionIndex}','${req.body.first_name}','${req.body.last_name}','${req.body.sender_cell}')`;
				console.log(query1);
				queries.push(query1) 
				queries.push(query2) 
				 
				executeQueryContiSend(res, queries).catch(err =>{
					console.log(err)
				})
				
			}
			
			if(req.body.sendTypeData == 'Booking'){
				//var deposit = Number(req.body.receive_amount) + Number(req.body.charge);
				//console.log(deposit);
				var query1 = `UPDATE User_Float SET amount = amount + ${req.body.deposit} WHERE user_id = '${req.body.created_by}' and currency_id = '${req.body.receive_currency_id}'`;
				
				var query2 = `INSERT ContiSendTransactions (city_name,charge,clientID,receive_amount,receive_currency_id,recipientCell,recipientFirstName,recipientLastName,recipientID,refNumber,sendTypeData,createdBy,created_branch_id,transactionIndex,first_name,last_name,cell) VALUES ('${req.body.city_name}','${req.body.charge}','${req.body.clientID}','${req.body.receive_amount}','${req.body.receive_currency_id}','${req.body.recipientCell}','${req.body.recipientFirstName}','${req.body.recipientLastName}','${req.body.recipientID}','${req.body.refNumber}','${req.body.sendTypeData}','${req.body.created_by}','${req.body.branch_id}','${req.body.transactionIndex}','${req.body.first_name}','${req.body.last_name}','${req.body.sender_cell}')`;
				//console.log(query2);
				queries.push(query1) 
				queries.push(query2)  
				
				executeQueryContiSend(res, queries).catch(err =>{
					console.log(err)
				})
				
			}
			
			
		}
	 })
	
	
 });
 
 


app.post("/personalScan",verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			console.log(req.body);
		var request = require('request');
		var options = {
		  'method': 'POST',
		  'url': 'https://namescan.io/api/v3/person-scans/emerald',
		  'headers': {
			'api-key': 'EA56CF7AA3C44C1F830C4BF9DDE5706E',
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(req.body)

		};
		request(options, function (error, response) {
		  if (error) res.send(error);
		 // console.log(response.body);
		   res.send(JSON.parse(response.body))
		});

		}
	 })
	
	
});


app.post("/businessScan",verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var request = require('request');
			var options = {
			  'method': 'POST',
			  'url': 'https://namescan.io/api/v3/organisation-scans/emerald',
			  'headers': {
				'api-key': 'EA56CF7AA3C44C1F830C4BF9DDE5706E',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(req.body)


			};
			request(options, function (error, response) {
			  if (error) res.send(error);
			 // console.log(response.body);
			 
			  res.send(JSON.parse(response.body))
			});

	

		}
	 })
	
	
	
});



app.get("/sanctionsScan", (req,res) =>{
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://namescan.io/api/api/v3/lists/emerald/sanctions',
	  'headers': {
		'api-key': 'EA56CF7AA3C44C1F830C4BF9DDE5706E'
	  },
	};
	request(options, function (error, response) {
	  if (error) res.send(error);
	 // console.log(response.body);
	 
	  res.send(JSON.parse(response.body))
	});

	
	 
});




app.post("/postRBZ",verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
				var request = require('request');
				var options = {
				  'method': 'POST', 
				  'url': 'https://api.bdctrs.jugaad.co.zw/api/v1/inbound/add',
				  'headers': {
					'x-api-key': '$apr1$0xpiuy83$80wyJVeTrN/UhcZuPA7pX.',
					'Content-Type': 'application/json'
				  },
				  body: JSON.stringify(req.body)

				};
				//console.log(req.body);
				request(options, function (error, response) {
				  if (error) res.send(error);
				 // console.log(response.body);
				try {
					res.send(JSON.parse(response.body))
				} catch(e) {
					res.send({message:'Error in sending to RBZ'})
					//console.log('Error in sending to RBZ');
				}
				  
				});
		}
	 })
});


app.post("/postRBZUpdater",verifyToken, (req,res) =>{
	
	jwt.verify(req.token,'JesusChrist@@11', (err,authData) =>{
		if(err){
			res.json(err)
		}else{
			var query = `UPDATE worldRemitTransactions SET rbz = '${req.body.data}' WHERE reference = '${req.body.reference}'`;
			//console.log(query);
						executeQuery(res, query).catch(err =>{
						console.log(err)
			})	
		}
	 })
});
  
app.get('/getAdmin', async (req, res) => {
      
    
	var query = `SELECT (DATEDIFF(createdAt,updatedAt)) as leftDays FROM admin where DATE(createdAt) > DATE(updatedAt)`;
		executeQuery(res, query).catch(err =>{
			console.log(err)
		})
      
})





app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'public/img')))


app.get("/", (req,res) =>{
	res.send('index.html');
	
});





