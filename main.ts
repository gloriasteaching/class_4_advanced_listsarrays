let number_list = [
1,
2,
3,
4,
5,
6,
7
]
let word_list = [
"meatball!",
"potato couch!",
"giant pear!",
"stinky cabbage",
"shoe steak!",
"poopy burger!",
"melancholic pug!"
]
forever(function () {
    game.splash("Hi!", "Do you know who you are?")
    game.splash("Let's find out!")
    game.splash("Chose 0-6")
    info.setScore(game.askForNumber("", 1))
    pause(1000)
    if (info.score() == 0) {
        game.splash("You are a " + word_list[0])
    } else if (info.score() == 1) {
        game.splash(word_list[1])
    } else if (info.score() == 2) {
        game.splash(word_list[2])
    } else if (info.score() == 3) {
        game.splash(word_list[3])
    } else if (info.score() == 4) {
        game.splash(word_list[4])
    } else if (info.score() == 5) {
        game.splash(word_list[5])
    } else if (info.score() == 6) {
        game.splash(word_list[6])
    }
})
