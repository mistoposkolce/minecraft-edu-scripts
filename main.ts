player.onChat("turn", function (x) {
    for (let index = 0; index < x; index++) {
        agent.turn(LEFT_TURN)
    }
})
player.onChat("build-pyramid", function (x, y, z) {
    turnBuilderMyDirection()
    builder.teleportTo(player.position())
    builder.move(FORWARD, 3)
    builder.setOrigin()
    tmpX = x
    tmpY = 0
    tmpZ = z
    for (let index = 0; index < y; index++) {
        builder.mark()
        builder.move(FORWARD, tmpX)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpZ)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpX)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpZ)
        builder.tracePath(SANDSTONE)
        builder.turn(LEFT_TURN)
        if (tmpX > 2) {
            tmpX += -2
            builder.move(FORWARD, 1)
        }
        if (tmpY <= y) {
            tmpY += 1
            builder.move(UP, 1)
        }
        if (tmpZ > 2) {
            tmpZ += -2
            builder.move(LEFT, 1)
        }
    }
    builder.move(FORWARD, 1)
    builder.move(LEFT, 1)
    builder.place(SANDSTONE)
})
player.onChat("go", function (x) {
    agent.move(FORWARD, x)
})
player.onChat("build-air-pyramid", function (x, y, z) {
    turnBuilderMyDirection()
    builder.teleportTo(player.position())
    builder.move(FORWARD, 3)
    builder.setOrigin()
    tmpX = x
    tmpY = 0
    tmpZ = z
    for (let index = 0; index < y; index++) {
        builder.mark()
        builder.move(FORWARD, tmpX)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpZ)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpX)
        builder.turn(LEFT_TURN)
        builder.move(FORWARD, tmpZ)
        builder.tracePath(SANDSTONE)
        if (tmpX > 1) {
            tmpX += -1
            builder.move(FORWARD, 1)
        }
        if (tmpY <= y) {
            tmpY += 1
            builder.move(UP, 1)
        }
        if (tmpZ > 1) {
            tmpZ += -1
            builder.move(LEFT, 1)
        }
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
function turnBuilderMyDirection () {
    if (positions.toCompassDirection(player.getOrientation()) == WEST) {
        builder.face(WEST)
    } else if (positions.toCompassDirection(player.getOrientation()) == EAST) {
        builder.face(EAST)
    } else if (positions.toCompassDirection(player.getOrientation()) == NORTH) {
        builder.face(NORTH)
    } else if (positions.toCompassDirection(player.getOrientation()) == SOUTH) {
        builder.face(SOUTH)
    }
}
let tmpZ = 0
let tmpY = 0
let tmpX = 0
tmpX = 0
tmpY = 0
tmpZ = 0
