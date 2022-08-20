import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type faceSizeType = { aspectRatio: number; cheekSize: number; jawSize: number };

interface FaceDataState {
  isDone: string;
  faceSize: faceSizeType;
  faceShape: string;
}

const initialState: FaceDataState = {
  isDone: "",
  faceSize: { aspectRatio: 0, cheekSize: 0, jawSize: 0 },
  faceShape: "",
};

export const faceDataSlice = createSlice({
  name: "faceData",
  initialState,
  reducers: {
    setIsDone: (state, action: PayloadAction<string>) => {
      state.isDone = action.payload;
    },
    setFaceSize: (state, action: PayloadAction<faceSizeType>) => {
      state.faceSize = action.payload;
    },
    setFaceShape: (state, action: PayloadAction<string>) => {
      state.faceShape = action.payload;
    },
    setReset: (state) => {
      state.isDone = "";
    },
  },
});

export const { setIsDone, setFaceSize, setFaceShape, setReset } =
  faceDataSlice.actions;

export const selectIsDone = (state: RootState) => state.faceData.isDone;
export const selectFaceShape = (state: RootState) => state.faceData.faceShape;
export const selectFaceSize = (state: RootState) => state.faceData.faceSize;

export default faceDataSlice.reducer;
