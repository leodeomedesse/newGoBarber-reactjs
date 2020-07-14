import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Conteiner } from './styles';

interface ToastConteinerProps {
  messages: ToastMessage[];
}

const ToastConteiner: React.FC<ToastConteinerProps> = ({ messages }) => {
  return (
    <Conteiner>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Conteiner>
  );
};

export default ToastConteiner;
