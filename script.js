var bouton_immeuble = document.getElementById('bouton_immeuble');
var bouton_market = document.getElementById('bouton_market')
var bouton_ferme = document.getElementById('bouton_ferme')
var immeuble = document.getElementById('immeuble');
var market = document.getElementById('market')
var ferme = document.getElementById('ferme')
var desc_immeuble = document.getElementById('desc_immeuble')
var desk_market = document.getElementById('desc_market')
var desk_ferme = document.getElementById('desc_ferme')
var txt_cat_immeuble = document.getElementById('txt_cat_immeuble')
var txt_cat_market = document.getElementById('txt_cat_market')
var txt_cat_ferme = document.getElementById('txt_cat_ferme')
var up_immeuble = document.getElementById("up_immeuble")
var up_market = document.getElementById("up_market")
var up_ferme = document.getElementById("up_ferme")
var pluie = document.getElementById("pluie")
var innondation = document.getElementById("innondation")
var meteore = document.getElementById("meteore")
var alert_innondation = document.getElementById('alert_innondation')
var alert_incendie = document.getElementById('alert_incendie')
var alert_meteore = document.getElementById("alert_meteore")
var fumee = document.getElementById("fumee")
var fumee_incendie = document.getElementById('fumee_incendie')
var fumee_meteore = document.getElementById('fumee_meteore')
var feu = document.getElementById("feu")
var cat_immeuble = 1
var cat_ferme = 1
var money_texte = document.getElementById("p_money")
var money = 200
var multiplicateur=0
var sound_money = new Audio('Sons/money3.wav');
var sound_pluie = new Audio('Sons/pluie.wav');
var sound_explosion = new Audio('Sons/explosion');
var sound_pompier = new Audio('Sons/pompier.wav')
var argent_base = 70 // ici 100
var alea_base = 5000 // ici 10000

var cat_market = 1



// Generateur de sous ------------------------------------------------------------------------------------
function Gain_money(){
   
    var gain_money = setInterval(() => {
        money += multiplicateur;
        money_texte.innerText = money
        verif_monaie_immeuble()
        verif_monaie_market()
        verif_monaie_ferme()
        
    }, argent_base);// ici 100
    
}


// Creation du fondu de UPGRADE
function up_fondu_immeuble(){
    up_immeuble.style.opacity = 1;
    up_immeuble.style.zIndex = 1; 
    var disparition = setInterval(() => {
        up_immeuble.style.opacity -= 0.1;
        if (up_immeuble.style.opacity == 0) {
            clearInterval(disparition)
        }
    }, 100);
    setTimeout(function(){up_immeuble.style.zIndex = -1;}, 1000);
}
function up_fondu_market(){
    up_market.style.opacity = 1;
    up_market.style.zIndex = 1; 
    var disparition = setInterval(() => {
        up_market.style.opacity -= 0.1;
        if (up_market.style.opacity == 0) {
            clearInterval(disparition)
        }
    }, 100);
    setTimeout(function(){up_market.style.zIndex = -1;}, 1000);
}

function up_fondu_ferme(){
    up_ferme.style.opacity = 1;
    up_ferme.style.zIndex = 1; 
    var disparition = setInterval(() => {
        up_ferme.style.opacity -= 0.1;
        if (up_ferme.style.opacity == 0) {
            clearInterval(disparition)
        }
    }, 100);
    setTimeout(function(){up_ferme.style.zIndex = -1;}, 1000);
}
// fonction pour upload le niveau du batiment
    function change_immeuble_cat(){
    txt_cat_immeuble.innerText = cat_immeuble
    }
    function change_market_cat(){
        txt_cat_market.innerText = cat_market
        }
    function change_ferme_cat(){
        txt_cat_ferme.innerText = cat_ferme
    }
//Ouvre/ferme le popin Immeuble
immeuble.onmouseover = function() {
    desc_immeuble.style.display='block'
}
immeuble.onmouseout = function(){
    desc_immeuble.style.display='none'
}
desc_immeuble.onmouseover = function() {
    desc_immeuble.style.display='block'
}
desc_immeuble.onmouseout = function(){
    desc_immeuble.style.display='none'
}
bouton_immeuble.onmouseover = function() {
    desc_immeuble.style.display='block'
}
//Ouvre/ferme le popin Market
market.onmouseover = function() {
    desc_market.style.display='block'
}
market.onmouseout = function(){
    desc_market.style.display='none'
}
desc_market.onmouseover = function() {
    desc_market.style.display='block'
}
desc_market.onmouseout = function(){
    desc_market.style.display='none'
}
bouton_market.onmouseover = function() {
    desc_market.style.display='block'
}
// Ouvre/ ferme le popin Ferme
ferme.onmouseover = function() {
    desc_ferme.style.display='block'
}
ferme.onmouseout = function(){
    desc_ferme.style.display='none'
}
desc_ferme.onmouseover = function() {
    desc_ferme.style.display='block'
}
desc_ferme.onmouseout = function(){
    desc_ferme.style.display='none'
}
bouton_ferme.onmouseover = function() {
    desc_ferme.style.display='block'
}
// =============================== ACHAT IMMEUBLE =============================================
// Possibilité d'achat Immeuble
function verif_monaie_immeuble(){
    

if ((cat_immeuble==1)&&(money>=200)){
    document.getElementById('bouton_immeuble').disabled = false;;
}
if ((cat_immeuble==2)&&(money>=800)){
    document.getElementById('bouton_immeuble').disabled = false;;
}
}
function etage_1_immeuble(){
    immeuble.className = "immeuble1";
    multiplicateur +=1
    document.getElementById('bouton_immeuble').disabled = true;;
    document.getElementById('prix_immeuble').innerText = 200;
    document.getElementById('texte_bouton_immeuble').innerText = "Investir ! ";

}
function etage_2_immeuble(){
    immeuble.className = "immeuble2";
    multiplicateur +=1
    document.getElementById('bouton_immeuble').disabled = true;;
    document.getElementById('prix_immeuble').innerText = 800;
    document.getElementById('texte_bouton_immeuble').innerText = "Investir ! ";

}
function etage_3_immeuble(){
    immeuble.className = "immeuble3";
    multiplicateur +=1
    document.getElementById('bouton_immeuble').disabled = true;;
    document.getElementById('bouton_immeuble').display='none';
    document.getElementById('prix_immeuble').innerText = "Level max ! ";
    document.getElementById('texte_bouton_immeuble').innerText = "Level max ! ";

}

//Le bouton acheter :
bouton_immeuble.addEventListener('click', function (){
    sound_money.play();
    cat_immeuble += 1;
    change_immeuble_cat()
    if (cat_immeuble ==2){
        money -= 200
        etage_2_immeuble()
        up_fondu_immeuble()

        }
        if (cat_immeuble ==3){
            money -= 800
            etage_3_immeuble()
            up_fondu_immeuble()
            }
})
// =================================================== FIN ACHAT IMMEUBLE ==============================
// =================================================== ACHAT MARKET ====================================
// Possibilité d'achat market
function verif_monaie_market(){
    

    if ((cat_market==1)&&(money>=200)){
        document.getElementById('bouton_market').disabled = false;;
    }
    if ((cat_market==2)&&(money>=800)){
        document.getElementById('bouton_market').disabled = false;;
    }
    }
    function etage_1_market(){
        market.className = "market1";
        multiplicateur +=1
        document.getElementById('bouton_market').disabled = true;;
        document.getElementById('prix_market').innerText = 200;
        document.getElementById('texte_bouton_market').innerText = "Investir ! ";
    
    }
    function etage_2_market(){
        market.className = "market2";
        multiplicateur +=1
        document.getElementById('bouton_market').disabled = true;;
        document.getElementById('prix_market').innerText = 800;
        document.getElementById('texte_bouton_market').innerText = "Investir ! ";
    
    }
    function etage_3_market(){
        market.className = "market3";
        multiplicateur +=1
        document.getElementById('bouton_market').disabled = true;;
        document.getElementById('prix_market').innerText = "Level max ! ";
        document.getElementById('texte_bouton_market').innerText = "Level max ! ";
    
    }
    
    //Le bouton acheter :
    bouton_market.addEventListener('click', function (){
        sound_money.play();
        cat_market += 1;
        change_market_cat()
        if (cat_market ==2){
            money -= 200
            etage_2_market()
            up_fondu_market()
    
            }
            if (cat_market ==3){
                money -= 800
                etage_3_market()
                up_fondu_market()
                }
    })
// ========================= FIN ACHAT MARKET ===========================================
// ========================= ACHAT FERME ===========================================
// Possibilité d'achat ferme
function verif_monaie_ferme(){
    

    if ((cat_ferme==1)&&(money>=200)){
        document.getElementById('bouton_ferme').disabled = false;;
    }
    if ((cat_ferme==2)&&(money>=800)){
        document.getElementById('bouton_ferme').disabled = false;;
    }
    }
    function etage_1_ferme(){
        ferme.className = "ferme1";
        multiplicateur +=1
        document.getElementById('bouton_ferme').disabled = true;;
        document.getElementById('prix_ferme').innerText = 200;
        document.getElementById('texte_bouton_ferme').innerText = "Investir ! ";
    
    }
    function etage_2_ferme(){
        ferme.className = "ferme2";
        multiplicateur +=1
        document.getElementById('bouton_ferme').disabled = true;;
        document.getElementById('prix_ferme').innerText = 800;
        document.getElementById('texte_bouton_ferme').innerText = "Investir ! ";
    
    }
    function etage_3_ferme(){
        ferme.className = "ferme3";
        multiplicateur +=1
        document.getElementById('bouton_ferme').disabled = true;;
        document.getElementById('prix_ferme').innerText = "Level max ! ";
        document.getElementById('texte_bouton_ferme').innerText = "Level max ! ";
    
    }
    
    //Le bouton acheter :
    bouton_ferme.addEventListener('click', function (){
        sound_money.play();
        cat_ferme += 1;
        change_ferme_cat()
        if (cat_ferme ==2){
            money -= 200
            etage_2_ferme()
            up_fondu_ferme()
    
            }
            if (cat_ferme ==3){
                money -= 800
                etage_3_ferme()
                up_fondu_ferme()
                }
    })
    // ========================================= FIN ACHAT FERME ===============================

//EVENEMENT Inondations ! ================================================================

function alea_inondation(){
    var alea = setInterval(() => {
        var nombre = Math.random()
        if((nombre > 0.9)&&(cat_immeuble!=1)){
            console.log("INNONDATION")
            visuel_pluie()

            if(cat_immeuble==2){
                multiplicateur -= 2
                etage_1_immeuble()
                cat_immeuble -= 1
            }
            if(cat_immeuble==3){
                multiplicateur -= 2
                etage_2_immeuble()
                cat_immeuble -= 1
            }
            change_immeuble_cat()
            
        }
       // console.log(nombre)
        
        
    }, alea_base); //ici 10 000
    
}
// Fonction visuel de la Pluie
function visuel_pluie(){
    pluie.style.opacity = 1;
    pluie.style.marginTop = 0; 
    sound_pluie.play();
    innondation.style.display='block'
    innondation.style.opacity=1;
    alert_innondation.style.display='block'
    alert_innondation.style.opacity=1 
    visuel_fumee()
    
    setTimeout(function(){   
    var disparition = setInterval(() => {
        pluie.style.opacity -= 0.02;
        innondation.style.opacity -= 0.02;
        alert_innondation.style.opacity -= 0.02;
        if (pluie.style.opacity <= 0) {
            pluie.style.zIndex = -2;
            clearInterval(disparition)
        }   
    }, 100);
    setTimeout(function(){innondation.style.display = 'none';}, 6000);
    setTimeout(function(){alert_innondation.style.display = 'none';}, 3000);
    ;}, 3000);   
}
//Fonction Visuel de la Fumée
function visuel_fumee(){
    fumee.style.opacity = 1;
    fumee.style.zIndex = -1;
    setTimeout(function(){
    var disparition = setInterval(() => {
        fumee.style.opacity -= 0.01;
        if (fumee.style.opacity < 0) {
            clearInterval(disparition)
        }
    }, 100);
    setTimeout(function(){fumee.style.zIndex = -1;}, 1000);
    fumee.style.zIndex = -1;}, 3000);
}
// FIN EVENEMENT INNONDATION =======================================================================================
// ========================================= EVENEMENT INCENDIE MARKET =============================================

function alea_incendie(){
    var alea = setInterval(() => {
        var nombre_incendie = Math.random()
        if((nombre_incendie > 0.8)&&(nombre_incendie < 0.9)&&(cat_market!=1)){
            console.log("INCENDIE")
    
            visuel_incendie()

            if(cat_market==2){
                setTimeout(function(){
                    multiplicateur -= 2
                    etage_1_market()
                    cat_market -= 1}, 4000);
                
            }
            if(cat_market==3){
                setTimeout(function(){
                    multiplicateur -= 2
                    etage_2_market()
                    cat_market -= 1}, 4000);
                
            }
            change_market_cat()
            
        }
//        console.log('Alea incendie :')
//        console.log(nombre_incendie)
//        console.log('Cat market :')
       console.log(cat_market)
//        console.log('Votre multicplicateur:')
//        console.log(multiplicateur)
        
        
    }, alea_base); //ici 10 000
    
}
function visuel_incendie(){
    alert_incendie.style.display='block'
    alert_incendie.style.opacity=1
    sound_pompier.play(); 
    feu.style.display = 'block'
    feu.style.opacity = 1;
    setTimeout(function(){
        var texte_up = setInterval(() => {
            alert_incendie.style.opacity -= 0.02;
            if (alert_incendie.style.opacity <= 0) {
                clearInterval(texte_up)
            }
        }, 100);   
        var disparition = setInterval(() => {
            feu.style.opacity -= 0.02;
            if (feu.style.opacity <= 0) {
                feu.style.zIndex = -2;
                clearInterval(disparition)
            }   
        }, 100);
        setTimeout(function(){feu.style.display = 'none';}, 6000);
        setTimeout(function(){alert_incendie.style.display = 'none';}, 6000);
        ;}, 3000);   

    visuel_fumee_incendie()
}
function visuel_fumee_incendie(){
    fumee_incendie.style.opacity = 1;
    fumee_incendie.style.display = 'block'
    fumee_incendie.style.zIndex = -1;
    setTimeout(function(){
    var disparition = setInterval(() => {
        fumee_incendie.style.opacity -= 0.01;
        if (fumee_incendie.style.opacity < 0) {
            clearInterval(disparition)
        }
    }, 100);
    setTimeout(function(){fumee_incendie.style.zIndex = -1;}, 1000);
    fumee_incendie.style.zIndex = -1;}, 3000);
    setTimeout(function(){fumee_incendie.style.display = 'none';}, 10000);
}
// ===================================== FIN INCENDIE MARKET =======================================================
// ===================================== METEOR FERME ==============================================================
function alea_meteore(){
    var alea = setInterval(() => {
        var nombre_meteore = Math.random()
        //console.log('nombre_meteore : ')
        //console.log(nombre_meteore)
        //console.log('cat_ferme : ')
        //console.log(cat_ferme)
        if(cat_ferme<1){
            cat_ferme=1
        }
        if((nombre_meteore > 0.7)&&(nombre_meteore < 0.8)&&(cat_ferme!=1)){
            console.log("Meteore !")
            visuel_meteore()
            setTimeout(function(){
            if(cat_ferme==2){
                multiplicateur -= 2
                etage_1_ferme()
                cat_ferme -= 1
            }
            if(cat_ferme==3){
                multiplicateur -= 2
                etage_2_ferme()
                cat_ferme -= 1
            }
            change_ferme_cat()
        }, 2000)
        }
       // console.log(nombre)
        
        
    }, alea_base); //ici 10 000
    
}
// Fonction visuel du meteore
function visuel_meteore(){
//lancer l'animation meteore ici
    alert_meteore.style.display='block'
    alert_meteore.style.opacity=1 
    meteore.style.display = 'block';
    setTimeout(function(){
        var texte_up = setInterval(() => {
            alert_meteore.style.opacity -= 0.02;
            if (alert_meteore.style.opacity <= 0) {
                clearInterval(texte_up)
            }
        }, 100); ;}, 2000); 
    
    meteore.style.animationName = 'meteore';
    setTimeout(function(){visuel_fumee_meteore()}, 2000);
    setTimeout(function(){sound_explosion.play();}, 1700);
    
    setTimeout(function(){meteore.style.display = 'none';}, 6000);
    setTimeout(function(){alert_meteore.style.display = 'none';}, 8000);
    setTimeout(function(){meteore.style.animationName = 'aaa';;}, 6000);
    
      
}
//Fonction Visuel de la Fumée
function visuel_fumee_meteore(){
    fumee_meteore.style.opacity = 1;
    fumee_meteore.style.zIndex = -1;
    fumee_meteore.style.display = 'block';
    setTimeout(function(){
    var disparition = setInterval(() => {
        fumee_meteore.style.opacity -= 0.01;
        if (fumee_meteore.style.opacity < 0) {
            fumee_meteore.style.display = 'none';
            clearInterval(disparition)
            
        }
    }, 100);
    setTimeout(function(){fumee_meteore.style.zIndex = -1;}, 1000);
    fumee_meteore.style.zIndex = -1;}, 3000);
}
//============================== FIN METEORE FERME ====================================

Gain_money()
alea_inondation()
alea_incendie()
alea_meteore()