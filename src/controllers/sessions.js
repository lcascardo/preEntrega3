import passport from "passport";
import config from "../config/config";

//Registrarse
const register = async () => {
    passport.authenticate("register", { failureRedirect: "failregister" }),
        async (req, res) => {
            return res.send({ status: "success", message: "User registered" });
        }
}

//Falla de registro
const failRegister = async (req, res) => {
    console.log("Fallo la estrategia");
    res.send({ status: 500, error: "Fallo registro" })
}

//Loguearse
const login = async () => {
    passport.authenticate('login', { failureRedirect: '/faillogin' }), async (req, res) => {
        const { email, password } = req.body;

        
        if (!req.user) return res.status(400).send({ status: "error", error: "Contraseña invalida" });

        req.session.user = {
            _id,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            age: req.user.age,
            email: req.user.email,
            rol: req.user.rol,
        }

        console.log(req.session.user);

        res.send({ status: "success", payload: req.user });
    }
}

//Falla login
const failLogin = async (req, res) => {
    console.log("Fallo la estrategia");
    res.status(500).send({ error: "Failed" })
}

//Autenticacion con github
const authGithub = () => passport.authenticate('github',{scope:['user:email']},async(req,res)=>{}) 

//Falla autenticacion con github
const failAuthGithub = () => {
    passport.authenticate('github', {failureRedirect:'/login'}),async(req,res)=>{
    req.session.user =req.user,
    res.redirect('/');
}
}

export default {
    register,
    failRegister,
    login,
    failLogin,
    authGithub,
    failAuthGithub
}