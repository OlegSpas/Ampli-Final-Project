interface IProps{
    article: {
        paragraphTitle?: any;
        paragraph: string;
    };
}

export default function BlogParagraph(props:IProps) {

  return (
    <>
        <h3 className='articleSubTitle'>{props.article.paragraphTitle}</h3>
        <p className='articleParagraph'>{props.article.paragraph}</p>
    </>
  )
}