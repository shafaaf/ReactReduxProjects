declare enum Turn {
    HUMAN = 0,
    AI = 1
}
declare enum GameDone {
    HUMAN_WIN = 0,
    AI_WIN = 1,
    INCOMPLETE = 2,
    Draw = 3
}
declare function isGameComplete(): GameDone;
declare function init(): [string, string];
