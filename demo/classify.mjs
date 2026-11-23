// The page's only job here: decide whether an exported decision may be rendered, and what
// may be rendered. It never classifies an authorization outcome — Rust does that.
export const SCHEMA_VERSION = 2;
export const UNKNOWN_REASON =
  'decision metadata is missing or from an unsupported schema — republish decisions.json';

const OUTCOMES = new Set(['allow', 'conditional', 'deny']);

/**
 * Pure render plan for one exported scenario.
 *
 * `lit` is the diagram outcome to illuminate, or null when nothing may be lit.
 * `showEvidence`/`showFacts` gate the detail areas, so a stale export cannot show
 * data that the engine never vouched for.
 *
 * @param {object|null|undefined} scenario one entry from decisions.json
 * @returns {{stale: boolean, outcome: string, reason: string,
 *            lit: string|null, showEvidence: boolean, showFacts: boolean}}
 */
export function classify(scenario) {
  const refuse = {
    stale: true,
    outcome: 'unknown',
    reason: UNKNOWN_REASON,
    lit: null,
    showEvidence: false,
    showFacts: false,
  };

  if (!scenario || typeof scenario !== 'object') return refuse;
  if (scenario.schema_version !== SCHEMA_VERSION) return refuse;
  if (!OUTCOMES.has(scenario.outcome)) return refuse;

  return {
    stale: false,
    outcome: scenario.outcome,
    reason: scenario.reason ?? '',
    lit: scenario.outcome,
    showEvidence: true,
    showFacts: true,
  };
}
