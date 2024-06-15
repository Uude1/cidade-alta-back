const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    async  findAllUsers(req, res) {
        try {
            const users = await UserModel.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        const user = await UserModel.findByEmail(email);

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        const isPasswordValid = await UserModel.findPassword(email, password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        infos = await UserModel.findInfos(email,password)

        if(!infos){
            return res.status(401).json({ message: 'falta de informacoes' });
        }

        res.status(200).json(infos);
        
    },

    async findUser(req, res) {
        const { userId } = req.query;
        try {
            const user = await UserModel.findById(userId);
            const response = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    async update(req, res) {
        const { userId, name, email, password } = req.body;

        if(!userId){
            return res.status(404).json("Id não encontrado!");
        } else if (!name || !email || !password){
            return res.status(404).json("É necessário inserir todos os valores");
        }
    
        try {
            const user = await UserModel.findById(userId);
    
            if (!user) {
                return res.status(404).json("Usuário não encontrado!");
            }
    
            if (name) {
                user.name = name;
            }
    
            if (email) {
                user.email = email;
            }
    
            if (password) {
                user.password = password;
            }
    
            const updatedUser = await UserModel.update(userId, name, email, password);
    
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json(error);
            
        }
    }
    

}


