import React from 'react'
import { useInView } from 'react-intersection-observer'


export default function ImageWrapper({ src, alt, width, height, ...rest }) {
    const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' })
    return (
        <div ref={ref} style={{ width, height }} className={rest?.containerClassName} {...rest}>
            {inView ? (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    srcSet={`${src} 1x, ${src} 2x`}
                    style={{ width: '100%', height: 'auto' }}
                    className={rest.className}
                />
            ) : (
                <div aria-hidden="true" style={{ width: '100%', height }} />
            )}
        </div>
    )
}