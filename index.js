async function getMunicipios(Sigla){
    const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + Sigla + "/municipios"
    );

    const data = await response.json();
    return data.map((municipio) => municipio.nome); 

}
function UFselecionada(){
    
    let selection = document.getElementById("elemento").value;
    getMunicipios(selection).then(municipios =>{
        
        const listMun = document.getElementById("Unidades");
        const TrocadeLista = document.getElementsByTagName("li");

        while (TrocadeLista[0]) {
            listMun.removeChild(TrocadeLista[0]);
        }

        for (let i = 0; i < municipios.length; i++){
            const municipio = municipios[i];

            const li = document.createElement("li");
            li.innerHTML = municipio;
            listMun.appendChild(li);
        }
        
    });
}