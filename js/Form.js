class Form{
    constructor(){

    }
    display(){
    var title=createElement('h2')
    title.html("Car Racing Game")
    title.position(350,50)
    var input=createInput("name")
    var button=createButton("play")
    var greeting=createElement('h3')
    input.position(350,200)
    button.position(400,250)
    button.mousePressed(function (){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("Hello "+ name)
        greeting.position(400,300)
        
        
    })
}
}