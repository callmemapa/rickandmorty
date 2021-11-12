import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Episode } from './../models/episode.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes() {
    return this.http.get<Episode[]>(`${environment.url_api}/episode`);
  }

  getEpisode(id: number) {
    return this.http.get<Episode>(`${environment.url_api}/episode/${id}`);
  }

}
