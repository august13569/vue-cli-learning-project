import emitter from '@/methods/emitter';

export default function (respsonse, title = '更新') {
  if (respsonse.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    const message = typeof respsonse.data.message === 'string'
      ? [respsonse.data.message] : respsonse.data.message;
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、'),
    });
  }
}
