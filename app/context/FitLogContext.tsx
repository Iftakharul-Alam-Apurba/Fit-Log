"use client";

import { createContext, useContext, useState } from "react";
import { Iworkout } from "@/app/types/workout";

interface FitLogContextType {
  plan: Iworkout[];
  saved: Iworkout[];
  addToPlan: (workout: Iworkout) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: Iworkout) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({children}: {children: React.ReactNode;}) => {
  const [plan, setPlan] = useState<Iworkout[]>([]);
  const [saved, setSaved] = useState<Iworkout[]>([]);

  const addToPlan = (workout: Iworkout) => {
    setPlan((currentPlan) => [...currentPlan, workout]);
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );
  };

  const saveWorkout = (workout: Iworkout) => {
    setSaved((currentSaved) => [...currentSaved, workout]);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};