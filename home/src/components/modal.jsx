function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-lg p-8 w-[400px] relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl"
        >
          ×
        </button>

        {children}

      </div>

    </div>
  );
}

export default Modal;