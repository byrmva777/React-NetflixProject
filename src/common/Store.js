import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const themeStore = create(
    persist(
        set => (
            {
                theme: "light",
                accessToken: "",
                refreshToken: "",
                toggle: () => set((prevState) => ({...prevState, theme: prevState.theme === "light" ? "dark" : "light" })),
                addAccessToken: (token) => set((prevState) => ({...prevState, accessToken: token })),
                addRefreshToken: (token) => set((prevState) => ({...prevState, refreshToken: token })),
            }
        )
    )
)

export default themeStore;  
