import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
  //SELECT * FROM animais = findMany
  return await prisma.animais.findMany({
    orderBy: { nome: "asc" },
  });
};

//crio a variavel findById e já exporto
export const findById = async (id) => {
  //SELECT * FROM animais WHERE id = 1;
  return await prisma.animais.findUnique({
    where: { id: Number(id) },
  });
};

export const create = async (data) => {
  return await prisma.animais.create({
    data: {
      nome: data.nome,
      idade: data.idade,
      especie: data.especie,
      dono: data.dono,
    
    },
  });
};

export const deleteAnimal = async (id) => {
    return await prisma.animais.delete({
        where: { id: Number (id)}
    })
}

export const update = async (id, data) => {
    return await prisma.animais.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.dono && { dono: data.dono }),
            ...(data.especie&& { especie: data.especie}),
            ...(data.idade && { idade: data.idade }),
        }
    })
}