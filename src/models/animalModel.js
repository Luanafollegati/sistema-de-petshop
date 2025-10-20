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
