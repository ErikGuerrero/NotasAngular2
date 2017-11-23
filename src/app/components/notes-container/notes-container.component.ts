import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../classes/note';
@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  notes:Note[];

  constructor(public noteService: NoteService){
    this.notes = noteService.getAll();
  }

  ngOnInit() {
  }

}
