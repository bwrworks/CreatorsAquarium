"use client";

import React, { ReactNode } from "react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

interface OpenQuoteModalButtonProps {
  service?: string;
  defaultService?: string;
  tankType?: string;
  className?: string;
  children: ReactNode;
}

export function OpenQuoteModalButton({
  service,
  defaultService,
  tankType,
  className,
  children,
}: OpenQuoteModalButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={() => openQuoteModal(service || defaultService, tankType)}
      className={className}
    >
      {children}
    </button>
  );
}
