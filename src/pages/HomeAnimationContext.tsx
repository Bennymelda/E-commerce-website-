
import { createContext, useContext, type ReactNode } from "react";
import { useAnimationControls } from "framer-motion";

type AnimationControls = ReturnType<typeof useAnimationControls>;

const HomeAnimationContext = createContext<AnimationControls | null>(null);

export const HomeAnimationProvider = ({ children }: { children: ReactNode }) => {
  const bottomNavControls = useAnimationControls();

  return (
    <HomeAnimationContext.Provider value={bottomNavControls}>
      {children}
    </HomeAnimationContext.Provider>
  );
};

export const useHomeAnimation = () => {
  const context = useContext(HomeAnimationContext);

  if (!context) {
    throw new Error("useHomeAnimation must be used inside HomeAnimationProvider");
  }

  return context;
};
