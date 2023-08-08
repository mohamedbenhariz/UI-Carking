
const db = require('../config/db');

module.exports = {
    getAllDeclaration,
    getDeclarationById,
    getDeclarationByType,
    createDeclaration,
    updateDeclaration,
    deleteDeclaration
}

async function getAllDeclaration(){
    const declaration = await db.declaration.findAll();
    return declaration;
}

async function getDeclarationById(id){
    const declaration = await db.declaration.id;
    return declaration;
}

async function getDeclarationByType(typeDeclaration){
    const declaration = await db.declaration.findOne({where: {typeDeclaration}});
    return declaration;
}

async function createDeclaration(declaration){
    const createDeclaration = await db.declaration.create(declaration);
    return createDeclaration; 
}

async function updateDeclaration(id, declaration){
    const updateDeclaration = await db.declaration.update(declaration, {where: {id}});
    return updateDeclaration;
}

async function deleteDeclaration(id){
    const deleteDeclaration = await db.declaration.destroy({where: {id}});
    return deleteDeclaration;
}