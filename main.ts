function hero () {
    mySprite = sprites.create(img`
. . . . 4 4 . . . . . 4 4 . . . 
. . . 4 4 4 4 . . 4 4 4 4 . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 f f f 4 4 f f f 4 4 4 . . 
. . 4 f 1 f 4 4 f 1 f 4 4 4 . . 
. . 4 f f f 4 4 f f f 4 4 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 4 f f f f f f 4 . . . . . 
. . 4 4 f f f f f f 4 . . . . 4 
. . 4 4 f f f f f f 4 4 . . . 4 
. . 4 4 4 4 4 4 4 4 4 4 4 . 4 4 
. . . f f f f f f f f f f f 4 . 
. . . 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . f f . . f f . . . . . . 
. . . . f f . . f f . . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(82, 49)
    controller.moveSprite(mySprite, 400, 400)
}
function score () {
    info.changeScoreBy(999999)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(999999)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function overlap () {
    game.over(false)
}
function projectile () {
    guy = sprites.createProjectileFromSide(img`
. . . . . . . 5 5 5 . . . . . . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . 
. . . . 1 1 f 1 1 1 f 1 1 . . . . . . . . . . . . . . . . . 
. . . . 1 1 1 f 1 f 1 1 1 . . . . . . . . . . . . . . . . . 
. . 1 1 1 1 2 1 1 1 2 1 1 1 1 . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 
. . . 1 1 1 1 f f f 1 1 1 1 . . . . . . . . . . . . . . . . 
. . . . 1 1 f 1 1 1 f 1 1 . . . . . . . . . . . . . . . . . 
. . . . 1 f 1 1 1 1 1 f 1 . . . . . . . . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . 7 7 7 5 5 5 5 5 5 5 7 7 7 . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . 7 7 . . . 7 7 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 0, 0)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . e . . . . . . . . 
. . . . . . e e e . . . . . . . 
. . . . . . e 1 e . . . . . . . 
. . . . . e 1 1 1 e . . . . . . 
. . . . . e . 1 . e . . . . . . 
. . . . . e 1 1 1 e . . . . . . 
. . . . e e . 1 . e e . . . . . 
. . . . e . 1 1 1 . e . . . . . 
. . . . e . . 1 . . e . . . . . 
. . . . e . 1 1 1 . e . . . . . 
. . . . e . . e . e e . . . . . 
. . . . e e 1 1 1 e . . . . . . 
. . . . . e e e e . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
}
let mySprite2: Sprite = null
let guy: Sprite = null
let mySprite: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
    projectile()
})
