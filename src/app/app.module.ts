import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NoteService } from './services/note.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteCreatorComponent } from './components/note-creator/note-creator.component';
import { NotesEditorComponent } from './components/notes-editor/notes-editor.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { Autosize } from 'ng-autosize';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NavbarComponent,
    NoteCreatorComponent,
    NotesEditorComponent,
    NotesContainerComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
