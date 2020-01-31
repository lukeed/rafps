export interface Rafiki {
	play(): void;
	pause(): void;
}

export type Callback = (frame: number) => unknown;

export default function(callback: Callback, fps?: number): Rafiki;
