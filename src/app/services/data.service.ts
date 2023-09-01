import { Injectable } from '@angular/core';

export interface Movie {
  "id": number,
  "_embedded": {
    "show": {
      "id": number,
      "url": string,
      "name": string,
      "language": string,
      "genres": string[],
      "image": {
        "medium": string,
        "original": string
      },
      "summary": string,
      "updated": number
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public movies: Movie[] = [
    {
      "id": 2624480,
      "_embedded": {
        "show": {
          "id": 70617,
          "url": "https://www.tvmaze.com/shows/70617/stand-by-me",
          "name": "Stand By Me",
          "language": "Chinese",
          "genres": [
            "Drama"
          ],
          "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/472/1181738.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/472/1181738.jpg"
          },
          "summary": "<p>In Shanghai in the year 1936, Huang Weijie, a member of the patriotic organization, happened to meet Feng Guanyu, a patriotic businessman, during his mission. The two were childhood friends who separated due to a misunderstanding. Feng Guanyu forced him to be his bodyguard. Although the two have constant conflicts, in the face of common adversity, the two with ideals of justice join hands and heroically devote themselves to the cause of patriotism.</p>",
          "updated": 1692259790
        }
      }
    }
  ];

  constructor() { }

  public getMovies(): Movie[] {
    return this.movies;
  }

  public async getFullMovies(): Promise<Movie[]> {
    const response = await fetch("http://api.tvmaze.com/schedule/full");
    const movies = await response.json();

    return movies;
  }

  public async getFilterMovies(value: string): Promise<Movie[]> {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
    const movies = await response.json();

    return movies.map((movie: any) => {
      return {
        "id": movie.show.id,
        "_embedded": {
          "show": {
            "id": movie.show.id,
            "url": movie.show.url,
            "name": movie.show.name,
            "language": movie.show.language,
            "genres": movie.show.genres,
            "image": movie.show.image,
            "summary": movie.show.summary,
            "updated": movie.show.updated
          }
        }
      }
    })
  }

  public getMessageById(id: number): Movie {
    return this.movies[id];
  }
}
