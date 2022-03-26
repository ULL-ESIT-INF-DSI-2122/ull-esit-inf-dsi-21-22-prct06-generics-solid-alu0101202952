import { Streamable } from "./streamable";

export abstract class BasicStreamableCollection<T> implements Streamable<T>{
    constructor(protected videos: T[]){}

    public addVideo(video: T): void {
        for(let i: number = 0; i < this.videos.length; i++) {
            this.videos.push(video);
        }
    }

    public getNumberOfVideos(){
        return this.videos.length;
    }

    abstract getVideoByName(nombre: string): T[];
    abstract getVideoByYear(anio: number): T[];
    abstract getVideoByAuthor(autor: string): T[];
}

