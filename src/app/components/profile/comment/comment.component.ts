import { Component, OnInit, Input } from '@angular/core';
import { MonoApiService } from '../../../services/monoapi.service';
import { Comentario } from '../../../models/comentario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  imports: [CommonModule],
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() monoid!: number;
  comments: Array<Comentario> = [];
  iconBaseURL: string =
    'https://ddragon-webp.lolmath.net/latest/img/profileicon/';

  constructor(private mono: MonoApiService) {}

  ngOnInit(): void {
    console.log('ngOnInit chamado');
    this.getComments();
  }

  autoResize($event: any): void {
    $event.target.style.height = 'auto';
    $event.target.style.height = $event.target.scrollHeight + 'px';
  }

  getComments(): void {
    console.log('Buscando comentários para monoid:', this.monoid);
    this.mono.getComments(this.monoid).subscribe({
      next: (data) => {
        console.log('Comentários recebidos:', data);
        this.comments = data;
        console.log(this.comments[0].messageDate);
        this.comments.forEach((comment, index) => {
          if (comment.autorID !== undefined) {
            this.getAuthor(index, comment.autorID);
          } else {
            console.warn(
              `Comentário na posição ${index} não tem autorID:`,
              comment
            );
          }
        });
      },
      error: (error) => {
        console.error('Erro ao buscar comentários:', error);
      },
    });
  }
  getAuthor(index: number, id: number): void {
    console.log(`Buscando dados do autor para autorID: ${id}`);
    this.mono.getAccountDataById(id).subscribe({
      next: (data) => {
        if (data && this.comments.length > 0) {
          this.comments[index].autorNick = data.nick;
          this.comments[index].autorIcon =
            this.iconBaseURL + data.iconID + '.webp';
        }
      },
      error: (error) => {
        console.error(
          `Erro ao buscar dados do autor para autorID ${id}:`,
          error
        );
      },
    });
  }
  postComment(comment: string): void {
    const data = {
      monochampId: this.monoid,
      autorID: 6,
      message: comment,
      Date: new Date(),
    };
    this.mono.postCreateComment(data).subscribe({
      next: (data) => {
        console.log('Comentário postado:', data);
        this.getComments();
      },
      error: (error) => {
        console.error('Erro ao postar comentário:', error);
      },
    });
    const commentInput = document.getElementById(
      'comentar'
    ) as HTMLInputElement;
    if (commentInput) {
      commentInput.value = '';
    }
  }
}
