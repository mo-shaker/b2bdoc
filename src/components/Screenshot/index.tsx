import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export interface ScreenshotProps {
  /** Path under `static/img`, e.g. `quick-start/04-scop-demand-form.png`. */
  src: string;
  /** Description of what the screen shows, for readers using a screen reader. */
  alt: string;
  /** Optional line printed under the image. */
  caption?: ReactNode;
  /**
   * Narrow frame for the driver surface, which is captured at phone or tablet
   * width and looks wrong stretched to the full content column.
   */
  device?: 'desktop' | 'mobile';
}

export default function Screenshot({
  src,
  alt,
  caption,
  device = 'desktop',
}: ScreenshotProps): ReactNode {
  // `useBaseUrl` keeps the path correct under the project's `/b2b.github.io/`
  // base URL, and identical for the English and Arabic builds — which is why the
  // images live in `static/` and are never duplicated per locale.
  const url = useBaseUrl(`/img/${src}`);
  return (
    <figure className={clsx(styles.figure, device === 'mobile' && styles.mobile)}>
      <img className={styles.image} src={url} alt={alt} loading="lazy" />
      {caption ? (
        <figcaption className={styles.caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
