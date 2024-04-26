import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
    theme: string
    setGrid: () => void
    setCarousel: () => void
}

const useGalleryTheme = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'grid',
            setGrid: () => set({ theme: 'grid'}),
            setCarousel: () => set({ theme: 'carousel'}),
        }),
        {name: 'galleryTheme'}
    )
);

export default useGalleryTheme;