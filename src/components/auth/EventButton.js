import React from 'react';

const EventButton = ({ content, event }) => {
  return (
    <button type="button" onClick={event}>
      {content}
    </button>
  );
};
export default React.memo(EventButton);
