import * as AnimalModel from "./../models/animalModel.js";

export const listarTodos = async (req, res) => {
  try {
    const animais = await AnimalModel.findAll();

    if (!animais || animais.length === 0) {
      res.status(404).json({
        total: animais.length,
        message: "Não há animais na lista",
        animais,
      });
    }

    res.status(200).json({
      total: animais.length,
      message: "Lista de animais",
      animais,
    });
  } catch (error) {
    res.status(500).json({
      erros: "Erro interno de servidor",
      detalhes: error.message,
      status: 500,
    });
  }
};

export const listarUm = async (req, res) => {
  try {
    const id = req.params.id;
    const animal = await AnimalModel.findById(id);

    if (!animal) {
      return res.status(404).json({
        erro: "animal não encontrado",
        mensagem: "Verifique se o id do animal existe",
        id: id,
      });
    }

    res.status(200).json({
      mensagem: "animal encontrado",
      animal,
    });
  } catch (erro) {
    res.status(500).json({
      erro: "Erro ao buscar animal por id",
      detalhe: erro.message,
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, idade, especie, dono } = req.body;

    const dado = req.body;

    const camposObrigatorios = ["nome", "idade", "especie", "dono"];

    const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
      });
    }

    const novoAnimal = await AnimalModel.create(dado);

    res.status(201).json({
      mensagem: "animal criado com sucesso",
      animal: novoAnimal,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar animal",
      detalhes: error.message,
    });
  }
};

export const apagar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const animalExiste = await AnimalModel.findById(id);

    if (!animalExiste) {
      return res.status(404).json({
        erro: "Animal não encontrado com esse id",
        id: id,
      });
    }

    await AnimalModel.deleteAnimal(id);

    res.status(200).json({
      mensagem: "Animal removido com sucesso",
      animalRemovido: animalExiste,
    });
  } catch (error) {
    res.status(500).json({
      erro: "erro ao apagar Animal",
      detalhes: error.message,
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    const animalExiste = await AnimalModel.findById(id);

    if (!animalExiste) {
      return res.status(404).json({
        erro: "Animal não encontrado com esse id",
        id: id,
      });
    }

    const animalAtualizado = await AnimalModel.update(id, dados);

    res.status(200).json({
      mensagem: "Animal atualizado com sucesso",
      Animal: animalAtualizado,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao atualizar Animais",
      detalhes: error.message,
    });
  }
};
