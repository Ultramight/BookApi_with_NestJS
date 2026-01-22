import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './fakedatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }
  // http://localhost:3000/books/getById/1
  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.findById(bookId);
  }
  /* Aggiunta di POST per aggiungere un Libro 
   - import di Post e Body 
   - inseirire libro su Postman con POST su http://localhost:3000/books 
   - inserire JSON */

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;
    return this.booksService.create(bookData);
  }
}
