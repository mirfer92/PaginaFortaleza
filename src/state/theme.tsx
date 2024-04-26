import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useGalleryTheme = create(
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