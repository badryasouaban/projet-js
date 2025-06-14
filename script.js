//Disposition des pages
let Formulaire = document.getElementById('Formulaire')
let afficherTable = document.getElementById('afficherTable')
function add(){
    Formulaire.style.display = 'block'
    afficherTable.style.display = 'none'
}

//Ajouter Membre
let membres = []

function AjouterMembre() {
    let nom = document.getElementById('nom').value
    let prenom = document.getElementById('prenom').value
    let age = Number(document.getElementById('age').value)
    let telephone = document.getElementById('tel').value
    let date = new Date()

    if(nom === '' || prenom === '' || age === '' || telephone === ''){
        alert("Veuillez remplir tous les champs !")
        return
    }

    let obj = { nom, prenom, age, telephone, date}
    membres.push(obj)

    afficherMembre()
    resetForm()
}

function afficherMembre() {
    let text = ''
    for (let i = 0; i < membres.length; i++) {
        text += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${membres[i].prenom}</td>
                <td>${membres[i].nom}</td>
                <td><span class="badge rounded-pill ${membres[i].age >= 18 ? 'bg-success' : 'bg-danger'}">${membres[i].age} ans</span></td>
                <td>${membres[i].date.toLocaleString()}</td>
                <td>${membres[i].telephone}</td>
                <td>
                    <button class="btn btn-sm btn-danger me-1" onclick="Supprimer(${i})">Supprimer</button>
                    <button class="btn btn-sm btn-primary me-1" onclick="Modifier(${i})">Modifier</button>
                    <button class="btn btn-sm btn-success" onclick="Info(${i})">Information</button>
                </td>
            </tr>
        `
    }
    document.getElementById('content').innerHTML = text
}

function resetForm() {
    document.getElementById('nom').value = ''
    document.getElementById('prenom').value = ''
    document.getElementById('age').value = ''
    document.getElementById('tel').value = ''
    Formulaire.style.display = 'none'
    afficherTable.style.display = 'block'
}

//Supprimer membre
function Supprimer(i) {
    membres.splice(i, 1)
    afficherMembre()
}

// Afficher information
function Info(i) {
    let m = membres[i]
    alert(`Informations du membre :
    Prénom : ${m.prenom}
    Nom : ${m.nom}
    Âge : ${m.age}
    Téléphone : ${m.telephone}
    Date d'inscription : ${new Date(m.date).toLocaleString()}`)
}

// Modifier membre
let idxModify = null

function Modifier(i){
    let m = membres[i]
    idxModify = i
    document.getElementById('nom').value = m.nom
    document.getElementById('prenom').value = m.prenom
    document.getElementById('age').value = m.age
    document.getElementById('tel').value = m.telephone
    
    Formulaire.style.display = 'block'
    afficherTable.style.display = 'none'
}

function AjouterMembre() {
    let nom = document.getElementById('nom').value
    let prenom = document.getElementById('prenom').value
    let age = Number(document.getElementById('age').value)
    let telephone = document.getElementById('tel').value
    let date = new Date()

    if (nom === '' || prenom === '' || age === '' || telephone === '') {
        alert("Veuillez remplir tous les champs !")
        return
    }

    if (idxModify !== null) {
        membres[idxModify] = { nom, prenom, age, telephone, date: membres[idxModify].date }
        idxModify = null
    } else {
        membres.push({ nom, prenom, age, telephone, date })
    }

    afficherMembre()
    resetForm()
}
