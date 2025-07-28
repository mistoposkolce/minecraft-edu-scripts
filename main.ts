player.onChat("turn", function (num1) {
    for (let index = 0; index < num1; index++) {
        agent.turn(LEFT_TURN)
    }
})
player.onChat("pass-labyrinth", function () {
    agent.move(FORWARD, 1)
    while (agent.detect(AgentDetection.Block, DOWN)) {
        while (agent.detect(AgentDetection.Block, RIGHT)) {
            agent.turn(LEFT_TURN)
        }
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("go", function (num1) {
    agent.move(FORWARD, num1)
})
