const TaskModel = require('../model/TaskModel.js');
const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')

const current = new Date();

class TaskController {
    //cadastrar
    async create(req, res) {
        const task = new TaskModel(req.body);
        await task.save().then(response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    };

    //atualizar
    async update(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //selecionar
    async all(req, res) {
        await TaskModel.find({
            macaddress: {
                '$in': req.params.macaddress
            }
        })
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //selecionar por id
    async show(req, res) {
        await TaskModel.findById(req.params.id)
        .then(response => {
            if(response) {
                return res.status(200).json(response);
            }else {
                return res.status(404).json({error: 'tarefa não encontrada'});
            }
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //deletar
    async delete(req, res) {
        await TaskModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error)
        });
    };

    //atualizar status tarefa
    async done(req, res) {
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, {'done': req.params.done}, {new: true})
        .then(response => {
            return res.status(200).json(response)
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //atrasadas
    async late(req,  res) {
        await TaskModel.find({'when': {'$lt': current}, 'macaddress': {'$in': req.params.macaddress}})
        .sort('when')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //filtrar por dia atual
    async today(req, res) {
        await TaskModel.find({'macaddress': {'$in': req.params.macaddress}, 'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)}})
        .sort()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //fitrar semana
    async week(req, res) {
        await TaskModel.find({'macaddress': {'$in': req.params.macaddress}, 'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}})
        .sort()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //filtrar mes
    async month(req, res) {
        await TaskModel.find({'macaddress': {'$in': req.params.macaddress}, 'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}})
        .sort()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };

    //fitrar ano
    async year(req, res) {
        await TaskModel.find({'macaddress': {'$in': req.params.macaddress}, 'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}})
        .sort()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    };
};

module.exports = new TaskController();
