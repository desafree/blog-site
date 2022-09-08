interface post {
  img: {
    preview: string;
    primary: string;
    secondary: string;
  };
  text: {
    title: {
      primary: string;
      secondary: string;
    };
    paragraph: {
      preview: string;
      first: string;
      second: string;
    };
  };
  category: string;
  slug: string;
  created: Date;
  _id: object;
  featured?: boolean;
}

export default post;
