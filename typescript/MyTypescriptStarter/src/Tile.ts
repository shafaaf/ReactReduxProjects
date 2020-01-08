abstract class Tile {
    tileCoordinate:number;

    protected constructor(tileCoordinate: number) {
        this.tileCoordinate = tileCoordinate;
    }

    abstract isTileOccupied(): boolean;

}