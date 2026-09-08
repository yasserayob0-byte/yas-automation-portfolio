import { useCallback, useState, type ImgHTMLAttributes } from 'react';

/** A cached or newly loaded image reveals without changing its box or zoom transform. */
export default function RevealImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <ImageState key={props.src} {...props} />;
}

function ImageState({ className = '', onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const checkCachedImage = useCallback((image: HTMLImageElement | null) => {
    if (image?.complete) setStatus(image.naturalWidth ? 'ready' : 'error');
  }, []);
  return <img {...props} className={`reveal-image ${className}`} data-image-state={status}
    ref={checkCachedImage}
    onLoad={event => { setStatus('ready'); onLoad?.(event); }}
    onError={event => { setStatus('error'); onError?.(event); }} />;
}
