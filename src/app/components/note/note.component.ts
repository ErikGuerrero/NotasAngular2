import { Component, OnInit, Input,  } from '@angular/core';
import { Note } from '../../classes/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Input() index: number;

  constructor(public noteService: NoteService) {
  }

  ngOnInit() {
  }

  deleteNote(){
    this.noteService.delete(this.index);
  }

  updateNote(index: number, text: string){
    this.note.text = text;
    this.noteService.update(index, this.note);
  }

}
