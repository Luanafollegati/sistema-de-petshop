import * as AnimalModel from "./../models/animalModel.js";

export const listarTodos = async (req, res) => {
    try {
        const animais = await AnimalModel.findAll();

if(!animais || animais.length === 0) {
    res.status(404).json({
        total:animais.length,
        message: 'Não há animais na lista',
        animais
    })
}

res.status(200). json({
    total: animais.length,
    message: 'Lista de animais',
    animais
 })

    } catch (error) {
        res.status(500).json({
            erros: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const animal = await AnimalModel.findById(id);

        if(!animal) {
            return res.status(404).json({
                erro: 'animal não encontrado',
                mensagem: 'Verifique se o id do animal existe',
                id: id
            })
        }

        res.status(200).json({
            mensagem: 'animal encontrado',
            animal
        })
    } catch (erro) {
        res.status(500).json ({
            erro: 'Erro ao buscar animal por id',
            detalhe: erro.message
        })
    }
}
