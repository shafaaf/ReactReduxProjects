declare abstract class Tile {
    tileCoordinate: number;
    protected constructor(tileCoordinate: number);
    abstract isTileOccupied(): boolean;
}
