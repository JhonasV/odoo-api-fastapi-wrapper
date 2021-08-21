enum EventTagEnum {
  in_progress = 'in progress',
  blocked = 'blocked',
  ready_for_next_stage = 'Ready for Next Stage',
}


const getTagType = (event_label: string): string => {
  let tagType = ''
  let event_label_lower = event_label.toLowerCase()

  if (event_label_lower === EventTagEnum.in_progress) tagType = 'orange'

  if (event_label_lower === EventTagEnum.blocked) tagType = 'red'

  if (event_label_lower === EventTagEnum.ready_for_next_stage)
    tagType = 'green'

  return tagType
}

const dateFormat = (date: Date): string => {
  let d = new Date(date)
  let ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d)
  let mo = new Intl.DateTimeFormat('es', { month: 'short' }).format(d)
  let da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d)
  return `${da}/${mo}/${ye}`.toUpperCase()
}

const timeFormat = (date: Date): string => {
  let d = new Date(date)
  let ho = new Intl.DateTimeFormat('es', {
    hour12: true,
    hour: 'numeric',
  }).format(d)
  let mi = new Intl.DateTimeFormat('es', { minute: '2-digit' }).format(d)

  return `${ho.split(' ').join(`:${mi}`)}`.toUpperCase()
}

export { timeFormat, dateFormat, getTagType}
