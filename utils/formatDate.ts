const formatDate = (dateString: Date, type: string) => {
  if (type === 'long') {
    const formattedDate = new Date(dateString).toLocaleString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return formattedDate;
  }
};

export default formatDate;
