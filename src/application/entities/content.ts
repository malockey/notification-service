export class Content {
  private readonly content: string;

  get value() {
    return this.content;
  }

  private validateContentLenght(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLenght(content);

    if (!isContentLengthValid) {
      throw new Error('Content is invalid');
    }

    this.content = content;
  }
}
