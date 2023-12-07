export enum IndexState {
  IndexStateNone = 'IndexStateNone',
  Unissued = 'Unissued',
  InProgress = 'InProgress',
  Finished = 'Finished',
  Failed = 'Failed',

  // only used by UI
  Default = '',
  Delete = 'Delete',
}
