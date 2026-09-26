"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Iworkout } from "@/app/types/workout";

interface FitLogState {
  plan: Iworkout[];
  saved: Iworkout[];
  completed: number[];
}

interface FitLogContextType extends FitLogState {
  addToPlan: (workout: Iworkout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  saveWorkout: (workout: Iworkout) => void;
}

const STORAGE_KEY = "fitlog-data";

const emptyState: FitLogState = {
  plan: [],
  saved: [],
  completed: [],
};

let state: FitLogState = emptyState;

const listeners = new Set<() => void>();

const getSnapshot = () => state;

const getServerSnapshot = () => emptyState;

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

// Load saved data from localStorage
if (typeof window !== "undefined") {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      state = JSON.parse(storedData);
    }
  } catch {
    state = emptyState;
  }
}

const updateState = (newState: FitLogState) => {
  state = newState;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  listeners.forEach((listener) => listener());
};

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export const FitLogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const currentState = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const addToPlan = (workout: Iworkout) => {
    if (state.plan.length >= 5) {
      toast.error("Your plan is full. Maximum 5 workouts.");
      return;
    }

    if (state.plan.some((item) => item.id === workout.id)) {
      toast.info("Workout is already in your plan.");
      return;
    }

    updateState({
      ...state,
      plan: [...state.plan, workout],
    });

    toast.success("Workout added to your plan!");
  };

  const removeFromPlan = (id: number) => {
    if (!state.plan.some((workout) => workout.id === id)) {
      return;
    }

    updateState({
      ...state,
      plan: state.plan.filter((workout) => workout.id !== id),
    });

    toast.success("Workout removed from your plan.");
  };

  const removeFromSaved = (id: number) => {
    if (!state.saved.some((workout) => workout.id === id)) {
      return;
    }

    updateState({
      ...state,
      saved: state.saved.filter((workout) => workout.id !== id),
    });

    toast.success("Workout removed from saved.");
  };

  const markAsDone = (id: number) => {
    if (state.completed.includes(id)) {
      return;
    }

    updateState({
      ...state,
      completed: [...state.completed, id],
    });

    toast.success("Workout marked as done!");
  };

  const saveWorkout = (workout: Iworkout) => {
    if (state.saved.some((item) => item.id === workout.id)) {
      toast.info("Workout is already saved.");
      return;
    }

    updateState({
      ...state,
      saved: [...state.saved, workout],
    });

    toast.success("Workout saved for later!");
  };

  return (
    <FitLogContext.Provider
      value={{
        ...currentState,
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
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
};