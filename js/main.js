// recupero il div dove inserirò la mia lista di dipendenti
const contenitoreLista = document.querySelector(".contenitore-team")
console.log(contenitoreLista)


// devo iniziare crenado un'array di oggetti

const ilNostroTeam = [
    {
        nome: "Wayne Barnett",
        ruoloAziendale: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    }, {
        nome: "Angela Caroll",
        ruoloAziendale: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    }, {
        nome: "Walter Gordon",
        ruoloAziendale: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    }, {
        nome: "Angela Lopez",
        ruoloAziendale: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    }, {
        nome: "Scott Estrada",
        ruoloAziendale: "Developer",
        foto: "scott-estrada-developer.jpg",
    }, {
        nome: "Barbara Ramos",
        ruoloAziendale: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]

console.log(ilNostroTeam)
console.log(ilNostroTeam[0].nome)
console.log(ilNostroTeam[0].cognome)
console.log(ilNostroTeam[0].ruoloAziendale)
console.log(ilNostroTeam[0].foto)


stampoIlteam()

function stampoIlteam(){
    for (let i = 0; i < ilNostroTeam.length; i++) {
        console.log(i)
        
        const contPricipale = document.createElement("div");
        contPricipale.classList.add("m-5")
        contenitoreLista.append(contPricipale);

        const contenitoreImaggini = document.createElement("img.src");
        contenitoreImaggini.innerHTML=ilNostroTeam[i].foto;
        contenitoreLista.append(contenitoreImaggini);

        const contenitoreNome= document.createElement("h1");
        contenitoreNome.innerHTML=ilNostroTeam[i].nome;
        contenitoreLista.append(contenitoreNome);

        const contenitoreRuolo = document.createElement("h4");
        contenitoreRuolo.innerHTML=ilNostroTeam[i].ruoloAziendale;
        contenitoreLista.append(contenitoreRuolo);
    }
}





// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e
//       con l’iniziale maiuscola.



