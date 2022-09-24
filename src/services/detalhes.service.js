import Api from "./api";

export async function getDetalhesRestaurante(id) {
  try {
    const detalhes = await Api.get(`/detalhes/${id}.json`);
    return detalhes.data;
  } catch (err) {
    throw err;
  }
};
