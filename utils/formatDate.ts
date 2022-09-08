const formatDate = (dateString: Date, type: string) => {
  if (type === 'long') {
    const formattedDate = new Date(dateString).toLocaleString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return formattedDate;
  }

  if (type === 'short') {
    const formattedDate = new Date(dateString).toLocaleString('en', {
      day: 'numeric',
      month: 'short',
    });

    return formattedDate;
  }
};

export default formatDate;
