import { Injectable } from '@angular/core';
import { Note } from '../classes/note'

const storeItemName: string = "notes";

@Injectable()
export class NoteService {

  private notes:Note[] = [];

  constructor() {
    this.load();
  }

  create(note : Note){
    this.notes.push(note);
    this.save();
  }

  update(id: number, note: Note){
    this.notes[id] = note;
    this.save();
  }

  delete(id: number){
    this.remove(id)
    this.save();
  }

  getAll(): Note[]{
    return this.notes;
  }

  getById(id : number){
    return this.notes[id];
  }

  private load(){
    let storedNote = localStorage.getItem(storeItemName);
    if(storedNote){
      this.notes = JSON.parse(storedNote);
    }
  }

  private save(){
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }

  private remove(id : number){
    this.notes.splice(id, 1)
  }

}
