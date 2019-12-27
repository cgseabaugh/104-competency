class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }
    display = function(){
        document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} </p><p> Energy: ${this.energy} </p>`;
    }

    attack = function(opponent,item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        console.log(opponent);
        opponent.display();
        document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img}...</p?`;

        if(opponent.energy <= 0){
            document.getElementById(opponent.id).innerHTML="<p> D- E- D- DEAD!"
            document.getElementById("console").innerHTML=`<p> ${this.name} has knocked ${opponent.name} clean out! </p>`;
            document.getElementById("proatk").disabled = true;
            document.getElementById("antatk").disabled = true;
        }
    }
}

const character1= new Character("Toad",100,"c1");
const character2= new Character("Yoshi",100,"c2");

character1.display();
character2.display();

class Item{
    constructor(iName, iHitPoints, img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}

const item1 = new Item("Green Shell",5,'<img class="imgItem" src="img/Greenshell.png">');
const item2 = new Item("Red Shell", 10, '<img class="imgItem" src="img/Red_Shell.png">');
const item3 = new Item("Blue Shell", 20, '<img class="imgItem" src="img/Blue_shell.png">');

const items = [item1, item2, item3];

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

console.log(selectItem());

const restart = function (){
    document.getElementById("console").innerHTML=`<p> Rematch between ${character1.name} and ${character2.name}! </p>`
    character1.energy = 100;
    character1.display();
    character2.energy = 100;
    character2.display();
    document.getElementById("proatk").disabled = false;
    document.getElementById("antatk").disabled = false;
}