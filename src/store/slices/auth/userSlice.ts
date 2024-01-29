import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SLICE_BASE_NAME } from './constants'

export type Permisstion = [{
    name: string,
}]

export type UserState = {
    avatar?: string
    userName?: string
    email?: string
    authority?: string[]
    pagePermission?: []
    subPagePermission?: []
}

const initialState: UserState = {
    avatar: '',
    userName: '',
    email: '',
    authority: [],
    pagePermission: [],
    subPagePermission: []
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.avatar = action.payload?.avatar
            state.email = action.payload?.email
            state.userName = action.payload?.userName
            state.authority = action.payload?.authority
            state.pagePermission = action.payload.pagePermission
            state.subPagePermission = action.payload.subPagePermission
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
