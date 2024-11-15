export enum Color {
    red = 'red',
    blue = 'blue',
    green = 'green',
    black = 'black',
}

export interface Hero {
    name: string;
    canFly: boolean;
    color: Color
}