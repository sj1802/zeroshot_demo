import { useEffect, useState, useCallback } from "react";

export const usePreloadImages = (
    frameCount: number,
    pathPattern: (index: number) => string
) => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);

    // Memoize pathPattern to avoid re-triggering
    const getPath = useCallback(pathPattern, []);

    useEffect(() => {
        let isMounted = true;
        const loadedImages: HTMLImageElement[] = new Array(frameCount).fill(null);
        let loadedCount = 0;

        // Load first few frames with high priority, rest in background
        const loadFrame = (i: number) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = getPath(i);
                img.onload = () => {
                    loadedImages[i] = img;
                    loadedCount++;

                    // Show as soon as first frame is ready
                    if (isMounted && loadedCount === 1) {
                        setImages([...loadedImages]);
                        setLoading(false);
                    }

                    // Update periodically as more frames load
                    if (isMounted && (loadedCount % 5 === 0 || loadedCount === frameCount)) {
                        setImages([...loadedImages]);
                    }

                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load: ${img.src}`);
                    resolve();
                };
            });
        };

        // Load first 5 frames immediately (critical path)
        const criticalCount = Math.min(5, frameCount);
        const criticalPromises = [];
        for (let i = 0; i < criticalCount; i++) {
            criticalPromises.push(loadFrame(i));
        }

        // Load remaining frames after critical ones
        Promise.all(criticalPromises).then(() => {
            const remaining = [];
            for (let i = criticalCount; i < frameCount; i++) {
                remaining.push(loadFrame(i));
            }
            return Promise.all(remaining);
        });

        return () => {
            isMounted = false;
        };
    }, [frameCount, getPath]);

    return { images, loading };
};
