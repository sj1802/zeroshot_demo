import { useEffect, useState } from "react";

export const usePreloadImages = (
    frameCount: number,
    pathPattern: (index: number) => string
) => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const promises = [];
            for (let i = 0; i < frameCount; i++) {
                promises.push(
                    new Promise<HTMLImageElement>((resolve, reject) => {
                        const img = new Image();
                        img.src = pathPattern(i);
                        img.onload = () => resolve(img);
                        img.onerror = () => reject(`Failed to load: ${img.src}`);
                    })
                );
            }

            try {
                const loadedImages = await Promise.all(promises);
                if (isMounted) {
                    setImages(loadedImages);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Image preload error:", error);
                if (isMounted) setLoading(false);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [frameCount, pathPattern]);

    return { images, loading };
};
