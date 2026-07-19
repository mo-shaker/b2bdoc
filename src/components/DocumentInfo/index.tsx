import type {ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export type DocumentStatus = 'Draft' | 'Review' | 'Approved' | 'Deprecated';

export interface DocumentInfoProps {
  category: string;
  audience: string | string[];
  status: DocumentStatus;
  version: string;
  owner: string;
  updated: string;
  readingTime: string;
}

const statusStyles: Record<DocumentStatus, string> = {
  Draft: styles.statusDraft,
  Review: styles.statusReview,
  Approved: styles.statusApproved,
  Deprecated: styles.statusDeprecated,
};

function formatAudience(audience: string | string[]): string {
  return Array.isArray(audience) ? audience.join(' • ') : audience;
}

function hasValue(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return typeof value === 'string' && value.trim().length > 0;
}

const statusLabels: Record<DocumentStatus, () => string> = {
  Draft: () =>
    translate({id: 'documentInfo.status.draft', message: 'Draft'}),
  Review: () =>
    translate({id: 'documentInfo.status.review', message: 'Review'}),
  Approved: () =>
    translate({id: 'documentInfo.status.approved', message: 'Approved'}),
  Deprecated: () =>
    translate({id: 'documentInfo.status.deprecated', message: 'Deprecated'}),
};

function StatusBadge({status}: {status: DocumentStatus}): ReactNode {
  return (
    <span className={clsx(styles.statusBadge, statusStyles[status])}>
      {statusLabels[status]()}
    </span>
  );
}

export default function DocumentInfo({
  category,
  audience,
  status,
  version,
  owner,
  updated,
  readingTime,
}: DocumentInfoProps): ReactNode {
  const fields: Array<{label: string; value: ReactNode}> = [];

  if (hasValue(category)) {
    fields.push({
      label: translate({id: 'documentInfo.category', message: 'Category'}),
      value: category,
    });
  }
  if (hasValue(audience)) {
    fields.push({
      label: translate({id: 'documentInfo.audience', message: 'Audience'}),
      value: formatAudience(audience),
    });
  }
  if (hasValue(status)) {
    fields.push({
      label: translate({id: 'documentInfo.status', message: 'Status'}),
      value: <StatusBadge status={status} />,
    });
  }
  if (hasValue(version)) {
    fields.push({
      label: translate({id: 'documentInfo.version', message: 'Version'}),
      value: version,
    });
  }
  if (hasValue(owner)) {
    fields.push({
      label: translate({id: 'documentInfo.owner', message: 'Owner'}),
      value: owner,
    });
  }
  if (hasValue(updated)) {
    fields.push({
      label: translate({
        id: 'documentInfo.lastUpdated',
        message: 'Last Updated',
      }),
      value: updated,
    });
  }
  if (hasValue(readingTime)) {
    fields.push({
      label: translate({
        id: 'documentInfo.readingTime',
        message: 'Reading Time',
      }),
      value: readingTime,
    });
  }

  if (fields.length === 0) {
    return null;
  }

  return (
    <section className={styles.card} aria-label="Document information">
      <Heading as="h2" className={styles.cardTitle}>
        {translate({
          id: 'documentInfo.title',
          message: 'Document Information',
        })}
      </Heading>
      <dl className={styles.fieldGrid}>
        {fields.map(({label, value}) => (
          <div key={label} className={styles.field}>
            <dt className={styles.fieldLabel}>{label}</dt>
            <dd className={styles.fieldValue}>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
