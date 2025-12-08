'use client';

import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Button } from './ui/button';

interface CheckoutPopupButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description?: string;
}

export const CheckoutPopup = ({
  open,
  setOpen,
  title,
  description,
}: CheckoutPopupButtonProps) => {
  const router = useRouter();

  function handleContinueShoping() {
    setOpen(false);
    router.push('/products');
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-xl">
          <DialogHeader className="text-center">
            <CheckCircle2 className="size-12 text-black font-bold mx-auto mb-3" />
            <DialogTitle className="text-2xl font-bold text-foreground">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              {description}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              className="gradient-primary text-primary-foreground shadow-md"
              onClick={handleContinueShoping}
            >
              Continue Shopping
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};