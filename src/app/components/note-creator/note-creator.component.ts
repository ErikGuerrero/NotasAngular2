import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../classes/note';
@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  note: Note = new Note();

  constructor(public noteService : NoteService) { }

  ngOnInit() {
  }

  createNote(){
    this.noteService.create(this.note);
    this.resetNote();
  }

  resetNote(){
    this.note = new Note();
  }

}
