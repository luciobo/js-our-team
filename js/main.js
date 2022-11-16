// recupero il div dove inserirò la mia lista di dipendenti
const contenitoreLista = document.querySelector(".contenitore-team")
console.log(contenitoreLista)


// devo iniziare crenado un'array di oggetti

const ilNostroTeam = [
    {
        nome: "Wayne",
        cognome: "Barnett",
        ruoloAziendale: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    }, {
        nome: "Angela",
        cognome: "Caroll",
        ruoloAziendale: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    }, {
        nome: "Walter",
        cognome: "Gordon",
        ruoloAziendale: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    }, {
        nome: "Angela",
        cognome: "Lopez",
        ruoloAziendale: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    }, {
        nome: "Scott",
        cognome: "Estrada",
        ruoloAziendale: "Developer",
        foto: "scott-estrada-developer.jpg",
    }, {
        nome: "Barbara",
        cognome: "Ramos",
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
        
    }
}







// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg