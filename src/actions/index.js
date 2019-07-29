export const MessageActions = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  REMOVE_MESSAGE: 'REMOVE_MESSAGE',
}

export const addMessage = (message) => ({
  type: MessageActions.ADD_MESSAGE,
  message
})

export const removeMessage = (message) => ({
  type: MessageActions.REMOVE_MESSAGE,
  message
})

export const LogActions = {
  ADD_LOG: 'ADD_LOG',
  REMOVE_LOG: 'REMOVE_LOG'
}

export const addLog = (log) => ({
  type: LogActions.ADD_LOG,
  log
})

export const removeLog = (log) => ({
  type: LogActions.REMOVE_LOG,
  log
})

export const SeriesActions = {
  LIST_SERIES :'LIST_SERIES'
}

export const listSeries = (series) => ({
  type: SeriesActions.LIST_SERIES,
  series
})