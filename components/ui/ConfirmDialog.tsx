import { Button } from "./button";

type DialogType = {
  show?: boolean;
  title?: string;
  message?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const ConfirmDialog = ({
  show = false,
  title,
  message,
  onCancel,
  onConfirm,
}: DialogType) => {
  return (
    show && (
      <div
        className="absolute top-0 left-0 z-100 w-screen h-screen md:bg-blue-100/30  
            flex justify-center items-center bg-blue-100/60"
        onClick={onCancel}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative md:w-1/4 w-3/4 md:mb-48 bg-white shadow-2xl rounded-md
                p-4 text-gray-800  -translate-y-1/4"
        >
          <div className="font-bold px-1.5 md:text-base text-sm text-gray-900 border-b border-b-gray-200 pb-1">
            <h1 className="w-full h-full">
              {title ? title : "Demande de Confirmation"}
            </h1>
          </div>
          <div className="p-1.5 md:text-base text-sm">
            <p>
              {message
                ? message
                : "Voulez-vous vraiment effectuer cette action ?"}
            </p>
          </div>
          <div className="flex gap-x-4 px-4 justify-center items-center pt-2">
            <Button
              onClick={onCancel}
              className="w-1/2 bg-transparent text-red-600 hover:bg-red-200 shadow-none"
            >
              Annuler
            </Button>
            <Button
              onClick={onConfirm}
              className="w-1/2 bg-blue-500 hover:bg-blue-400 "
            >
              Oui
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmDialog;
