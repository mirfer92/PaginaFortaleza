import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useGalleryTheme = create(
    persist(
        (set) => ({
            theme: 'classic',
            setClassic: () => set({ theme: 'classic'}),
            setCarousel: () => set({ theme: 'carousel'}),
        }),
        {name: 'galleryTheme'}
    )
);

export default useGalleryTheme;