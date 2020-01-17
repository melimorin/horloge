import map from './map.js'

export default class Horloge {

    constructor() {

        this.horlogeFond = document.getElementById("horloge")
        this.horlogeFond.style.backgroundImage = "url('images/Luculia_Marlborough.png')";


        this.aiguille= document.querySelectorAll(".aiguille")
        console.log(this.aiguille)

        
        this.horlogeFond.addEventListener("click", () => {
            for (let uneAiguille of this.aiguille){
                uneAiguille.style.backgroundColor = this.couleurAlea()
            }
            // this.aiguille[0].style.backgroundColor = this.couleurAlea()
            // this.aiguille[1].style.backgroundColor = this.couleurAlea()
            // this.aiguille[2].style.backgroundColor = this.couleurAlea()

        })
        
        setInterval(() => {
            this.aiguille[0].style.backgroundColor = this.couleurAlea()
            let d = new Date();
            let s = d.getSeconds()
            let m = d.getMinutes()
            let h = d.getHours()
            
            let degreSeconde = map(s, 0, 59, 0, 360)
            let degreMinute = map(m, 0, 59, 0, 360)
            let degreHeure = map(h, 0, 12, 0, 360)
            // console.log(map(s, 0, 59, 0, 359))
            this.aiguille[2].style.transform = "rotate(" + degreSeconde + "deg)"
            this.aiguille[1].style.transform = "rotate(" + degreMinute + "deg)"
            this.aiguille[0].style.transform = "rotate(" + degreHeure + "deg)"

            // transform: rotate(20deg);
        },1000)
        
    }
        static load() {
            return new Promise(resolve => {
                window.addEventListener("load", () => {
                    resolve();
                });
            });
        }

    


    couleurAlea() {
        var h = Math.floor(Math.random() * 360);
        var s = Math.floor(Math.random() * 50 + 50);
        var l = Math.floor(Math.random() * 100);
        return "hsl("+h+","+s+"%,"+l+"%)";
    }
}

