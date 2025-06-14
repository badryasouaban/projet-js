//Disposition des pages
let AjouterProuit = document.getElementById('AjouterProuit')
let AfficherProduit = document.getElementById('AfficherProduit')

function add(){
    AjouterProuit.style.display = 'block'
    AfficherProduit.style.display = 'none'
}
// ajouter Produit
let produits = []

function ajouterProduit() {
    let categorie = document.getElementById('Categorie').value
    let nom = document.getElementById('nom').value
    let date = document.getElementById('date').value
    let prix = document.getElementById('prix').value

    if (!nom || !date || !prix) {
        alert("Veuillez remplir tous les champs !")
        return
    }

    let imageParCategorie = {
        Proteins: "Products/Proteins.png",
        Greens: "Products/Greens.png",
        Meat: "Products/Meat.png",
        Juices: "Products/Juices.png",
        sportswear: "Products/sportswear.png"
    }

    let image = imageParCategorie[categorie] || "produit.png"

    produits.push({ categorie, nom, date, prix, image })

    afficherProduits();
    resetForm()
    AjouterProuit.style.display = 'none'
    AfficherProduit.style.display = 'block'
}

function afficherProduits() {
    let card = ''

    for (let i = 0; i < produits.length; i++) {
        let p = produits[i]

        card += `
        <div class="col-md-3 col-sm-6">
            <div class="card h-100 shadow-sm">
                <img src="${p.image}" class="card-img-top bg-light" alt="Image produit"
                    style="height: 150px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">${p.nom}</h5>
                    <p class="text-muted mb-1">${p.date}</p>
                    <p class="fw-bold mb-1"><span class="text-success fs-5">${p.prix}</span> DH</p>
                    <p class="text-secondary">${p.categorie}</p>
                    <div class="d-flex justify-content-center gap-2 mt-3">
                        <button class="btn btn-danger btn-sm" onclick="supprimerProduit(${i})">
                            <i class="bi bi-trash"></i> Supprimer
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="modifierProduit(${i})">
                            <i class="bi bi-pencil"></i> Modifier
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector('#AfficherProduitCards').innerHTML = card
}

function resetForm() {
    document.getElementById('Categorie').value = "Proteins"
    document.getElementById('nom').value = ''
    document.getElementById('date').value = ''
    document.getElementById('prix').value = ''

    AjouterProuit.style.display = 'none'
    AfficherProduit.style.display = 'block'
}

//Supprimer produit
function supprimerProduit(i) {
    produits.splice(i, 1)
    afficherProduits()
}

// Modifier produit
let indexModification = null;
function modifierProduit(i) {
    let p = produits[i]
    indexModification = i

    document.getElementById('Categorie').value = p.categorie
    document.getElementById('nom').value = p.nom
    document.getElementById('date').value = p.date
    document.getElementById('prix').value = p.prix

    AjouterProuit.style.display = 'block'
    AfficherProduit.style.display = 'none'
}
function ajouterProduit() {
    let categorie = document.getElementById('Categorie').value
    let nom = document.getElementById('nom').value
    let date = document.getElementById('date').value
    let prix = document.getElementById('prix').value

    if (nom === '' || date === '' || prix === '') {
        alert("Veuillez remplir tous les champs !")
        return
    }

    let imageParCategorie = {
        Proteins: "Products/Proteins.png",
        Greens: "Products/Greens.png",
        Meat: "Products/Meat.png",
        Juices: "Products/Juices.png",
        sportswear: "Products/sportswear.png"
    };

    let image = imageParCategorie[categorie] || "produit.png"

    if (indexModification !== null) {
        produits[indexModification] = { categorie, nom, date, prix, image }
        indexModification = null
    } else {
        produits.push({ categorie, nom, date, prix, image })
    }

    afficherProduits()
    resetForm()
}