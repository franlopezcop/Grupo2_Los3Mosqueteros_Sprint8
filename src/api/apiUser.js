const { validationResult } = require("express-validator");
const path = require("path");

const {Users} = require('../database/models')
//const universalModel = require("../model/universalModel");
//const userModel = universalModel("users");

const userController = {

    mostrarUsers: async (req,res)=>{},
    mostrarUser: async (req,res)=>{},    
    
    // 2. Procesar registros
    processRegister: async (req, res) => {
        try {
            const { file } = req;
            
            const errores = validationResult(req);
            if(!errores.isEmpty()){
                if(file){
                    const filePath = path.join(__dirname, `../../public/images/users/${file.filename}`);
                    fs.unlinkSync(filePath);
                }
    
                console.log(req.body);
    
                delete req.body.password;
                delete req.body.checkpassword;
    
                console.log(req.body);
    
                return res.render("users/register", {
                    errors: errores.mapped(),
                    oldData: req.body,
                    title: "Register"
                
                })
            }
            
            const existeEmail = await Users.findOne({where:{'email' : req.body.email}});
    
            if(existeEmail){
                if(file){
                    const filePath = path.join(__dirname, `../../public/images/users/${file.filename}`);
                    fs.unlinkSync(filePath);
                }
    
                let error = {
                    email: {
                        msg: "Este email ya está registrado"
                    }
                }
                delete req.body.password;
                delete req.body.checkpassword;
    
                return res.render("users/register", {
                    errors: error,
                    oldData: req.body,
                    title: "Register"
                })
            }
    
            const newUsuario = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                checkpassword: bcrypt.hashSync(req.body.checkpassword, 10),
                image: file ? file.filename : ["default-user.svg"]
            };
    
            await Users.create({
                ...newUsuario
            });
    
            return res.redirect("login");
        } catch (error) {
            res.json(error.message);
        }

        
    },

    // 4. Procesar login
    processLogin: async(req, res) => {
        try {
            const errores = validationResult(req)
      
            if(!errores.isEmpty()){
                return res.render("users/login", {
                    errors: errores.mapped(),
                    oldData: req.body,
                    title: "Login"
                })
            }
            const usuarioRegistrado = await Users.findOne({where:{'email' : req.body.email}});
            console.log(usuarioRegistrado)
            if(!usuarioRegistrado){
                const error = {
                    email: {
                        msg: "Este email no se encuentra en nuestra base de datos"
                    }
                }
                return res.render("users/login", {
                    errors: error,
                    oldData: req.body,
                    title: "Login"
                })
            }
      
            const passwordCoincide = bcrypt.compareSync(req.body.password, usuarioRegistrado.password );
      
            if(!passwordCoincide){
                const error = {
                    password: {
                        msg: "Las credenciales son inválidas"
                    }
                }
                delete req.body.password;
                return res.render("users/login", {
                    errors: error,
                    oldData: req.body,
                    title: "Login"
                })
            }
      
            delete usuarioRegistrado.password;
            req.session.usuarioLogueado = usuarioRegistrado;
            
            if(req.body.rememberUser){
                res.cookie("userEmail", req.body.email, { maxAge: 60 * 1000 * 60 * 24 * 30 })
            }
            return res.redirect("/users/profile");
            
        } catch (error) {
            res.json(error.message);
        }
        
  },
}

module.exports = userController