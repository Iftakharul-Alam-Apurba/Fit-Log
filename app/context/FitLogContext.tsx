"use client";

import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Iworkout } from "@/app/types/workout";

interface FitLogContextType {
  plan: Iworkout[];
  saved: Iworkout[];
  completed: number[];
  addToPlan: (workout: Iworkout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  saveWorkout: (workout: Iworkout) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<Iworkout[]>([]);
  const [saved, setSaved] = useState<Iworkout[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);

  const addToPlan = (workout: Iworkout) => {
    if (plan.length >= 5) {
      toast.error("Your plan is full. Maximum 5 workouts.");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.info("Workout is already in your plan.");
      return;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);

    toast.success("Workout added to your plan!");
  };

  const removeFromPlan = (id: number) => {
    const exists = plan.some((workout) => workout.id === id);

    if (!exists) {
      return;
    }

    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );

    toast.success("Workout removed from your plan.");
  };

  const removeFromSaved = (id: number) => {
    const exists = saved.some((workout) => workout.id === id);

    if (!exists) {
      return;
    }

    setSaved((currentSaved) =>
      currentSaved.filter((workout) => workout.id !== id)
    );

    toast.success("Workout removed from saved.");
  };

  const markAsDone = (id: number) => {
    if (completed.includes(id)) {
      return;
    }

    setCompleted((currentCompleted) => [...currentCompleted, id]);

    toast.success("Workout marked as done!");
  };

  const saveWorkout = (workout: Iworkout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("Workout is already saved.");
      return;
    }

    setSaved((currentSaved) => [...currentSaved, workout]);

    toast.success("Workout saved for later!");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completed,
        addToPlan,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        saveWorkout,
      }}
    >
      {children}

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
      />
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