export const toggleModal = (ref: React.RefObject<HTMLDialogElement>) => {
  if (!ref.current) return;

  return ref.current.hasAttribute('open')
    ? ref.current.close()
    : ref.current.showModal();
};