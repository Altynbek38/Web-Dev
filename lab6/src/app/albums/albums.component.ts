import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{
  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumService: AlbumsService){
  }

  ngOnInit() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    } )
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((album) => album.id != id);
    this.albumService.deleteAlbum(id).subscribe(() => console.log("deleted"));
  }

  ngOnDestroy() {
    
  }

}
