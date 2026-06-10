const curiosidadeBtn = document.getElementById('curiosidadeBtn');
const curiosidade = document.getElementById('curiosidade');

const curiosidades = [
    "Plantio direto reduz a erosão do solo e aumenta sua fertilidade.",
    "O uso de drones ajuda a monitorar plantações sem desperdício de recursos.",
    "A rotação de culturas melhora a biodiversidade e evita o esgotamento do solo.",
    "Agricultura orgânica reduz o uso de pesticidas químicos e protege a saúde do solo.",
    "Sistemas agroflorestais aumentam a biodiversidade e sequestram carbono do ar."
];

curiosidadeBtn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * curiosidades.length);
    curiosidade.textContent = curiosidades[index];
});