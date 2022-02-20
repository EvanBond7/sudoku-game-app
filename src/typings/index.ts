export type Grid = [Row, Row, Row, Row, Row, Row, Row, Row, Row];

export type N = 0 | Number;
export type Number = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Row = [N, N, N, N, N, N, N, N, N];
export type Square = [SquareRow, SquareRow, SquareRow];
export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type BLOCK_COORD = [INDEX, INDEX];
export type SquareRow = [N, N, N];
