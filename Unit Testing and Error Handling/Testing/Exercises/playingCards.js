function playingCards(face,suit){
    const faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    const suits = {
        S:'\u2660',
        H:'\u2665',
        D:'\u2666',
        C:'\u2663'
    }
    if(!faces.includes(face)){
        throw new Error ("Error")
    }
    if(!Object.keys(suits).includes(suit)){
        throw new Error ("Error")
    }
    return{
        face,
            suit : suits[suit],
        toString(){
            return this.face + this.suit
        }
    }
}
console.log(playingCards('1', 'H'))