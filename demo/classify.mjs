// The page's only job here: decide whether the exported decision is displayable.
// It never classifies an authorization outcome — Rust does that.
export const SCHEMA_VERSION = 2;
export const UNKNOWN_REASON =
  'decision metadata is missing or from an unsupported schema — republish decisions.json';

const OUTCOMES = new Set(['allow', 'conditional', 'deny']);

/**
 * @param {object|null|undefined} scenario one entry from decisions.json
 * @returns {{stale: boolean, outcome: string, reason: string}}
 */
export function classify(scenario) {
  if (!scenario || typeof scenario !== 'object') {
    return { stale: true, outcome: 'unknown', reason: UNKNOWN_REASON };
  }
  if (scenario.schema_version !== SCHEMA_VERSION) {
    return { stale: true, outcome: 'unknown', reason: UNKNOWN_REASON };
  }
  if (!OUTCOMES.has(scenario.outcome)) {
    return { stale: true, outcome: 'unknown', reason: UNKNOWN_REASON };
  }
  return { stale: false, outcome: scenario.outcome, reason: scenario.reason ?? '' };
}
