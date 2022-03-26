/**
 * EJERCICIO 2: DSIflix
 * @interface Streamable<T> genérica del tipo de vídeos de la plataforma
 * @method addVideo() añade vídeos a la colección
 * @method getVideoByName() busca el vídeo en la colección por el nombre
 * @method getVideoByYear() busca el vídeo en la colección por el año
 * @method getNumberOfVideos() coge el número de vídeos de la colección
 */
export interface Streamable<T>{
    addVideo(video: T): void;
    getVideoByName(nombre: string): T[];
    getVideoByYear(anio: number): T[];
    getNumberOfVideos(): number;
}