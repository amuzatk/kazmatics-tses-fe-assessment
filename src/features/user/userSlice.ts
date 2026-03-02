//src/features/user/userSlice.ts
import { User } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    isAuthenticated: false,
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    },
    login: (state) => {
      if (state.user) {
        state.user.isAuthenticated = true
      }
    },
    logout: (state) => {
      if (state.user) {
        state.user.isAuthenticated = false
      }
    },
  },
})

export const { setUser, clearUser, login, logout } = userSlice.actions
export default userSlice.reducer