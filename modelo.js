var bd = require('./bd/bd_utils.js');
let repositorio = require('./repositorio/repositorioBD.js');


function reconfig_repositorio(novoRepositorio) {
  repositorio = novoRepositorio;
}

async function listar_perguntas() {
  const perguntas = await repositorio.listarPerguntas();
  return perguntas;
}

async function cadastrar_pergunta(texto) {
  await repositorio.adicionarPergunta(texto, 1); // 1 = id do usuário fixo por enquanto
}

async function cadastrar_resposta(id_pergunta, texto) {
  await repositorio.adicionarResposta(id_pergunta, texto);
}

async function get_pergunta(id) {
  return await repositorio.getPergunta(id);
}

async function get_respostas(id) {
  return await repositorio.getRespostas(id);
}

async function get_num_respostas(id) {
  return await repositorio.getNumeroDeRespostas(id);
}

exports.reconfig_repositorio = reconfig_repositorio;
exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;
