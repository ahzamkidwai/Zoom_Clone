import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          {image && (
            <div>
              <Image src={image} width={72} height={72} alt="iamge" />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 py-4 rounded-xl"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                height={13}
                width={13}
                alt="Button Icon"
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
