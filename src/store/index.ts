import { create } from 'zustand'
import { Char } from '../utils/types';

interface State {
  answers: Char[];
  giveAnswer: (char: Char, questionId: number) => void;
  clearAll: () => void;
}

export const useStore = create<State>()((set) => ({
  answers: [],
  giveAnswer: (char, questionId) => set((state) => ({
    answers: [...state.answers.slice(0, questionId), char, ...state.answers.slice(questionId + 1)]
  })),
  clearAll: () => set({ answers: [] }),
}))