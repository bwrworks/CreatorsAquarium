"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedService: string;
  selectedTankType: string;
  openQuoteModal: (service?: string, tankType?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("AQUARIUM MAINTENANCE");
  const [selectedTankType, setSelectedTankType] = useState("Freshwater");

  const openQuoteModal = (service?: string, tankType?: string) => {
    if (service) setSelectedService(service);
    if (tankType) setSelectedTankType(tankType);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        selectedService,
        selectedTankType,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
