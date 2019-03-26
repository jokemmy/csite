

export const isServer = () => {
  return Object.prototype.toString.call( global.process ) === '[object process]';
};
