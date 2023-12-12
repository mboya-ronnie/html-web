window.addEventListener('load',function(){
    //canvas setup
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width =500;
    canvas.height =500;

    class InputHandler  { 
        constructor(game){
            this.game =game;
            window.addEventListener('keydown',function(e){
                if(( (e.key==='ArrowUp')||
                      (e.key==='Arrowdown')
                )&&this.game.keys.indexof(e.key) === -1){
                    this.game.keys.push(e.key);
                }
                console.log(this.game.keys);
            });
            window.addEventHandler('keyup',function(e){
                if (this.game.keys.indexof(e.key)>-1){
                    this.game.keys.splice(this,game.keys.indexof(e.key), 1);
                }
                console.log(this.game.keys);
            });
        }

    }
    class Projectile{

    }
    class particle{

    }
    class player{
       constructor(game){ 
          this.game =game;
          this.idth =120;
          this.height = 190;
          this.x =20;
          this.y =100;
          this.speedY= 1;
       }
       update(){
        this.y +=this.speedY;
       }
       draw(context){
          context.fillRect(this.x, this.y, this.width, this.height);
       }

    }
    class Enemy{


    }
    class Layer{


    }
    class UI{


    }
    class Game{
        constructor(width, height){
            this.width=width;
            this.height=height;
            this.player=new player(this);
            this.input = new InputHandler(this);
            this.keys =[]
        }
         update(){
            this.player.update();
         }
         draw(context){
         this.player.draw(context);
    }
  }

  const Game =new Game(canvas.width,canvas.height);
  //animation loop
  function animate(){
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        Game.update();
        Game.draw(ctx);
        requestAnimationFrame(animate);
   }
   animate();
});