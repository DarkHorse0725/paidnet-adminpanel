import { Transition } from "@headlessui/react";
import { FC } from "react";


interface NotficationProps {
  show: boolean;
  message: string;
  type: string;
}

const Notification: FC<NotficationProps> = ({ show, message, type }) => {
  return (
    <Transition
      appear
      as="div"
      show={show}
      className={`p-4 text-sm w-[200px] text-white shadow-lg rounded-2xl pointer-events-auto shadow-md shadow-gray-500 ${(type === 'success') && 'bg-green-500/80'} ${(type === 'danger') && 'bg-red-500/80'}`}
      enter="transition-all duration-150"
      enterFrom="opacity-0 translate-x-20"
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-150"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-20"
    >
      {message}
    </Transition>
  );
}

export default Notification;