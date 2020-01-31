export interface RAFPS {
	play(): void;
	pause(): void;
}

export type Callback = (frame: number) => unknown;

export default function(callback: Callback, fps?: number): RAFPS;
