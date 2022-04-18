const paymentHandlers = {
  onSuccess: (options) => {
    fetch(`/api/order/${options.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
      .then(() => {})
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('something went wrong');
      });
  },
  onDismiss: () => {},
};

module.exports = paymentHandlers;
